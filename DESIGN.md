# Tema: Kaisatsu

Arah desain NihonGate. Dinamai dari 改札 (kaisatsu), gerbang tiket stasiun
Jepang: benda sehari-hari yang mekanismenya persis sama dengan inti situs ini.
Kamu mendekat, sistem membaca kelayakanmu, gerbangnya membuka atau menutup.

## Titik berangkat

Nama situsnya NihonGate, dan mekanik intinya tiga gerbang yang harus dilewati
pelamar dari Indonesia: bahasa, izin melamar dari luar Jepang, lokasi kerja.

Dua artefak dunia Jepang dipakai sebagai bahan:

1. **改札 (gerbang tiket stasiun)** — hijau berarti lewat, merah berarti berhenti.
   Tidak ada nuansa abu-abu di sana, dan itu jujur: sebuah lowongan memang
   bisa dilamar atau tidak.
2. **路線図 (diagram jalur kereta)** — stasiun sebagai lingkaran di sepanjang
   garis. Bentuk paling dikenal dari sistem transportasi Jepang.

## Elemen penanda: Jalur Gerbang

Sebelumnya tiga gerbang digambar sebagai tiga bar sejajar. Itu keliru secara
informasi: bar sejajar menyiratkan tiga hal independen yang masing-masing
punya nilai sendiri. Kenyataannya konjungsi — satu gerbang tertutup, seluruh
perjalanan berhenti.

Sekarang bentuknya satu garis jalur dengan tiga stasiun:

```
●━━━━━━━●━━━━━━━●━━━━▶
Bahasa   Lamaran  Lokasi
```

- Simpul terisi + garis padat = gerbang terbuka
- Simpul cincin + garis padat tipis = bisa diusahakan
- Simpul kosong + garis putus = tertutup dari luar Jepang
- Panah di ujung = tujuan, hanya utuh kalau ketiganya terlewati

Satu bentuk ini dipakai di tiga tempat dengan skala berbeda: kartu lowongan
(kecil), panel detail (sedang), dan halaman sambutan (besar, digambar saat
halaman dimuat). Begitu pengunjung paham bacaannya sekali, mereka paham di
semua tempat.

## Palet

Satu warna jenuh saja, plus dua warna status yang diambil dari lampu gerbang
tiket sungguhan.

### Mode terang

| Peran | Hex | Catatan |
| --- | --- | --- |
| Kanvas | `#FAFAF8` | Putih hangat, bukan abu dingin |
| Permukaan | `#FFFFFF` | Kartu, panel |
| Tinta | `#0F1115` | Nyaris hitam, sedikit dingin |
| Tinta sekunder | `#5B6472` | Metadata, label |
| Garis rambut | `#E6E8EC` | Pemisah |
| **Merah lintas** | `#C6102E` | Titik tengah merah bendera Indonesia (#CE1126) dan Jepang (#BC002D). Aksen tunggal |
| Sinyal lolos | `#00875A` | Hijau lampu gerbang terbuka |
| Sinyal tahan | `#B45309` | Amber, bisa diusahakan |

### Mode gelap

| Peran | Hex |
| --- | --- |
| Kanvas | `#0B0D11` |
| Permukaan | `#14181F` |
| Tinta | `#E9ECF1` |
| Tinta sekunder | `#8B95A5` |
| Garis rambut | `#212731` |
| Merah lintas | `#FF4D63` |
| Sinyal lolos | `#3DD68C` |
| Sinyal tahan | `#E8A33D` |

## Tipografi

| Peran | Huruf | Alasan |
| --- | --- | --- |
| Display | **Archivo**, sumbu lebar dilebarkan ke 112–125% | Grotesk variabel dengan sumbu lebar. Dilebarkan, bentuknya membaca seperti papan penunjuk stasiun, bukan seperti judul artikel |
| Antarmuka & isi | **Plus Jakarta Sans** | Dirancang di Jakarta oleh Tokotype. Cocok untuk pembaca Indonesia, sangat jernih di ukuran kecil |
| Data | **JetBrains Mono** | Gaji dan persentase sejajar antar baris |

Judul besar diset dengan pelacakan rapat (`-0.04em`) dan lebar dilebarkan.
Kombinasi itu — lebar tapi rapat — yang memberi kesan papan penunjuk.

## Gerak

Satu momen terorkestrasi, bukan efek yang bertaburan: di halaman sambutan,
jalur gerbang menggambar dirinya dari kiri ke kanan saat halaman dimuat.
Selebihnya hanya transisi halus pada hover dan fokus. Seluruhnya mati kalau
`prefers-reduced-motion` menyala.

## Cocok untuk

Antarmuka data yang dipakai berulang. Bukan untuk presentasi atau materi
pemasaran.
