# Tugas web-ui-automation-advance-part2
Dokumen ini merupakan bagian dari tugas QA Automation yang mengimplementasikan **Selenium WebDriver**, **Mocha**, dan **Pixelmatch** untuk melakukan pengujian login dan validasi visual pada situs [saucedemo.com](https://www.saucedemo.com/).

##Tugas
- Melakukan login otomatis menggunakan pendekatan **Page Object Model (POM)**
- Mengambil screenshot setelah login
- Membandingkan tampilan UI saat ini dengan tampilan acuan (baseline)
- Menandai perubahan visual menggunakan file `diff.png`

##Teknologi yang Digunakan
- Selenium WebDriver
- Mocha (framework testing)
- Chai (library assertion)
- Pixelmatch (library perbandingan gambar)
- PNGJS (pengolahan file PNG)

Struktur Folder
Web UI Automation Advance Part 2/
├── pages/
│   └── page_login.js
├── tests/
│   └── test_sesi11.js
├── screenshots/
│   ├── baseline.png
│   ├── current.png
│   └── diff.png
├── .gitignore
├── package.json
├── README.md

## Hasil screenshot akan tersimpan di folder `screenshots/`.
## Catatan Tambahan

- Folder `node_modules/` dan `screenshots/` **tidak di-push ke GitHub** karena sudah ditambahkan ke `.gitignore`
- File `baseline.png` akan dibuat otomatis jika belum tersedia
- Test menggunakan timeout 15 detik agar proses login dan screenshot tidak gagal

**Nama:** Cheps Neo  
**Domisili:** Palu Selatan, Sulawesi Tengah  
**Tugas:** QA Automation - LMS Submission  




