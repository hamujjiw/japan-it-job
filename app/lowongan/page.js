import Link from "next/link";
import JobBoard from "@/components/JobBoard";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { getJobs } from "@/lib/aggregate";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Cari lowongan",
  description:
    "Lowongan IT, business analyst, dan transformasi digital di Jepang untuk pelamar dari Indonesia. Tingkat fresh graduate sampai menengah.",
};

export default async function Page() {
  let data = null;
  try {
    data = await getJobs();
  } catch {
    data = null;
  }

  return (
    <>
      <a className="skip-link" href="#hasil">
        Lompat ke daftar lowongan
      </a>

      <header className="topbar">
        <div className="shell topbar-inner">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true" />
            <span>Papan Lowongan Jepang</span>
          </Link>
          <div className="topbar-actions">
            <a className="btn btn-ghost btn-sm" href="/api/jobs">API</a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        {!data ? (
          <div className="shell" style={{ paddingBlock: 80 }}>
            <div className="empty">
              <h2>Papan sedang kosong</h2>
              <p>
                Semua sumber gagal dihubungi barusan. Coba muat ulang beberapa menit lagi.
              </p>
            </div>
          </div>
        ) : (
          <JobBoard jobs={data.jobs} stats={data.stats} meta={data.meta} />
        )}
      </main>

      {data && <Footer meta={data.meta} />}
    </>
  );
}
