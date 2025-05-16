import { Router } from "express";
import {
  getAllObrasController,
  getObraByIdController,
  createObraController,
  updateObraController,
  deleteObraController,
} from "../controllers/obra.controller";

const router = Router();

router.get("/", getAllObrasController);
router.get("/:id", getObraByIdController);
router.post("/", createObraController);
router.patch("/:id", updateObraController);
router.delete("/:id", deleteObraController);

export default router;
