import { PrismaClient, Pessoa } from "../../generated/prisma";

const prisma = new PrismaClient();

export const getAllPessoas = async (): Promise<Pessoa[]> => {
  return prisma.pessoa.findMany();
};

export const getPessoaById = async (id: number): Promise<Pessoa | null> => {
  return prisma.pessoa.findUnique({ where: { id } });
};

export const createPessoa = async (
  data: Omit<Pessoa, "id">
): Promise<Pessoa> => {
  return prisma.pessoa.create({ data });
};
