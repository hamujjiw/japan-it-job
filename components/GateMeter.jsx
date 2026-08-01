import { GATE_LABEL } from "@/lib/enrich";

const TEXT = {
  bahasa: {
    lolos: "Tanpa Jepang",
    sebagian: "N5 sampai N3",
    terkunci: "N2 ke atas",
    "tidak-jelas": "Bahasa tak jelas",
  },
  lamaran: {
    lolos: "Dari luar Jepang",
    sebagian: "Sebagian",
    terkunci: "Harus di Jepang",
    "tidak-jelas": "Tak disebutkan",
  },
  lokasi: {
    lolos: "Remote penuh",
    sebagian: "Hybrid",
    terkunci: "Di kantor",
    "tidak-jelas": "Tak disebutkan",
  },
};

const KEYS = ["bahasa", "lamaran", "lokasi"];

/**
 * Elemen penanda situs ini: jalur gerbang.
 *
 * Tiga gerbang yang menentukan apakah seorang pelamar dari Indonesia
 * benar-benar bisa melamar, digambar sebagai satu jalur dengan tiga
 * stasiun. Bentuk ini dipilih menggantikan tiga bar sejajar karena
 * ketiganya bukan tiga nilai independen, melainkan konjungsi: satu
 * gerbang tertutup, seluruh perjalanan berhenti. Jalur menunjukkan itu,
 * bar sejajar tidak.
 *
 * @param {'sm'|'md'|'lg'} size
 */
export default function GateMeter({ gates, size = "md" }) {
  const allOpen = KEYS.every((k) => gates[k] === "lolos");

  const ringkasan = KEYS.map(
    (k) => `${GATE_LABEL[k]}: ${TEXT[k][gates[k]]}`
  ).join(", ");

  return (
    <div
      className={`gatepath${size === "lg" ? " gatepath-lg" : size === "sm" ? " gatepath-sm" : ""}`}
      data-open={allOpen}
      role="img"
      aria-label={`Kelayakan untuk pelamar dari luar Jepang. ${ringkasan}`}
    >
      {KEYS.map((key) => (
        <div className="gp-seg" key={key} data-state={gates[key]}>
          <span className="gp-node" />
          <span className="gp-label" title={`${GATE_LABEL[key]}: ${TEXT[key][gates[key]]}`}>
            {TEXT[key][gates[key]]}
          </span>
        </div>
      ))}
      <div className="gp-end" aria-hidden="true" />
    </div>
  );
}
