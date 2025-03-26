# Notely Backend

Backend untuk aplikasi Notely, dibangun menggunakan Node.js, Express, TypeScript, dan Prisma dengan PostgreSQL sebagai basis data.

## Fitur

- **Manajemen Catatan**: Membuat, membaca, memperbarui, dan menghapus catatan.
- **Autentikasi Pengguna**: Registrasi dan login pengguna dengan hashing kata sandi dan token JWT.
- **Validasi Data**: Menggunakan Zod untuk validasi input.
- **Pengujian API**: Endpoint telah diuji menggunakan Postman.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma CLI](https://www.prisma.io/docs/concepts/components/prisma-cli/installation)

## Instalasi

1. **Kloning repositori**:

   ```bash
   git clone https://github.com/zulfianarahmi/notely-backend.git
   cd notely-backend
2. Instal dependensi:

```bash
npm install```

3. Konfigurasi lingkungan:
Buat file .env di root proyek dan tambahkan variabel berikut:

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/nama_database"
SECRET_KEY="your_jwt_secret_key"```

4. Menjalankan Server
Untuk menjalankan server dalam mode pengembangan:

```bash
npm run dev```
