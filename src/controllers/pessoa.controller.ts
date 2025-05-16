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

export const deletePessoaController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const pessoa = await pessoaRepository.getPessoaById(id);
  if (pessoa) {
    const deletedPessoa = await pessoaRepository.deletePessoa(id);
    res.json(deletedPessoa);
  } else {
    res.status(404).json({ message: "Pessoa not found" });
  }
};

export const updatePessoaController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { tipo, biografia, nascimento, nome, pais, premiacoes } = req.body;
  const pessoa = await pessoaRepository.getPessoaById(id);
  if (pessoa) {
    const newPessoa = await pessoaRepository.updatePessoa(id, {
      tipo: tipo || pessoa.tipo,
      biografia: biografia || pessoa.biografia,
      nascimento: nascimento || pessoa.nascimento,
      nome: nome || pessoa.nome,
      pais: pais || pessoa.pais,
      premiacoes: premiacoes || pessoa.premiacoes,
    });
    res.json(newPessoa);
  } else {
    res.status(404).json({ message: "Pessoa not found" });
  }
};
