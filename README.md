# Retur Marketplace Pro

Aplikasi Android untuk membantu proses penerimaan dan pemeriksaan paket retur marketplace.

## Fitur
- Scan barcode/QR dengan kamera belakang dan scan berulang.
- Input manual satu nomor atau banyak nomor sekaligus.
- Pencocokan Order ID dan nomor resi dengan database Pixel.
- Pencegahan pencatatan scan duplikat pada hari yang sama.
- Status retur: menunggu pengecekan dan selesai.
- Riwayat retur, pencarian, hapus satu data, dan hapus semua riwayat.
- Impor Excel (.xlsx/.xls), CSV, serta pemulihan cadangan JSON.
- Ekspor laporan CSV, ekspor database, dan cadangan JSON.
- Penyimpanan lokal pada perangkat Android.

## Mengunduh APK Android
1. Buka tab **Actions**: https://github.com/pasartanjung025-lang/Retur-lusca/actions
2. Pilih proses **Build Android APK** yang paling baru.
3. Tunggu sampai statusnya **Success**.
4. Buka proses tersebut, lalu unduh artefak **Retur-Marketplace-Pro-debug-apk**.
5. Ekstrak ZIP artefak dan pasang file APK di HP Android. Jika diminta, izinkan pemasangan aplikasi dari sumber ini.

Setiap perubahan ke branch `main` atau `master` akan memicu build APK otomatis. Build ini menghasilkan APK debug untuk instalasi dan pengujian, bukan APK rilis Play Store.

## Catatan data
Database awal memuat Order ID Pixel yang tersedia pada proyek. Data awal tersebut tidak memiliki nomor resi, jadi unggah file Excel/CSV yang berisi kolom Order ID dan Resi/Tracking Number untuk mengaktifkan pencocokan nomor resi. Data retur dan database disimpan di perangkat/browser lokal, bukan disinkronkan antarperangkat. Gunakan menu **Cadangkan JSON** secara berkala.

## Build manual
```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```
