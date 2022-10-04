import { Router } from "express";
import { connection } from "../db.js";

const router = Router();

router.get("/api/ecommerce/products", (req, res) => {
  const sql = "SELECT * FROM PRODUCTOS";
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

export default router;
