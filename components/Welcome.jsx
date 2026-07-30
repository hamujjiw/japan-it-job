import Link from "next/link";

/**
 * Halaman sambutan. Tugasnya satu: menjelaskan papan ini dalam sekali baca,
 * lalu mengantar pengunjung ke daftar lowongan. Tidak ada login, tidak ada
 * pendaftaran, tidak ada apa pun yang menahan orang di depan pintu.
 */
export default function Welcome({ stats, meta }) {
  return (
    <main className="welcome">
      <div className="shell welcome-inner">
        <span className="hero-eyebrow">
          <span className="pulse" aria-hidden="true" />
          {meta.total} lowongan aktif · disegarkan tiap 30 menit
        </span>

        <h1 className="welcome-title">
          Kerja di Jepang, <em>tanpa menebak-nebak</em> apakah kamu memenuhi syarat.
        </h1>

        <p className="welcome-lede">
          Papan lowongan untuk pelamar dari Indonesia yang mengincar peran IT, business
          analyst, dan transformasi digital di Jepang. Khusus tingkat fresh graduate
          sampai menengah. Setiap lowongan sudah ditandai untuk tiga hal yang paling
          sering menggagalkan lamaran: tuntutan bahasa Jepang, izin melamar dari luar
          Jepang, dan lokasi kerja.
        </p>

        <Link className="btn btn-primary btn-cta" href="/lowongan">
          Mulai cari lowongan
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>

        <dl className="welcome-stats">
          <div>
            <dt>{stats.openToAbroadPct}%</dt>
            <dd>bisa dilamar dari luar Jepang</dd>
          </div>
          <div>
            <dt>{stats.noJapanesePct}%</dt>
            <dd>belum menuntut bahasa Jepang</dd>
          </div>
          <div>
            <dt>{meta.sources.filter((s) => s.ok).length}</dt>
            <dd>papan lowongan digabung</dd>
          </div>
        </dl>

        <p className="welcome-foot">
          Sumber: {meta.sources.map((s) => s.name).join(" · ")}. Papan ini tidak memproses
          lamaran. Setiap tombol melamar mengarah ke halaman aslinya.
        </p>
      </div>
    </main>
  );
}
