/*
  Warnings:

  - You are about to drop the `Ator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Diretor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Filme` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Serie` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tipo` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ObraType" AS ENUM ('FILME', 'SERIE');

-- CreateEnum
CREATE TYPE "PessoaType" AS ENUM ('ATOR', 'DIRETOR');

-- DropForeignKey
ALTER TABLE "Ator" DROP CONSTRAINT "Ator_idPessoa_fkey";

-- DropForeignKey
ALTER TABLE "Diretor" DROP CONSTRAINT "Diretor_idPessoa_fkey";

-- DropForeignKey
ALTER TABLE "Filme" DROP CONSTRAINT "Filme_idElemento_fkey";

-- DropForeignKey
ALTER TABLE "Obra" DROP CONSTRAINT "Obra_idDiretor_fkey";

-- DropForeignKey
ALTER TABLE "ObraAtor" DROP CONSTRAINT "ObraAtor_idAtor_fkey";

-- DropForeignKey
ALTER TABLE "Serie" DROP CONSTRAINT "Serie_idElemento_fkey";

-- DropForeignKey
ALTER TABLE "Temporada" DROP CONSTRAINT "Temporada_idSerie_fkey";

-- AlterTable
ALTER TABLE "Obra" ADD COLUMN     "duracao" INTEGER,
ADD COLUMN     "emProducao" BOOLEAN,
ADD COLUMN     "oscar" BOOLEAN,
ADD COLUMN     "tipo" "ObraType" NOT NULL;

-- AlterTable
ALTER TABLE "Pessoa" ADD COLUMN     "biografia" TEXT,
ADD COLUMN     "premiacoes" TEXT[],
ADD COLUMN     "tipo" "PessoaType" NOT NULL;

-- DropTable
DROP TABLE "Ator";

-- DropTable
DROP TABLE "Diretor";

-- DropTable
DROP TABLE "Filme";

-- DropTable
DROP TABLE "Serie";

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_idDiretor_fkey" FOREIGN KEY ("idDiretor") REFERENCES "Pessoa"("idPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObraAtor" ADD CONSTRAINT "ObraAtor_idAtor_fkey" FOREIGN KEY ("idAtor") REFERENCES "Pessoa"("idPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Temporada" ADD CONSTRAINT "Temporada_idSerie_fkey" FOREIGN KEY ("idSerie") REFERENCES "Obra"("idElemento") ON DELETE RESTRICT ON UPDATE CASCADE;
