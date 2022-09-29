import { Router } from "express";
import { connection } from "../db.js";

const router = Router();

router.post("/api/auth/crearUsuario", (req, res) => {
  console.log(req.body);
  const {
    dni,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    direccion,
    contacto1,
    contacto2,
    fechaNacimiento,
    email,
    password,
    foto,
    idRol,
  } = req.body;

  let data = {
    dni,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    direccion,
    contacto1,
    contacto2,
    fechaNacimiento,
    email,
    password,
    foto,
    idRol,
  };
  let sql = "INSERT INTO USUARIO SET ?";
  connection.query(sql, data, function (error, results) {
    if (error) {
      throw error;
    } else {
      data.id = results.insertId;
      res.send(data);
    }
  });
});

export default router;
