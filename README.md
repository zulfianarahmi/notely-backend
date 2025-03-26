# Be-Notely

Backend untuk aplikasi Notely, dibuat dengan **Node.js**, **Express**, **TypeScript**, dan **Prisma** (PostgreSQL).

## Apa yang Sudah Dikerjakan?
- **Setup Project**: Install dependencies, setup TypeScript, dan Prisma.
- **Database**: Bikin model `Note` dan jalankan migration.
- **API CRUD**: Endpoint untuk buat, baca, update, dan hapus catatan.
- **Validasi**: Pake Zod buat validasi data.
- **Testing**: Test API pake Postman.

## Cara Menjalankan
1. Clone repo:
   ```bash
   git clone https://github.com/zulfianarahmi/be-notely.git
   cd be-notely

## Endpoint API
- POST /api/notes: Buat catatan baru.
- GET /api/notes: Ambil semua catatan.
- GET /api/notes/:id: Ambil satu catatan berdasarkan ID. (BLM)
- PUT /api/notes/:id: Update catatan berdasarkan ID.
- DELETE /api/notes/:id: Hapus catatan berdasarkan ID.
