/*
  Warnings:

  - The primary key for the `Avaliacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idAvaliacao` on the `Avaliacao` table. All the data in the column will be lost.
  - The primary key for the `Diretorio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Elemento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idElemento` on the `Elemento` table. All the data in the column will be lost.
  - The primary key for the `Episodio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idEpisodio` on the `Episodio` table. All the data in the column will be lost.
  - The primary key for the `Obra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pessoa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idPessoa` on the `Pessoa` table. All the data in the column will be lost.
  - The primary key for the `Temporada` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idTemporada` on the `Temporada` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idElemento]` on the table `Diretorio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idElemento]` on the table `Obra` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_idObra_fkey";

-- DropForeignKey
ALTER TABLE "Diretorio" DROP CONSTRAINT "Diretorio_idElemento_fkey";

-- DropForeignKey
ALTER TABLE "Elemento" DROP CONSTRAINT "Elemento_idDiretorioPai_fkey";

-- DropForeignKey
ALTER TABLE "Episodio" DROP CONSTRAINT "Episodio_idTemporada_fkey";

-- DropForeignKey
ALTER TABLE "Obra" DROP CONSTRAINT "Obra_idDiretor_fkey";

-- DropForeignKey
ALTER TABLE "Obra" DROP CONSTRAINT "Obra_idElemento_fkey";

-- DropForeignKey
ALTER TABLE "ObraAtor" DROP CONSTRAINT "ObraAtor_idAtor_fkey";

-- DropForeignKey
ALTER TABLE "ObraAtor" DROP CONSTRAINT "ObraAtor_idObra_fkey";

-- DropForeignKey
ALTER TABLE "Temporada" DROP CONSTRAINT "Temporada_idSerie_fkey";

-- AlterTable
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_pkey",
DROP COLUMN "idAvaliacao",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Diretorio" DROP CONSTRAINT "Diretorio_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Diretorio_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Elemento" DROP CONSTRAINT "Elemento_pkey",
DROP COLUMN "idElemento",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Elemento_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Episodio" DROP CONSTRAINT "Episodio_pkey",
DROP COLUMN "idEpisodio",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Episodio_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Obra" DROP CONSTRAINT "Obra_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Obra_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_pkey",
DROP COLUMN "idPessoa",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Temporada" DROP CONSTRAINT "Temporada_pkey",
DROP COLUMN "idTemporada",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Temporada_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Diretorio_idElemento_key" ON "Diretorio"("idElemento");

-- CreateIndex
CREATE UNIQUE INDEX "Obra_idElemento_key" ON "Obra"("idElemento");

-- AddForeignKey
ALTER TABLE "Elemento" ADD CONSTRAINT "Elemento_idDiretorioPai_fkey" FOREIGN KEY ("idDiretorioPai") REFERENCES "Diretorio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diretorio" ADD CONSTRAINT "Diretorio_idElemento_fkey" FOREIGN KEY ("idElemento") REFERENCES "Elemento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_idElemento_fkey" FOREIGN KEY ("idElemento") REFERENCES "Elemento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_idDiretor_fkey" FOREIGN KEY ("idDiretor") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObraAtor" ADD CONSTRAINT "ObraAtor_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObraAtor" ADD CONSTRAINT "ObraAtor_idAtor_fkey" FOREIGN KEY ("idAtor") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Temporada" ADD CONSTRAINT "Temporada_idSerie_fkey" FOREIGN KEY ("idSerie") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episodio" ADD CONSTRAINT "Episodio_idTemporada_fkey" FOREIGN KEY ("idTemporada") REFERENCES "Temporada"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
