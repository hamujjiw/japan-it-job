/**
 * Tautan pencarian ke Indeed dan LinkedIn.
 *
 * Kedua situs itu melarang scraping di ketentuan layanannya dan memblokir
 * alamat IP pusat data seperti milik Vercel. Jadi alih-alih menyalin data
 * mereka, kita kirim pengunjung ke halaman pencarian mereka dengan kata
 * kunci yang sudah terisi. Sah, tidak bisa rusak, dan tetap membawa
 * pengunjung ke sumber yang mereka minta.
 */
export function searchLinks(job) {
  const q = encodeURIComponent(`${job.title} ${job.company}`.trim());
  const titleOnly = encodeURIComponent(job.title);

  return [
    {
      label: "Cari di Indeed Jepang",
      url: `https://jp.indeed.com/jobs?q=${q}&l=${encodeURIComponent(job.city || "Japan")}`,
    },
    {
      label: "Cari di LinkedIn",
      url: `https://www.linkedin.com/jobs/search/?keywords=${titleOnly}&location=Japan`,
    },
    {
      label: "Cari di Google",
      url: `https://www.google.com/search?q=${q}+lowongan+jepang`,
    },
  ];
}
