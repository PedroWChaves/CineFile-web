import { Router } from "express";
import {
  getAllElementosController,
  getElementoByIdController,
  createElementoController,
} from "../controllers/elemento.controller";

const router = Router();

router.get("/", getAllElementosController);
router.get("/:id", getElementoByIdController);
router.post("/", createElementoController);

export default router;
