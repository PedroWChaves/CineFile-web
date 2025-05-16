import { Router } from "express";
import {
  getAllPessoasController,
  getPessoaByIdController,
  createPessoaController,
} from "../controllers/pessoa.controller";

const router = Router();

router.get("/", getAllPessoasController);
router.get("/:id", getPessoaByIdController);
router.post("/", createPessoaController);

export default router;
