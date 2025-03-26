import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import { z } from "zod";

// Schema validasi untuk data Note menggunakan Zod
const noteSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

// Fungsi untuk mengambil semua catatan
export const getNotes = async (req: Request, res: Response) => {
  try {
    // Ambil semua data Note dari database
    const notes = await prisma.note.findMany();
    // Kirim response berupa data notes
    res.json(notes);
  } catch (error) {
    // Handle error
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};

// Fungsi untuk mengambil 1 catatan berdasarkan ID
export const getNoteById = async (req: Request, res: Response) => {
  try {
    // Ambil ID dari parameter request
    const { id } = req.params;
    // Convert ID dari string ke number
    const noteId = parseInt(id, 10);

    // Validasi ID
    if (isNaN(noteId)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // Cari catatan berdasarkan ID
    const note = await prisma.note.findUnique({
      where: { id: noteId },
    });

    // Jika catatan tidak ditemukan
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    // Kirim response berupa data note
    res.json(note);
  } catch (error) {
    // Handle error
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};

// Fungsi untuk membuat catatan baru
export const createNote = async (req: Request, res: Response) => {
  try {
    // Validasi data request body menggunakan Zod
    const validatedData = noteSchema.parse(req.body);

    // Buat catatan baru di database
    const newNote = await prisma.note.create({
      data: {
        title: validatedData.title,
        content: validatedData.content,
      },
    });

    // Kirim response berupa data note yang baru dibuat
    res.json(newNote);
  } catch (error) {
    // Handle error
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};

// Fungsi untuk mengupdate catatan berdasarkan ID
export const updateNote = async (req: Request, res: Response) => {
  try {
    // Ambil ID dari parameter request
    const { id } = req.params;
    // Convert ID dari string ke number
    const noteId = parseInt(id, 10);

    // Validasi ID
    if (isNaN(noteId)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // Validasi data request body menggunakan Zod
    const validatedData = noteSchema.parse(req.body);

    // Update catatan di database
    const updatedNote = await prisma.note.update({
      where: { id: noteId },
      data: {
        title: validatedData.title,
        content: validatedData.content,
      },
    });

    // Kirim response berupa data note yang sudah diupdate
    res.json(updatedNote);
  } catch (error) {
    // Handle error
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};

// Fungsi untuk menghapus catatan berdasarkan ID
export const deleteNote = async (req: Request, res: Response) => {
  try {
    // Ambil ID dari parameter request
    const { id } = req.params;
    // Convert ID dari string ke number
    const noteId = parseInt(id, 10);

    // Validasi ID
    if (isNaN(noteId)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // Hapus catatan dari database
    await prisma.note.delete({
      where: { id: noteId },
    });

    // Kirim response berupa pesan sukses
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    // Handle error
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};
