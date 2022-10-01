import { Router } from "express";
import { connection } from "../db.js";
import bycrypt from "bcrypt";
import { encryptPassword } from "../helpers/encryptPassword.js";

const router = Router();

router.post("/api/auth/crearUsuario", (req, res) => {
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

  data.password = encryptPassword(password);
  let sqlSearchEmail = `SELECT * FROM USUARIO WHERE email = '${email}'`;
  let sqlSearchDni = `SELECT * FROM USUARIO WHERE dni = '${dni}'`;
  let sql = "INSERT INTO USUARIO SET ?";
  connection.query(sqlSearchEmail, function (error, result) {
    if (error) {
      throw error;
    } else {
      if (result.length > 0) {
        res.send({ ok: false, message: "Email ya existe" });
      } else {
        connection.query(sqlSearchDni, function (error, result) {
          if (error) {
            throw error;
          } else {
            if (result.length > 0) {
              res.send({ ok: false, message: "DNI ya existe" });
            } else {
              connection.query(sql, data, function (error, result) {
                if (error) {
                  throw error;
                } else {
                  data.id = result.insertId;
                  res.send(data);
                }
              });
            }
          }
        });
      }
    }
  });
});

router.post("/api/auth/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let sqlForUser = `SELECT * FROM USUARIO WHERE email='${email}'`;
  connection.query(sqlForUser, function (error, result) {
    if (error) {
      throw error;
    } else {
      if (result.length > 0) {
        const passwordEncrypt = result[0].password;
        const passwordCompare = bycrypt.compareSync(password, passwordEncrypt);
        if (passwordCompare) {
          res.send(result[0]);
        } else {
          res.send({ ok: false, message: "Contraseña incorrecta" });
        }
      } else {
        res.send({ ok: false, message: "Correo incorrecto" });
      }
    }
  });
});

export default router;
