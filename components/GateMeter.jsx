import { GATE_LABEL } from "@/lib/enrich";

const TEXT = {
  bahasa: {
    lolos: "Tanpa Jepang",
    sebagian: "Jepang dasar",
    terkunci: "Jepang bisnis",
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

/**
 * Elemen penanda situs ini. Tiga gerbang yang menentukan apakah seorang
 * pelamar dari Indonesia benar-benar bisa melamar: bahasa, izin melamar
 * dari luar Jepang, dan lokasi kerja.
 */
export default function GateMeter({ gates }) {
  const keys = ["bahasa", "lamaran", "lokasi"];

  return (
    <div className="gates" role="group" aria-label="Kelayakan untuk pelamar dari luar Jepang">
      {keys.map((key) => (
        <div className="gate" key={key} data-state={gates[key]}>
          <div className="gate-bar" />
          <div className="gate-text" title={`${GATE_LABEL[key]}: ${TEXT[key][gates[key]]}`}>
            {TEXT[key][gates[key]]}
          </div>
        </div>
      ))}
    </div>
  );
}
