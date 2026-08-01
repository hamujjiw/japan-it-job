import Link from "next/link";

/**
 * Halaman sambutan. Tugasnya dua: menjelaskan papan ini dalam sekali baca,
 * dan mengajarkan cara membaca jalur gerbang sebelum pengunjung masuk ke
 * daftar lowongan. Tidak ada login, tidak ada pendaftaran.
 *
 * Jalur di bawah ini contoh, bukan data: ketiga simpulnya sengaja disetel
 * ke tiga keadaan berbeda supaya seluruh bacaan terlihat sekaligus.
 */
const CONTOH = [
  { key: "bahasa", nama: "Bahasa", state: "lolos", arti: "belum menuntut bahasa Jepang" },
  { key: "lamaran", nama: "Lamaran", state: "sebagian", arti: "sebagian terbuka" },
  { key: "lokasi", nama: "Lokasi", state: "terkunci", arti: "wajib di kantor" },
];

export default function Welcome({ stats, meta }) {
  const sumberAktif = meta.sources.filter((s) => s.ok).length;

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
          sampai menengah.
        </p>

        <section className="welcome-path" aria-labelledby="cara-baca">
          <div className="welcome-path-head">
            <h2 className="label" id="cara-baca">
              Tiga gerbang, satu jalur
            </h2>
            <span className="label">Contoh bacaan</span>
          </div>

          <div className="gatepath gatepath-lg" role="img"
               aria-label="Contoh: gerbang bahasa terbuka, gerbang lamaran sebagian, gerbang lokasi tertutup">
            {CONTOH.map((g) => (
              <div className="gp-seg" key={g.key} data-state={g.state}>
                <span className="gp-node" />
                <span className="gp-label">{g.nama}</span>
              </div>
            ))}
            <div className="gp-end" aria-hidden="true" />
          </div>

          <p className="route-foot">
            Tiap lowongan dibaca untuk tiga hal yang paling sering menggagalkan lamaran
            dari Indonesia. Simpul terisi berarti gerbang itu terbuka, cincin kuning
            berarti bisa diusahakan, dan garis putus berarti tertutup dari luar Jepang.
            Jalurnya hanya sampai ujung kalau ketiganya terlewati.
          </p>
        </section>

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
            <dt>{sumberAktif}</dt>
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
