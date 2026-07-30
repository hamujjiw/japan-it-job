# Tema: Lintas Utara

Tema kustom untuk papan lowongan yang menghubungkan pelamar Indonesia dengan
pekerjaan di Jepang. Dibuat khusus untuk proyek ini karena sepuluh tema bawaan
Theme Factory semuanya dirancang untuk presentasi, bukan antarmuka data yang
dipakai berulang setiap hari.

## Titik berangkat

Bendera Indonesia dan Jepang memakai warna yang sama: merah dan putih. Itu satu
kebetulan yang jarang dipakai, dan cukup spesifik untuk dijadikan dasar identitas
visual — bukan palet gradien biru-ungu yang bisa dipakai produk apa pun.

Jadi seluruh antarmuka dibangun dari putih dan netral yang tenang, dengan **satu**
warna jenuh: merah yang berada di antara merah kedua bendera. Merah itu hanya
muncul di dua tempat — indikator kelayakan dan tombol utama. Tidak ada aksen kedua
yang bersaing.

## Palet warna

### Mode terang

| Peran | Hex | Catatan |
| --- | --- | --- |
| Kanvas | `#FBFBFC` | Putih dingin, bukan krem |
| Permukaan kartu | `#FFFFFF` | Dengan bayangan sangat halus |
| Tinta utama | `#111A24` | Navy-tinta, bukan hitam murni |
| Tinta sekunder | `#5A6875` | Label, metadata |
| Garis rambut | `#E4E8ED` | Pemisah, batas kartu |
| **Merah lintas** | `#C51235` | Di antara merah Indonesia dan Jepang. Aksen tunggal |
| Jade | `#00806E` | Status "lolos"; satu-satunya warna pendukung |
| Amber | `#B4690E` | Status "perlu diperiksa" |

### Mode gelap

| Peran | Hex |
| --- | --- |
| Kanvas | `#0C1118` |
| Permukaan kartu | `#151D27` |
| Tinta utama | `#E8ECF1` |
| Tinta sekunder | `#93A1B0` |
| Garis rambut | `#232D3A` |
| Merah lintas | `#F0455A` |
| Jade | `#3ECFA9` |
| Amber | `#E4A93C` |

## Tipografi

| Peran | Huruf | Alasan |
| --- | --- | --- |
| Judul | **Bricolage Grotesque** | Grotesk variabel dengan karakter kuat; tidak terbaca seperti pilihan bawaan |
| Antarmuka & isi | **Plus Jakarta Sans** | Dirancang di Jakarta oleh Tokotype. Cocok untuk pembaca Indonesia dan sangat jernih di layar kecil |
| Angka & data | **JetBrains Mono** | Gaji dan persentase sejajar antar baris |

Skala: judul `clamp(2.5rem, 6vw, 4.75rem)` dengan pelacakan rapat `-0.03em`;
isi 15px/1.65; label 11px dengan pelacakan `0.14em` huruf besar.

## Elemen penanda

**Meter Gerbang.** Setiap lowongan menampilkan tiga gerbang yang harus dilewati
seorang pelamar dari Indonesia: bahasa, izin melamar dari luar Jepang, dan lokasi
kerja. Ketiganya digambar sebagai tiga segmen pendek yang terisi atau kosong.

Ini bukan hiasan. Tiga hal itulah yang menentukan apakah sebuah lowongan benar-benar
bisa dilamar, dan itu adalah pertanyaan yang membuat papan ini ada. Segmen yang sama
juga dipakai di panel ringkasan sebagai distribusi seluruh lowongan, dan bisa diklik
untuk menyaring.

## Cocok untuk

Antarmuka data yang dipakai berulang: papan lowongan, dasbor, alat pencarian.
Bukan untuk presentasi atau materi pemasaran.
