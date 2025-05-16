import { Router } from "express";
import {
  getAllPessoasController,
  getPessoaByIdController,
  createPessoaController,
  updatePessoaController,
  deletePessoaController,
} from "../controllers/pessoa.controller";

const router = Router();

router.get("/", getAllPessoasController);
router.get("/:id", getPessoaByIdController);
router.post("/", createPessoaController);
router.patch("/:id", updatePessoaController);
router.delete("/:id", deletePessoaController);

export default router;
