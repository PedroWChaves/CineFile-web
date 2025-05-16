import { Request, Response } from "express";
import * as obraRepository from "../repositories/obra.repository";

export const getAllObrasController = async (req: Request, res: Response) => {
  const obras = await obraRepository.getAllObras();
  res.json(obras);
};

export const getObraByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const obra = await obraRepository.getObraById(id);
  if (obra) {
    res.json(obra);
  } else {
    res.status(404).json({ message: "Obra not found" });
  }
};

export const createObraController = async (req: Request, res: Response) => {
  const {
    tipo,
    idElemento,
    idDiretor,
    generos,
    duracao,
    emProducao,
    lancamento,
    oscar,
    pais,
    sinopse,
  } = req.body;
  const newObra = await obraRepository.createObra({
    tipo,
    idElemento,
    idDiretor,
    generos,
    duracao,
    emProducao,
    lancamento,
    oscar,
    pais,
    sinopse,
  });
  res.status(201).json(newObra);
};
