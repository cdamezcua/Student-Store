import express from "express";
import { storage } from "../data/storage.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { user, shoppingCart } = req.body;
  const order = {
    id: storage.get("orders").value().length + 1,
    date: new Date(),
    user: user,
    shoppingCart: Object.keys(shoppingCart).map((key) => {
      const product = storage
        .get("products")
        .find({ id: parseInt(key) })
        .value();
      const quantity = shoppingCart[key];
      const name = product.name;
      const unitPrice = product.price;
      const cost = quantity * unitPrice;
      return {
        name,
        quantity,
        unitPrice,
        cost,
      };
    }),
  };
  order.subtotal = order.shoppingCart.reduce((acc, item) => acc + item.cost, 0);
  order.tax = order.subtotal * 0.0875;
  order.total = order.subtotal * 1.0875;
  storage.get("orders").push(order).write();
  res.send(order);
});

router.get("/", (req, res) => {
  const ans = {};
  ans.orders = storage.get("orders").value();
  res.send(ans);
});

export default router;
