import express from "express";
import {
  addSweet,
  getAllSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet
} from "../controllers/sweet.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("admin"), addSweet);
router.get("/", protect, getAllSweets);
router.get("/search", protect, searchSweets);
router.put("/:id", protect, authorizeRoles("admin"), updateSweet);
router.delete("/:id", protect, authorizeRoles("admin"), deleteSweet);

router.post("/:id/purchase", protect, purchaseSweet);
router.post("/:id/restock", protect, authorizeRoles("admin"), restockSweet);

export default router;
