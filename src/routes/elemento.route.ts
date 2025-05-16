import { Router } from "express";
import {
  getAllElementosController,
  getElementoByIdController,
  createElementoController,
  updateElementoController,
  deleteElementoController,
} from "../controllers/elemento.controller";

const router = Router();

router.get("/", getAllElementosController);
router.get("/:id", getElementoByIdController);
router.post("/", createElementoController);
router.patch("/:id", updateElementoController);
router.delete("/:id", deleteElementoController);

export default router;
