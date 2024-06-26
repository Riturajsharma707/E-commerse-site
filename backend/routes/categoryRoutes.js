import express from "express";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  listCategories,
  readCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

router.route("/").post(authenticate, authorizeAdmin, createCategory);
router.route("/:categoryId").put(authenticate, authorizeAdmin, updateCategory);
router
  .route("/:categoryId")
  .delete(authenticate, authorizeAdmin, deleteCategory);

router.route("/categories").get(listCategories);

router.route("/:id").get(readCategory);

export default router;
