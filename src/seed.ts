import { PrismaClient } from "../generated/prisma";
import argon2 from "argon2";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  // cria elemento e diretorio root, filmes e series
  const root = await prisma.elemento.create({
    data: { titulo: "raiz" },
  });

  const diretorioRoot = await prisma.diretorio.create({
    data: { idElemento: root.id },
  });

  const filmes = await prisma.elemento.create({
    data: { titulo: "Filmes", idDiretorioPai: diretorioRoot.id },
  });

  const diretorioFilmes = await prisma.diretorio.create({
    data: { idElemento: filmes.id },
  });

  const series = await prisma.elemento.create({
    data: { titulo: "Series", idDiretorioPai: diretorioRoot.id },
  });

  const diretorioSeries = await prisma.diretorio.create({
    data: { idElemento: series.id },
  });

  // cria diretores
  const pessoa1 = await prisma.pessoa.create({
    data: {
      tipo: "DIRETOR",
      nome: "Peter Jackson",
      pais: "Nova Zelândia",
      nascimento: new Date("1961-10-31"),
      premiacoes: ["Oscar melhor filme", "Oscar melhor direção"],
    },
  });

  const pessoa2 = await prisma.pessoa.create({
    data: {
      tipo: "DIRETOR",
      nome: "Hayao Miyazaki",
      pais: "Japão",
      nascimento: new Date("1941-01-05"),
      premiacoes: ["Oscar melhor filme de animação"],
    },
  });

  // cria atores
  const pessoa3 = await prisma.pessoa.create({
    data: {
      tipo: "ATOR",
      nome: "Ian McKellen",
      pais: "Reino Unido",
      nascimento: new Date("1931-05-25"),
      biografia: "Atuou como Gandalf e Magneto",
    },
  });

  const pessoa4 = await prisma.pessoa.create({
    data: {
      tipo: "ATOR",
      nome: "Elizabeth Olsen",
      pais: "EUA",
      nascimento: new Date("1989-02-16"),
      biografia: "Mais conhecida pelo papel de Wanda no MCU",
    },
  });

  // cria filmes
  const senhorDosAneis = await prisma.elemento.create({
    data: {
      titulo: "O senhor dos Aneis",
      idDiretorioPai: diretorioFilmes.idElemento,
    },
  });

  const obra1 = await prisma.obra.create({
    data: {
      tipo: "FILME",
      idElemento: senhorDosAneis.id,
      idDiretor: pessoa1.id,
      lancamento: new Date("2002-01-01"),
      pais: pessoa1.pais,
      sinopse: "Baseado na história de JRR Tolkien",
      duracao: 178,
      oscar: true,
    },
  });

  const vingadores2 = await prisma.elemento.create({
    data: {
      titulo: "Vingadores: Era de Ultron",
      idDiretorioPai: diretorioFilmes.idElemento,
    },
  });

  const obra2 = await prisma.obra.create({
    data: {
      tipo: "FILME",
      idElemento: vingadores2.id,
      idDiretor: pessoa1.id,
      lancamento: new Date("2015-04-23"),
      pais: "EUA",
      sinopse: "Segundo filme dos Vingadores no MCU",
      duracao: 141,
      oscar: false,
    },
  });

  // cria séries
  const wandavision = await prisma.elemento.create({
    data: {
      titulo: "WandaVision",
      idDiretorioPai: diretorioSeries.idElemento,
    },
  });

  const obra3 = await prisma.obra.create({
    data: {
      tipo: "SERIE",
      idElemento: wandavision.id,
      idDiretor: pessoa2.id,
      lancamento: new Date("2021-01-15"),
      pais: "EUA",
      sinopse: "Wanda, Visão e os filhinhos",
      emProducao: false,
    },
  });

  const temporada1 = await prisma.temporada.create({
    data: {
      idSerie: obra3.id,
    },
  });

  const episodio1 = await prisma.episodio.create({
    data: {
      titulo: "Episodio 1",
      duracao: 41,
      idTemporada: temporada1.id,
    },
  });

  const episodio2 = await prisma.episodio.create({
    data: {
      titulo: "Episodio 2",
      duracao: 43,
      idTemporada: temporada1.id,
    },
  });

  const doctorwho = await prisma.elemento.create({
    data: {
      titulo: "Doctor Who",
      idDiretorioPai: diretorioSeries.idElemento,
    },
  });

  const obra4 = await prisma.obra.create({
    data: {
      tipo: "SERIE",
      idElemento: doctorwho.id,
      idDiretor: pessoa1.id,
      lancamento: new Date("1963-11-23"),
      pais: "Reino Unido",
      sinopse: "Viagem no tempo, cabine telefônica e chave de fenda sônica",
      emProducao: true,
    },
  });

  const temporada2 = await prisma.temporada.create({
    data: {
      idSerie: obra4.id,
    },
  });

  const episodio3 = await prisma.episodio.create({
    data: {
      titulo: "The eleventh hour",
      duracao: 47,
      idTemporada: temporada2.id,
    },
  });

  const temporada3 = await prisma.temporada.create({
    data: {
      idSerie: obra4.id,
    },
  });

  const episodio4 = await prisma.episodio.create({
    data: {
      titulo: "The day of the doctor",
      duracao: 52,
      idTemporada: temporada3.id,
    },
  });

  const obraAtor = await prisma.obraAtor.createMany({
    data: [
      { idAtor: pessoa3.id, idObra: obra1.id },
      { idAtor: pessoa3.id, idObra: obra4.id },
      { idAtor: pessoa4.id, idObra: obra2.id },
      { idAtor: pessoa4.id, idObra: obra3.id },
    ],
  });

  // cria usuario
  const senhaHash = await argon2.hash("senha321");
  const user1 = await prisma.usuario.create({
    data: {
      email: "pedrodiluca@unifei.edu.br",
      nome: "Pedro di Luca",
      senha: senhaHash,
    },
  });

  // cria avaliacoes
  const avaliacao1 = await prisma.avaliacao.createMany({
    data: [
      {
        idObra: obra1.id,
        comentario: "A versão estendida é muito boa!",
        data: new Date("2010-07-05"),
        emailUsuario: user1.email,
        nota: 9,
      },
      {
        idObra: obra4.id,
        comentario: "Minha série favorita! Matt Smith é bom demais",
        data: new Date("2019-06-14"),
        emailUsuario: user1.email,
        nota: 10,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error("Erro no seed:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
    console.log("Seed concluído!");
  });
