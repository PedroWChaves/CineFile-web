import { Request, Response } from "express";
import * as pessoaRepository from "../repositories/pessoa.repository";

export const getAllPessoasController = async (req: Request, res: Response) => {
  const pessoas = await pessoaRepository.getAllPessoas();
  res.json(pessoas);
};

export const getPessoaByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const pessoa = await pessoaRepository.getPessoaById(id);
  if (pessoa) {
    res.json(pessoa);
  } else {
    res.status(404).json({ message: "Pessoa not found" });
  }
};

export const createPessoaController = async (req: Request, res: Response) => {
  const { tipo, biografia, nascimento, nome, pais, premiacoes } = req.body;
  const newPessoa = await pessoaRepository.createPessoa({
    tipo,
    biografia,
    nascimento,
    nome,
    pais,
    premiacoes,
  });
  res.status(201).json(newPessoa);
};
