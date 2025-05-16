import { PrismaClient } from "../generated/prisma";
import argon2 from "argon2";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  // cria diretorios root, filmes, mcu e series
  const root = await prisma.elemento.create({
    data: { titulo: "Raiz" },
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

  const mcu = await prisma.elemento.create({
    data: { titulo: "MCU", idDiretorioPai: diretorioFilmes.id },
  });
  const diretorioMCU = await prisma.diretorio.create({
    data: { idElemento: mcu.id },
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
      nome: "Christopher Nolan",
      pais: "Reino Unido",
      nascimento: new Date("1970-07-30"),
      premiacoes: [
        "Oscar de Melhor Direção (indicação)",
        "Globo de Ouro de Melhor Diretor (indicação)",
      ],
    },
  });

  const pessoa2 = await prisma.pessoa.create({
    data: {
      tipo: "DIRETOR",
      nome: "Anthony Russo",
      pais: "Estados Unidos",
      nascimento: new Date("1970-02-03"),
      premiacoes: ["People's Choice Award de Filme Favorito"],
    },
  });

  const pessoa3 = await prisma.pessoa.create({
    data: {
      tipo: "DIRETOR",
      nome: "Matt Shakman",
      pais: "Estados Unidos",
      nascimento: new Date("1975-08-08"),
      premiacoes: ["Emmy de Melhor Direção em Série de Drama (indicação)"],
    },
  });

  const pessoa4 = await prisma.pessoa.create({
    data: {
      tipo: "DIRETOR",
      nome: "Greta Gerwig",
      pais: "Estados Unidos",
      nascimento: new Date("1983-08-04"),
      premiacoes: ["Indicação ao Oscar de Melhor Direção por 'Lady Bird'"],
    },
  });

  // cria atores
  const pessoa5 = await prisma.pessoa.create({
    data: {
      tipo: "ATOR",
      nome: "Cillian Murphy",
      pais: "Irlanda",
      nascimento: new Date("1976-05-25"),
      biografia: "Conhecido por seu papel como J. Robert Oppenheimer",
    },
  });

  const pessoa6 = await prisma.pessoa.create({
    data: {
      tipo: "ATOR",
      nome: "Robert Downey Jr.",
      pais: "Estados Unidos",
      nascimento: new Date("1965-04-04"),
      biografia: "Famoso por interpretar Tony Stark no MCU",
    },
  });

  const pessoa7 = await prisma.pessoa.create({
    data: {
      tipo: "ATOR",
      nome: "Elizabeth Olsen",
      pais: "Estados Unidos",
      nascimento: new Date("1989-02-16"),
      biografia: "Ganhou destaque como Feiticeira Escarlate no MCU",
    },
  });

  const pessoa8 = await prisma.pessoa.create({
    data: {
      tipo: "ATOR",
      nome: "Margot Robbie",
      pais: "Austrália",
      nascimento: new Date("1990-07-02"),
      biografia:
        "Atriz australiana conhecida por seus papéis em 'O Lobo de Wall Street', 'Eu, Tonya', 'Esquadrão Suicida' e 'Barbie'.",
    },
  });

  // cria filmes
  const vingadoresGuerraInfinita = await prisma.elemento.create({
    data: {
      titulo: "Vingadores: Guerra Infinita",
      idDiretorioPai: diretorioMCU.id,
    },
  });

  const obra1 = await prisma.obra.create({
    data: {
      tipo: "FILME",
      idElemento: vingadoresGuerraInfinita.id,
      idDiretor: pessoa2.id,
      generos: ["super-heroi", "ação"],
      lancamento: new Date("2018-04-23"),
      pais: pessoa2.pais,
      sinopse:
        "Os Vingadores e seus aliados tentam impedir Thanos de reunir as Joias do Infinito.",
      duracao: 149,
      oscar: false,
    },
  });

  const oppenheimer = await prisma.elemento.create({
    data: {
      titulo: "Oppenheimer",
      idDiretorioPai: diretorioFilmes.id,
    },
  });

  const obra2 = await prisma.obra.create({
    data: {
      tipo: "FILME",
      idElemento: oppenheimer.id,
      idDiretor: pessoa1.id,
      generos: ["drama"],
      lancamento: new Date("2023-07-21"),
      pais: pessoa1.pais,
      sinopse:
        "A história de J. Robert Oppenheimer e seu papel na criação da bomba atômica.",
      duracao: 180,
      oscar: true,
    },
  });

  const barbie = await prisma.elemento.create({
    data: {
      titulo: "Barbie",
      idDiretorioPai: diretorioFilmes.id,
    },
  });

  const obra3 = await prisma.obra.create({
    data: {
      tipo: "FILME",
      idElemento: barbie.id,
      idDiretor: pessoa4.id,
      generos: ["drama"],
      lancamento: new Date("2023-07-21"),
      pais: pessoa4.pais,
      sinopse: "Barbie embarca em uma jornada de autodescoberta no mundo real.",
      duracao: 114,
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

  const obra4 = await prisma.obra.create({
    data: {
      tipo: "SERIE",
      idElemento: wandavision.id,
      idDiretor: pessoa3.id,
      generos: ["super-heroi", "ação"],
      lancamento: new Date("2021-01-15"),
      pais: pessoa3.pais,
      sinopse:
        "Wanda Maximoff e Visão vivem uma vida suburbana ideal até que a realidade começa a se desfazer.",
      emProducao: false,
    },
  });

  const temporada1 = await prisma.temporada.create({
    data: {
      idSerie: obra4.id,
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

  const obra5 = await prisma.obra.create({
    data: {
      tipo: "SERIE",
      idElemento: doctorwho.id,
      idDiretor: pessoa1.id,
      generos: ["sci-fi"],
      lancamento: new Date("1963-11-23"),
      pais: "Reino Unido",
      sinopse: "Viagem no tempo, cabine telefônica e chave de fenda sônica",
      emProducao: true,
    },
  });

  const temporada2 = await prisma.temporada.create({
    data: {
      idSerie: obra5.id,
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
      idSerie: obra5.id,
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
      // Vingadores: Guerra Infinita
      { idAtor: pessoa6.id, idObra: obra1.id }, // Robert Downey Jr.
      { idAtor: pessoa7.id, idObra: obra1.id }, // Elizabeth Olsen

      // Oppenheimer
      { idAtor: pessoa5.id, idObra: obra2.id }, // Cillian Murphy
      { idAtor: pessoa6.id, idObra: obra2.id }, // Robert Downey Jr.

      // Barbie
      { idAtor: pessoa8.id, idObra: obra3.id }, // Margot Robbie

      // WandaVision
      { idAtor: pessoa7.id, idObra: obra4.id }, // Elizabeth Olsen
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
        comentario: "O Thor deveria ter mirado na cabeça...",
        data: new Date("2010-07-05"),
        emailUsuario: user1.email,
        nota: 9,
      },
      {
        idObra: obra5.id,
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

/*
{
  "tipo": "DIRETOR",
  "nome": "Peter Jackson",
  "pais": "Nova Zelândia",
  "nascimento": "1961-10-31T00:00:00.000Z",
  "premiacoes": [
    "Oscar de Melhor Direção por 'O Senhor dos Anéis: O Retorno do Rei'",
    "Oscar de Melhor Filme por 'O Senhor dos Anéis: O Retorno do Rei'"
  ]
}

{
  "titulo": "O Senhor dos Anéis: As Duas Torres",
  "idDiretorioPai": 2
}


{
  "id": 6,
  "idElemento": 10,
  "pais": "Nova Zelândia",
  "generos": [
    "aventura",
  ],
  "lancamento": "2002-12-18T00:00:00.000Z",
  "sinopse": "A sociedade está quebrada, mas a batalha pela Terra-média continua enquanto Frodo e Sam seguem para Mordor.",
  "idDiretor": 4,
  "tipo": "FILME",
  "duracao": 179,
  "oscar": true,
}
  */
