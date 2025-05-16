import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const findUsuarioByEmail = async (email: string) => {
  return prisma.usuario.findUnique({ where: { email } });
};
