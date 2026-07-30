import Link from "next/link";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { getJobs } from "@/lib/aggregate";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Panduan melamar kerja di Jepang",
  description:
    "Penjelasan singkat soal visa kerja, level JLPT, dan cara membaca lowongan di NihonGate untuk pelamar dari Indonesia.",
};

const FAQ = [
  {
    q: "Apa itu visa Engineer/Specialist in Humanities?",
    a: "Ini visa kerja paling umum untuk profesional asing di Jepang, sering disingkat Gijinkoku (技術・人文知識・国際業務). Mencakup peran IT, business analyst, marketing, dan sebagian besar pekerjaan kantoran. Perusahaan yang merekrut biasanya mengurus sponsorship-nya, bukan kamu sendiri yang apply visa duluan.",
  },
  {
    q: "Kalau lowongan tidak menyebut visa sama sekali, apa artinya?",
    a: "Belum tentu tertutup. Banyak perusahaan tidak mencantumkan kebijakan visa di halaman lowongan karena itu dibahas belakangan saat wawancara. Di NihonGate, lowongan seperti ini ditandai \"tidak jelas\", bukan otomatis dikira tertutup.",
  },
  {
    q: "JLPT itu apa, dan gimana cara tahu levelku?",
    a: "JLPT (Japanese Language Proficiency Test) punya lima tingkat, N5 paling dasar sampai N1 paling mahir. N5 setara sudah bisa baca hiragana/katakana dan kalimat sangat sederhana. N3 sudah bisa mengikuti percakapan sehari-hari. N2 dianggap cukup untuk kerja kantoran. Kalau belum pernah tes, perkirakan dari materi belajar yang sedang kamu pakai. Buku N4 berarti levelmu sekitar N5 sampai N4.",
  },
  {
    q: "Kenapa cuma tingkat fresh graduate sampai menengah?",
    a: "NihonGate sengaja dibatasi ke situ. Lowongan senior dan lead biasanya menuntut jaringan profesional dan pengalaman spesifik yang jalurnya beda dari melamar lewat papan lowongan terbuka.",
  },
  {
    q: "Kenapa Indeed dan LinkedIn tidak muncul langsung di daftar?",
    a: "Keduanya melarang datanya disalin otomatis. Supaya tetap membantu, setiap lowongan punya tombol yang membuka pencarian di Indeed dan LinkedIn dengan kata kunci posisi dan perusahaan yang sudah terisi.",
  },
  {
    q: "Angka rupiah di setiap lowongan itu akurat?",
    a: "Itu perkiraan kasar dari gaji kotor dikali kurs saat itu. Setelah dipotong pajak dan asuransi di Jepang, biasanya berkurang sekitar 20-30 persen. Dipakai sebagai gambaran awal saja, bukan angka final.",
  },
];

export default async function Page() {
  let meta = { sources: [] };
  try {
    const data = await getJobs();
    meta = data.meta;
  } catch {
    /* halaman ini tetap berguna walau data lowongan gagal dimuat */
  }

  return (
    <>
      <Topbar active="/panduan" />
      <main className="shell guide-page">
        <div className="guide-head">
          <h1>Panduan singkat</h1>
          <p>
            Beberapa pertanyaan yang biasanya muncul sebelum mulai melamar kerja di Jepang
            dari Indonesia.
          </p>
        </div>

        <div className="guide-list">
          {FAQ.map((item) => (
            <details className="guide-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>

        <div className="guide-cta">
          <p>Sudah lebih jelas? Langsung lihat lowongan yang cocok dengan levelmu.</p>
          <Link href="/lowongan" className="btn btn-primary">
            Cari lowongan
          </Link>
        </div>
      </main>
      <Footer meta={meta} />
    </>
  );
}
