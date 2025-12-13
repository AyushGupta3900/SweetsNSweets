import express from "express";
import {
  addSweet,
  getAllSweets,
  getSweetById,
  updateSweet,
  deleteSweet
} from "../controllers/sweet.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", protect, getAllSweets);
router.get("/:id", protect, getSweetById);

router.post("/", protect, authorizeRoles("admin"), addSweet);
router.put("/:id", protect, authorizeRoles("admin"), updateSweet);
router.delete("/:id", protect, authorizeRoles("admin"), deleteSweet);

export default router;