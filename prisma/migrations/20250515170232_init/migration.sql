-- CreateTable
CREATE TABLE "Elemento" (
    "idElemento" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "idDiretorioPai" INTEGER,

    CONSTRAINT "Elemento_pkey" PRIMARY KEY ("idElemento")
);

-- CreateTable
CREATE TABLE "Diretorio" (
    "idElemento" INTEGER NOT NULL,

    CONSTRAINT "Diretorio_pkey" PRIMARY KEY ("idElemento")
);

-- CreateTable
CREATE TABLE "Obra" (
    "idElemento" INTEGER NOT NULL,
    "pais" TEXT NOT NULL,
    "generos" TEXT[],
    "lancamento" TIMESTAMP(3) NOT NULL,
    "sinopse" TEXT NOT NULL,
    "idDiretor" INTEGER NOT NULL,

    CONSTRAINT "Obra_pkey" PRIMARY KEY ("idElemento")
);

-- CreateTable
CREATE TABLE "ObraAtor" (
    "idObra" INTEGER NOT NULL,
    "idAtor" INTEGER NOT NULL,

    CONSTRAINT "ObraAtor_pkey" PRIMARY KEY ("idObra","idAtor")
);

-- CreateTable
CREATE TABLE "Filme" (
    "idElemento" INTEGER NOT NULL,
    "duracao" INTEGER NOT NULL,
    "oscar" BOOLEAN NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("idElemento")
);

-- CreateTable
CREATE TABLE "Serie" (
    "idElemento" INTEGER NOT NULL,
    "emProducao" BOOLEAN NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("idElemento")
);

-- CreateTable
CREATE TABLE "Temporada" (
    "idTemporada" SERIAL NOT NULL,
    "idSerie" INTEGER NOT NULL,

    CONSTRAINT "Temporada_pkey" PRIMARY KEY ("idTemporada")
);

-- CreateTable
CREATE TABLE "Episodio" (
    "idEpisodio" SERIAL NOT NULL,
    "idTemporada" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,

    CONSTRAINT "Episodio_pkey" PRIMARY KEY ("idEpisodio")
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "idPessoa" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("idPessoa")
);

-- CreateTable
CREATE TABLE "Diretor" (
    "idPessoa" INTEGER NOT NULL,
    "premiacoes" TEXT[],

    CONSTRAINT "Diretor_pkey" PRIMARY KEY ("idPessoa")
);

-- CreateTable
CREATE TABLE "Ator" (
    "idPessoa" INTEGER NOT NULL,
    "biografia" TEXT NOT NULL,

    CONSTRAINT "Ator_pkey" PRIMARY KEY ("idPessoa")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "idAvaliacao" SERIAL NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "emailUsuario" TEXT NOT NULL,
    "idObra" INTEGER NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("idAvaliacao")
);

-- AddForeignKey
ALTER TABLE "Elemento" ADD CONSTRAINT "Elemento_idDiretorioPai_fkey" FOREIGN KEY ("idDiretorioPai") REFERENCES "Diretorio"("idElemento") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diretorio" ADD CONSTRAINT "Diretorio_idElemento_fkey" FOREIGN KEY ("idElemento") REFERENCES "Elemento"("idElemento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_idDiretor_fkey" FOREIGN KEY ("idDiretor") REFERENCES "Diretor"("idPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_idElemento_fkey" FOREIGN KEY ("idElemento") REFERENCES "Elemento"("idElemento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObraAtor" ADD CONSTRAINT "ObraAtor_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("idElemento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObraAtor" ADD CONSTRAINT "ObraAtor_idAtor_fkey" FOREIGN KEY ("idAtor") REFERENCES "Ator"("idPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filme" ADD CONSTRAINT "Filme_idElemento_fkey" FOREIGN KEY ("idElemento") REFERENCES "Obra"("idElemento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_idElemento_fkey" FOREIGN KEY ("idElemento") REFERENCES "Obra"("idElemento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Temporada" ADD CONSTRAINT "Temporada_idSerie_fkey" FOREIGN KEY ("idSerie") REFERENCES "Serie"("idElemento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episodio" ADD CONSTRAINT "Episodio_idTemporada_fkey" FOREIGN KEY ("idTemporada") REFERENCES "Temporada"("idTemporada") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diretor" ADD CONSTRAINT "Diretor_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("idPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ator" ADD CONSTRAINT "Ator_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("idPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_emailUsuario_fkey" FOREIGN KEY ("emailUsuario") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("idElemento") ON DELETE RESTRICT ON UPDATE CASCADE;
