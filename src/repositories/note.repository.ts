import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getNotes = async () => {
  return await prisma.note.findMany();
};

export const getNoteById = async (id: number) => {
  return await prisma.note.findUnique({
    where: { id },
  });
};

export const createNote = async (title: string, content: string) => {
  return await prisma.note.create({
    data: { title, content },
  });
};

export const updateNote = async (
  id: number,
  title: string,
  content: string
) => {
  return await prisma.note.update({
    where: { id },
    data: { title, content },
  });
};

export const deleteNote = async (id: number) => {
  return await prisma.note.delete({
    where: { id },
  });
};
