import { PrismaClient, Elemento } from "../../generated/prisma";

const prisma = new PrismaClient();

export const getAllElementos = async (): Promise<Elemento[]> => {
  return prisma.elemento.findMany();
};

export const getElementoById = async (id: number): Promise<Elemento | null> => {
  return prisma.elemento.findUnique({ where: { id } });
};

export const createElemento = async (
  data: Omit<Elemento, "id">
): Promise<Elemento> => {
  return prisma.elemento.create({ data });
};

export const deleteElemento = async (id: number): Promise<Elemento> => {
  return prisma.elemento.delete({ where: { id } });
};

export const updateElemento = async (
  id: number,
  data: Partial<Elemento>
): Promise<Elemento> => {
  return prisma.elemento.update({ where: { id }, data });
};
