"use client";

const YEN = (v) => (v ? `¥${(v / 1_000_000).toFixed(1)}jt` : "—");

/**
 * Panel ringkasan pasar. Semua angka dihitung dari kumpulan lowongan yang sama
 * yang ditampilkan di daftar, jadi panel dan daftar tidak mungkin bercerita beda.
 */
export default function InsightPanel({ stats, filters, onChange }) {
  const maxBand = Math.max(...stats.salary.bands.map((b) => b.count), 1);
  const maxJp = Math.max(...stats.japanese.map((j) => j.count), 1);

  return (
    <section className="shell" style={{ paddingBottom: "clamp(20px, 4vw, 34px)" }}>
      <div className="tiles">
        <div className="tile">
          <div className="tile-num">
            {stats.openToAbroadPct}
            <small>%</small>
          </div>
          <div className="tile-label">Terbuka dari luar Jepang</div>
          <div className="tile-sub">{stats.openToAbroad} dari {stats.total} lowongan</div>
        </div>

        <div className="tile">
          <div className="tile-num">
            {stats.noJapanesePct}
            <small>%</small>
          </div>
          <div className="tile-label">Tanpa syarat bahasa Jepang</div>
          <div className="tile-sub">{stats.noJapanese} lowongan</div>
        </div>

        <div className="tile">
          <div className="tile-num mono" style={{ fontFamily: "var(--font-display)" }}>
            {YEN(stats.salary.median)}
          </div>
          <div className="tile-label">Median gaji tahunan</div>
          <div className="tile-sub">
            Rentang tengah {YEN(stats.salary.p25)}–{YEN(stats.salary.p75)}
          </div>
        </div>

        <div className="tile">
          <div className="tile-num">
            {stats.remoteFriendlyPct}
            <small>%</small>
          </div>
          <div className="tile-label">Remote atau hybrid</div>
          <div className="tile-sub">{stats.remoteFriendly} lowongan</div>
        </div>
      </div>

      <div className="charts">
        <div className="chart">
          <h3>Sebaran gaji tahunan</h3>
          <div className="bars">
            {stats.salary.bands.map((band, i) => (
              <div className="bar-col" key={band.label}>
                <div
                  className="bar"
                  style={{
                    height: `${Math.max(4, (band.count / maxBand) * 100)}%`,
                    animationDelay: `${i * 70}ms`,
                  }}
                  title={`${band.count} lowongan`}
                />
                <div className="bar-cap">
                  {band.label}
                  <br />
                  <span className="mono">{band.count}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="note">
            {stats.salary.disclosedPct}% lowongan mencantumkan gaji. Yang tidak
            mencantumkan tidak masuk grafik ini.
          </p>
        </div>

        <div className="chart">
          <h3>Tuntutan bahasa Jepang</h3>
          <div className="ladder">
            {stats.japanese.map((row, i) => (
              <div className="ladder-row" key={row.key}>
                <span>{row.label}</span>
                <div className="ladder-track">
                  <div
                    className="ladder-fill"
                    style={{
                      width: `${(row.count / maxJp) * 100}%`,
                      animationDelay: `${i * 60}ms`,
                    }}
                  />
                </div>
                <span className="ladder-num mono">{row.count}</span>
              </div>
            ))}
          </div>
          <p className="note">
            Tingkat &ldquo;tidak jelas&rdquo; tetap ditampilkan di daftar, karena sering
            ternyata bisa dinegosiasikan.
          </p>
        </div>

        <div className="chart">
          <h3>Teknologi yang paling dicari</h3>
          <div className="pillbox">
            {stats.stack.map((t) => {
              const on = filters.stack.includes(t.label);
              return (
                <button
                  key={t.label}
                  type="button"
                  className="pillstat"
                  aria-pressed={on}
                  onClick={() =>
                    onChange({
                      ...filters,
                      stack: on
                        ? filters.stack.filter((x) => x !== t.label)
                        : [...filters.stack, t.label],
                    })
                  }
                >
                  {t.label} <b>{t.count}</b>
                </button>
              );
            })}
          </div>
          <p className="note">Klik untuk menyaring daftar di bawah.</p>
        </div>
      </div>
    </section>
  );
}
