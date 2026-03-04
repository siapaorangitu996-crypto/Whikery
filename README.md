# Panduan Mengakses Project Jules di GitHub

Berikut adalah langkah-langkah lengkap untuk melihat project yang dikerjakan oleh Jules:

### 1. Akses Repositori Utama
Buka browser Anda dan kunjungi URL berikut untuk melihat repositori utama project **Whikery**:
[https://github.com/siapaorangitu996-crypto/Whikery](https://github.com/siapaorangitu996-crypto/Whikery)

### 2. Melihat Branch (Cabang) Kerja
Project ini memiliki beberapa branch. Jules biasanya bekerja pada branch khusus. Untuk melihat daftar branch:
- Di halaman utama repositori GitHub, klik tombol dropdown bertuliskan **"main"** (terletak di sebelah kiri atas daftar file).
- Anda akan melihat daftar branch yang tersedia, termasuk branch kerja Jules yang diawali dengan nama `jules-...`.

### 3. Melihat Riwayat Commit (Perubahan)
Untuk melihat apa saja yang telah dikerjakan oleh Jules secara detail:
- Klik pada teks **"commits"** yang berada di bagian kanan atas daftar file.
- Anda akan melihat daftar semua perubahan yang telah dilakukan, lengkap dengan pesan commit dan waktu perubahannya.
- Anda bisa klik pada salah satu commit untuk melihat perbedaan kode (*diff*) yang ditambahkan atau diubah.

### 4. Menjelajahi Kode
- Anda dapat menelusuri folder dan file langsung dari antarmuka GitHub.
- Jika Anda ingin melihat kode pada branch tertentu, pastikan Anda telah memilih branch tersebut di langkah nomor 2.

### 5. Mengunduh atau Clone Project
Jika Anda ingin melihat kode di komputer lokal:
- Klik tombol hijau bertuliskan **"Code"**.
- Pilih **"Download ZIP"** untuk mengunduh langsung, atau salin URL HTTPS untuk melakukan `git clone`.

---

### 6. Cara Melihat Tampilan Web di Berbagai Perangkat (Responsive View)
Jika project ini sudah dihosting atau sedang dijalankan di lokal, Anda dapat melihat tampilannya untuk Android, Tablet, atau Laptop dengan cara berikut:

#### **A. Menggunakan Browser Developer Tools (Chrome/Edge/Firefox)**
1. **Buka Website**: Akses URL website yang ingin Anda review.
2. **Buka Inspect Element**:
   - Klik kanan di mana saja pada halaman web dan pilih **"Inspect"** (Periksa).
   - Atau tekan tombol shortcut `F12` atau `Ctrl + Shift + I` (Windows) / `Cmd + Option + I` (Mac).
3. **Aktifkan Device Toolbar**:
   - Klik ikon **"Toggle Device Toolbar"** yang berbentuk gambar HP dan Tablet (biasanya di pojok kiri atas jendela Inspect).
   - Atau tekan `Ctrl + Shift + M`.

#### **B. Memilih Jenis Perangkat (Detail)**
- **Untuk Android/Smartphone**:
  - Pada bagian atas halaman (setelah Device Toolbar aktif), klik dropdown **"Responsive"**.
  - Pilih perangkat seperti **iPhone SE, Pixel 7, atau Samsung Galaxy S8+** untuk melihat tampilan Android/Mobile.
- **Untuk Tablet/iPad**:
  - Pilih **iPad Air** atau **iPad Mini** dari daftar dropdown yang sama.
- **Untuk Laptop/Desktop**:
  - Anda bisa memilih **"Responsive"** dan tarik bagian pinggir layar ke arah kanan hingga lebar layar mencapai 1024px atau lebih.
  - Atau pilih opsi **Laptop (1024px/1440px)** jika tersedia di daftar.

---

### 7. Cara Memindahkan Pekerjaan ke Repositori Lain (Repository Migration)
Jika Anda ingin memindahkan seluruh kode dan riwayat pekerjaan dari satu repositori (Repo A) ke repositori baru (Repo B), berikut adalah langkah-langkah detailnya:

#### **Metode 1: Menggunakan Git Remote (Paling Umum)**
Metode ini digunakan jika Anda sudah memiliki folder project di komputer Anda.
1. **Buat Repositori Baru**: Buat repositori kosong di GitHub/GitLab (Repo B).
2. **Buka Terminal/CMD**: Masuk ke folder project Anda.
3. **Cek Remote Saat Ini**:
   ```bash
   git remote -v
   ```
4. **Tambah Remote Baru**:
   ```bash
   git remote add destination https://github.com/username/repo-baru.git
   ```
5. **Push ke Repositori Baru**:
   ```bash
   git push destination main
   ```
   *(Ganti `main` dengan nama branch yang ingin Anda pindahkan).*

#### **Metode 2: Mirroring (Memindahkan Seluruh Branch & History)**
Gunakan metode ini jika Anda ingin memindahkan **semua** branch dan riwayat commit secara sempurna.
1. **Clone Mirror dari Repo Lama**:
   ```bash
   git clone --mirror https://github.com/username/repo-lama.git
   ```
2. **Masuk ke Folder yang Terbentuk**:
   ```bash
   cd repo-lama.git
   ```
3. **Push Mirror ke Repo Baru**:
   ```bash
   git push --mirror https://github.com/username/repo-baru.git
   ```

#### **Metode 3: Manual (Tanpa Git CLI)**
1. **Download ZIP**: Di Repo A, klik tombol **Code** > **Download ZIP**.
2. **Ekstrak**: Ekstrak file di komputer Anda.
3. **Upload ke Repo B**:
   - Buka Repo B di browser.
   - Klik **"uploading an existing file"**.
   - Drag dan drop semua file dari folder hasil ekstrak ke browser.

---
*Dokumentasi ini dibuat untuk membantu pengguna memahami cara memantau perkembangan project, melakukan review tampilan, dan mengelola repositori dengan mudah.*
