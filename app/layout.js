import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const SITE = "NihonGate";
const DESC =
  "Lowongan IT, business analyst, dan transformasi digital di Jepang yang terbuka untuk pelamar dari Indonesia. Tiap lowongan ditandai untuk tiga hal yang paling menentukan: syarat bahasa Jepang, izin melamar dari luar Jepang, dan lokasi kerja.";

export const metadata = {
  title: { default: SITE, template: `%s · ${SITE}` },
  description: DESC,
  keywords: [
    "lowongan IT Jepang",
    "kerja di Jepang",
    "visa sponsorship Jepang",
    "software engineer Jepang",
    "kerja IT luar negeri",
    "lowongan tanpa bahasa Jepang",
  ],
  // app/icon.svg dan app/apple-icon.png terdeteksi otomatis oleh Next.js
  // lewat konvensi nama berkas; baris ini cuma jaga-jaga di beberapa
  // klien lama yang tidak membaca konvensi itu.
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: { title: SITE, description: DESC, type: "website", locale: "id_ID" },
  twitter: { card: "summary_large_image", title: SITE, description: DESC },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d11" },
  ],
};

// Tema dipasang sebelum halaman digambar supaya tidak ada kedipan putih
// saat pengunjung memilih mode gelap.
const themeScript = `
try {
  var saved = localStorage.getItem('papan-tema');
  var dark = saved ? saved === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Archivo dimuat dengan sumbu lebar (wdth) supaya judul bisa
            dilebarkan sampai 125% dan membaca seperti papan penunjuk stasiun. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
