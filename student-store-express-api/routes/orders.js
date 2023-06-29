import express from "express";
import { storage } from "../data/storage.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { user, shoppingCart } = req.body;
  const order = {
    user,
    shoppingCart,
    date: new Date(),
  };
  storage.get("orders").push(order).write();
  res.send(order);
});

router.get("/", (req, res) => {
    const ans = {};
    ans.orders = storage.get("orders").value();
    res.send(ans);
});    

export default router;
