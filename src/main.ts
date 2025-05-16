import { PrismaClient, ObraType, PessoaType } from "../generated/prisma";

const prisma = new PrismaClient();

async function listarFilmes() {
  const filmes = await prisma.obra.findMany({
    where: {
      tipo: ObraType.FILME,
    },
    select: {
      elemento: {
        select: {
          titulo: true,
        },
      },
      generos: true,
      lancamento: true,
      sinopse: true,
      diretor: {
        select: {
          nome: true,
        },
      },
      duracao: true,
      oscar: true,
    },
  });

  console.log("Filmes:");
  console.table(filmes);
}

async function listarSeries() {
  const series = await prisma.obra.findMany({
    where: {
      tipo: ObraType.SERIE,
    },
    select: {
      elemento: {
        select: {
          titulo: true,
        },
      },
      generos: true,
      lancamento: true,
      sinopse: true,
      diretor: {
        select: {
          nome: true,
        },
      },
      emProducao: true,
    },
  });

  console.log("Séries:");
  console.table(series);
}

async function listarDiretoresEObras() {
  const diretores = await prisma.pessoa.findMany({
    where: {
      tipo: PessoaType.DIRETOR,
    },
    select: {
      nome: true,
      direcoes: {
        select: {
          elemento: {
            select: {
              titulo: true,
            },
          },
          tipo: true,
          lancamento: true,
        },
      },
    },
  });

  console.log("Diretores e suas obras:");
  diretores.forEach((diretor) => {
    console.log(`Diretor: ${diretor.nome}`);
    if (diretor.direcoes.length === 0) {
      console.log("  Nenhuma obra dirigida");
    } else {
      diretor.direcoes.forEach((filme) => {
        console.log(
          `  - ${filme.elemento.titulo} (${filme.lancamento.getFullYear()})`
        );
      });
    }
    console.log();
  });
}

async function listarObrasPorAtor() {
  const atoresComObras = await prisma.pessoa.findMany({
    where: {
      tipo: PessoaType.ATOR,
    },
    select: {
      nome: true,
      atuacoes: {
        select: {
          obra: {
            select: {
              elemento: {
                select: {
                  titulo: true, // Título da obra
                },
              },
              tipo: true,
              lancamento: true,
            },
          },
        },
      },
    },
  });

  console.log("Atores e suas obras:");
  atoresComObras.forEach((ator) => {
    console.log(`Ator: ${ator.nome}`);
    if (ator.atuacoes.length === 0) {
      console.log("  Nenhuma obra encontrada");
    } else {
      ator.atuacoes.forEach((atuacao) => {
        console.log(
          `  - ${
            atuacao.obra.elemento.titulo
          } (${atuacao.obra.lancamento.getFullYear()})`
        );
      });
    }
    console.log();
  });
}

async function listarAtoresPorObra() {
  const obrasComAtores = await prisma.obra.findMany({
    include: {
      elemento: {
        select: {
          titulo: true,
        },
      },
      atores: {
        select: {
          ator: {
            select: {
              nome: true,
            },
          },
        },
      },
    },
  });

  // Exibindo obras e seus atores
  console.log("Obras e seus atores:");
  obrasComAtores.forEach((obra) => {
    console.log(`Obra: ${obra.elemento.titulo}`);
    if (obra.atores.length === 0) {
      console.log("  Nenhum ator encontrado.");
    } else {
      obra.atores.forEach((ator) => {
        console.log(`  - ${ator.ator.nome}`);
      });
    }
    console.log();
  });
}

async function listarDiretorios() {
  const raiz = await prisma.diretorio.findFirst({
    where: {
      elemento: {
        idDiretorioPai: null,
      },
    },
    include: {
      elemento: true,
      elementos: true,
    },
  });

  const mostraDiretorio = async (dir: any, ident: string) => {
    const elementos = await prisma.elemento.findMany({
      where: {
        idDiretorioPai: dir.id,
      },
      include: {
        diretorio: true,
      },
    });

    if (elementos)
      for (const elem of elementos) {
        if (elem.diretorio) {
          console.log(`${ident}${elem.titulo}:`);
          await mostraDiretorio(elem.diretorio, ident + "  ");
        } else console.log(`${ident}${elem.titulo}`);
      }
  };

  const ident = "  ";
  console.log(raiz?.elemento.titulo + ":");
  await mostraDiretorio(raiz, ident);
}

async function main() {
  await listarFilmes();
  await listarSeries();
  await listarDiretoresEObras();
  await listarObrasPorAtor();
  await listarAtoresPorObra();
  await listarDiretorios();
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
