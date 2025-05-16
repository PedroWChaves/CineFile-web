import { Request, Response } from "express";
import * as elementoRepository from "../repositories/elemento.repository";

export const getAllElementosController = async (
  req: Request,
  res: Response
) => {
  const elementos = await elementoRepository.getAllElementos();
  res.json(elementos);
};

export const getElementoByIdController = async (
  req: Request,
  res: Response
) => {
  const id = parseInt(req.params.id);
  const elemento = await elementoRepository.getElementoById(id);
  if (elemento) {
    res.json(elemento);
  } else {
    res.status(404).json({ message: "Elemento not found" });
  }
};

export const createElementoController = async (req: Request, res: Response) => {
  const { titulo, idDiretorioPai } = req.body;
  const newElemento = await elementoRepository.createElemento({
    titulo,
    idDiretorioPai,
  });
  res.status(201).json(newElemento);
};

export const deleteElementoController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const elemento = await elementoRepository.getElementoById(id);
  if (elemento) {
    const deletedElemento = await elementoRepository.deleteElemento(id);
    res.json(deletedElemento);
  } else {
    res.status(404).json({ message: "Elemento not found" });
  }
};

export const updateElementoController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { titulo, idDiretorioPai } = req.body;
  const elemento = await elementoRepository.getElementoById(id);
  if (elemento) {
    const newElemento = await elementoRepository.updateElemento(id, {
      titulo: titulo || elemento.titulo,
      idDiretorioPai: idDiretorioPai || elemento.idDiretorioPai,
    });
    res.json(newElemento);
  } else {
    res.status(404).json({ message: "Elemento not found" });
  }
};
