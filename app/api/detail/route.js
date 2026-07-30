import { NextResponse } from "next/server";
import { extractDescription, summarize, experienceFromText } from "@/lib/detail";

export const revalidate = 86400;

const ALLOWED_HOSTS = new Set([
  "www.tokyodev.com", "tokyodev.com",
  "japan-dev.com", "www.japan-dev.com",
  "www.careercross.com", "careercross.com",
  "kapanjepan.com", "www.kapanjepan.com",
]);

/**
 * GET /api/detail?url=...
 * Mengambil deskripsi lowongan dari halaman aslinya. Info pengalaman kerja
 * dicari lewat pola teks langsung (selalu jalan, tanpa API key). Kalau
 * ANTHROPIC_API_KEY tersedia, sisanya diringkas ke Bahasa Indonesia; kalau
 * tidak, teks aslinya dikirim apa adanya berdampingan dengan info pengalaman.
 */
export async function GET(request) {
  const url = request.nextUrl.searchParams.get("url");
  const title = request.nextUrl.searchParams.get("title") || "";
  const company = request.nextUrl.searchParams.get("company") || "";

  if (!url) {
    return NextResponse.json({ error: "Parameter url wajib diisi" }, { status: 400 });
  }

  let host;
  try {
    host = new URL(url).host;
  } catch {
    return NextResponse.json({ error: "URL tidak valid" }, { status: 400 });
  }
  if (!ALLOWED_HOSTS.has(host)) {
    return NextResponse.json({ error: "Sumber tidak dikenal" }, { status: 400 });
  }

  try {
    const text = await extractDescription(url);
    if (!text || text.length < 120) {
      return NextResponse.json({
        mode: "kosong",
        text: "",
        experience: null,
        note: "Halaman sumber tidak memuat deskripsi yang bisa dibaca otomatis.",
      });
    }

    const experience = experienceFromText(text);

    let summary = null;
    let summaryError = null;
    try {
      summary = await summarize({ title, company, text });
    } catch (err) {
      summaryError = String(err.message || err);
    }

    return NextResponse.json(
      summary
        ? { mode: "ringkasan", summary, experience }
        : {
            mode: "mentah",
            text: text.slice(0, 6000),
            experience,
            note: summaryError
              ? `Ringkasan otomatis gagal (${summaryError}); ini teks asli dari halaman sumber.`
              : "Ini teks asli dari halaman sumber.",
          },
      { headers: { "Cache-Control": "public, s-maxage=86400" } }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Gagal membaca halaman lowongan", detail: String(err.message || err) },
      { status: 502 }
    );
  }
}
