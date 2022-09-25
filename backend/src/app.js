//bienvenidos a el ApiRestFull del ecommerce desarrollado en react
const express= require('express');
const mysql=require('mysql');
const cors=require('cors');

const app= express();
app.use(express.json());
app.use(cors());

const connection=({
  host:'us-cdbr-east-06.cleardb.net',
  user:'bd81d39baf9f5d',
  password:'f1970e88',
  database:'heroku_e70b6afe379c951',
});
//primaformadeconectarmeala bd
/* connection.connect(function(error){
  if(error){
    throw error;

  }else{
    console.log("conexion exitosa a la base de datos");
  }
}) */

//para evitar futuras desconeccioness (inicio)
let conexion;
function handleDisconnect() {
  conexion = mysql.createConnection(connection);
  conexion.connect(function (err) {
    if (err) {
      console.log("error cuando se conecta a la bd:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  conexion.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}
handleDisconnect();

//(finall)


app.get("/", function (req, res) {
  res.send("ruta INICIO");
});
//REGISTRO CRUD------------------------------------------------------------------------------------------------------>
//ver tablas registro
app.get('/api/registroUsuario', (req,res)=>{
  conexion.query('SELECT * FROM tb_usuario', (error,filas)=>{
      if(error){
          throw error;

      }else{
          res.send(filas);
      }
  })
});


//-------------------------------------------------------------------------------------------------------------------->
//ROL CRUD
//ver tablas rol

app.get('/api/rol', (req,res)=>{
  conexion.query('SELECT * FROM rol', (error,filas)=>{
      if(error){
          throw error;

      }else{
          res.send(filas);
      }
  })
});

//mostrar solo un ROL
app.get('/api/rol/:id', (req,res)=>{
  conexion.query('SELECT * FROM rol WHERE idRol=?',[req.params.id], (error,fila)=>{
      if(error){
          throw error;

      }else{
          res.send(fila);
      }
  })
});

//para insertar
app.post('/api/rol',(req,res)=>{
  let idRol =req.params.idRol;
  let tipoRol=req.body.tipoRol;
  let data=[tipoRol,idRol]
  /* let sql="INSERT INTO rol SET ?"; */
  let sql="INSERT INTO `rol` (`idRol`, `tipoRol`) VALUES ('?', '?')"
  conexion.query(sql, data, function(error, results){
      if(error){
          throw error;

      }else{
          Object.assign(data,{id:results.insertId});
          res.send(data);
          
      }
  });
});


//para editar
app.put('/api/rol/:id', (req,res)=>{
  let idRol =req.params.idRol;
  let tipoRol=req.body.tipoRol;
  let sql="UPDATE rol SET tipoRol=? WHERE idRol=?";
  conexion.query(sql,[tipoRol,idRol], function(error,results){
      if(error){
          throw error;

      }else{
          res.send(results);
          
      }
  });
});

//eliminar articulos
app.delete('/api/rol/:id', (req,res)=>{
  conexion.query('DELETE FROM rol WHERE idRol=?', [req.params.id],function(error,filas){
      if(error){
          throw error;

      }else{
          res.send(filas);
          
      }
  });
});


//conexion de puertos------------------------------------------------------------------------------------------->
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("servidor ok en puerto:" + PORT);
});
