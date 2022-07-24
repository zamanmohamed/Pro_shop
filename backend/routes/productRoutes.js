import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductByID,
} from "../controllers/productControllers.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductByID);

export default router;
