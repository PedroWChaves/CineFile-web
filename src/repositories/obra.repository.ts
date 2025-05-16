import { PrismaClient, Obra } from "../../generated/prisma";

const prisma = new PrismaClient();

export const getAllObras = async (): Promise<Obra[]> => {
  return prisma.obra.findMany();
};

export const getObraById = async (id: number): Promise<Obra | null> => {
  return prisma.obra.findUnique({ where: { id } });
};

export const createObra = async (data: Omit<Obra, "id">): Promise<Obra> => {
  return prisma.obra.create({ data });
};
