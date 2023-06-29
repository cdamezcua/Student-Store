import express from "express";
import { storage } from "../data/storage.js";

const router = express.Router();

router.get("", (req, res) => {
  const products = {};
  products["products"] = storage.get("products");
  res.send(products);
});

router.get("/:id", (req, res) => {
  const product = {};
  product["product"] = storage
    .get("products")
    .find({ id: parseInt(req.params.id) })
    .value();
  res.send(product);
});

export default router;
