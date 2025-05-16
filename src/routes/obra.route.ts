import { Router } from "express";
import {
  getAllObrasController,
  getObraByIdController,
  createObraController,
} from "../controllers/obra.controller";

const router = Router();

router.get("/", getAllObrasController);
router.get("/:id", getObraByIdController);
router.post("/", createObraController);

export default router;
