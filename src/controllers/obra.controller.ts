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

export const deleteObraController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const obra = await obraRepository.getObraById(id);
  if (obra) {
    const deletedObra = await obraRepository.deleteObra(id);
    res.json(deletedObra);
  } else {
    res.status(404).json({ message: "Obra not found" });
  }
};

export const updateObraController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
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
  const obra = await obraRepository.getObraById(id);
  if (obra) {
    const newObra = await obraRepository.updateObra(id, {
      tipo: tipo || obra.tipo,
      idElemento: idElemento || obra.idElemento,
      idDiretor: idDiretor || obra.idDiretor,
      generos: generos || obra.generos,
      duracao: duracao || obra.duracao,
      emProducao: emProducao || obra.emProducao,
      lancamento: lancamento || obra.lancamento,
      oscar: oscar || obra.oscar,
      pais: pais || obra.pais,
      sinopse: sinopse || obra.sinopse,
    });
    res.json(newObra);
  } else {
    res.status(404).json({ message: "Obra not found" });
  }
};
