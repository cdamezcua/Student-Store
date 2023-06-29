import express, { json } from "express";
import productsRouter from "./routes/products.js";
import ordersRouter from "./routes/orders.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());

app.use(morgan("tiny"));

app.use(json());

app.use("/products", productsRouter);

app.use("/orders", ordersRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

export default app;