//bienvenidos a el ApiRestFull del ecommerce desarrollado en react
const express= require('express');
const mysql=require('mysql');
const cors=require('cors');

const app= express();
app.use(express.json());
app.use(cors());

//CONEXION POR GODADDY------------------------------------------------------------------------------------------->
var connection= ({
  host:'72.167.87.128',
  user:'franz2',
  password:'12345',
  database:'ecommerce'
});


//CONEXION POR HEROKU------------------------------------------------------------------------------------------->
/* const connection=({
  host:'us-cdbr-east-06.cleardb.net',
  user:'bd81d39baf9f5d',
  password:'f1970e88',
  database:'heroku_e70b6afe379c951',
}); */
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
  conexion.query('SELECT * FROM USUARIO', (error,filas)=>{
      if(error){
          throw error;

      }else{
          res.send(filas);
      }
  })
});

//mostrar registro
app.get('/api/registroUsuario/:id', (req,res)=>{
  conexion.query('SELECT * FROM USUARIO WHERE idUsuario=?',[req.params.id], (error,fila)=>{
      if(error){
          throw error;

      }else{
          res.send(fila);
      }
  })
});

//insertar registroo

app.post('/api/registroUsuario',(req,res)=>{
  /* let idRol =req.params.idRol; */
  let dni=req.body.dni;
  let nombre=req.body.nombre;
  let apellidoPaterno=req.body.apellidoPaterno;
  let apellidoMaterno=req.body.apellidoMaterno;
  let direccion=req.body.direccion;
  let contacto1=req.body.contacto1;
  let contacto2=req.body.contacto2;
  let fechaNacimiento=req.body.fechaNacimiento;
  let email=req.body.email;
  let password=req.body.password;
  let foto=req.body.foto;
  let idRol=req.body.idRol;
  let data={dni,nombre,apellidoPaterno,apellidoMaterno,direccion,contacto1,contacto2,fechaNacimiento,email,password,foto,idRol}
  let sql="INSERT INTO USUARIO SET ?";
  conexion.query(sql, data, function(error, results){
      if(error){
          throw error;

      }else{
          Object.assign(data,{id:results.insertId});
          res.send(data);
          
      }
  });
});
//editar registro
app.put('/api/registroUsuario/:id', (req,res)=>{
  let idUsuario=req.params.id;
  let dni=req.body.dni;
  let nombre=req.body.nombre;
  let apellidoPaterno=req.body.apellidoPaterno;
  let apellidoMaterno=req.body.apellidoMaterno;
  let direccion=req.body.direccion;
  let contacto1=req.body.contacto1;
  let contacto2=req.body.contacto2;
  let fechaNacimiento=req.body.fechaNacimiento;
  let email=req.body.email;
  let password=req.body.password;
  let foto=req.body.foto;
  let idRol=req.body.idRol;
  let data=[dni,nombre,apellidoPaterno,apellidoMaterno,direccion,contacto1,contacto2,fechaNacimiento,email,password,foto,idRol,idUsuario]
  let sql="UPDATE USUARIO SET dni=?,nombre=?,apellidoPaterno=?,apellidoMaterno=?,direccion=?,contacto1=?,contacto2=?,fechaNacimiento=?,email=?,password=?,foto=?,idRol=? WHERE idUsuario=?";
  conexion.query(sql,data, function(error,results){
      if(error){
          throw error;

      }else{
          res.send(results);
          
      }
  });
});
//eliminar registro
app.delete('/api/registroUsuario/:id', (req,res)=>{
  conexion.query('DELETE FROM USUARIO WHERE idUsuario=?', [req.params.id],function(error,filas){
      if(error){
          throw error;

      }else{
          res.send(filas);
          
      }
  });
});


//VALIDAR USUARIO Y PASSWORDd
app.post('/api/registroUsuario/auth', (req, res)=> {
	let usser = req.body.usser;
	let password = req.body.password;
    let sql=`SELECT * FROM USUARIO WHERE usser='${usser}' and password='${password}'`;
    /* console.log(sql);
    console.log(_USSER); 
    console.log(_PASSWORD);  */ 
    //mejorar la condicional para igualar los datos de la bd a la que enviamos(pendiente)
    if(usser && password){
        conexion.query(sql,[usser,password], (error, results)=> {
          console.log(results);
			if(results==length || results==false){
                res.send('Incorrect Username and/or Password!');
                
            }else{
                console.log('usuario ingresado correctamtente');
                res.send(results)
            }
		});


    }else{
        res.send('Please enter user and Password!');
		    res.end();
    }

    
});

//-------------------------------------------------------------------------------------------------------------------->
//ROL CRUD
//ver tablas rol

app.get('/api/rol', (req,res)=>{
  conexion.query('SELECT * FROM ROL', (error,filas)=>{
      if(error){
          throw error;

      }else{
          res.send(filas);
      }
  })
});

//mostrar solo un ROL
app.get('/api/rol/:id', (req,res)=>{
  conexion.query('SELECT * FROM ROL WHERE idRol=?',[req.params.id], (error,fila)=>{
      if(error){
          throw error;

      }else{
          res.send(fila);
      }
  })
});

//para insertar
app.post('/api/rol',(req,res)=>{
  /* let idRol =req.params.idRol; */
  let tipoRol=req.body.tipoRol;
  let data={tipoRol}
  let sql="INSERT INTO ROL SET ?";
  /* let sql="INSERT INTO `rol` (`idRol`, `tipoRol`) VALUES ('?', '?')" */
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
  let idRol =req.params.id;
  let tipoRol=req.body.tipoRol;
  let sql="UPDATE ROL SET tipoRol=? WHERE idRol=?";
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
  conexion.query('DELETE FROM ROL WHERE idRol=?', [req.params.id],function(error,filas){
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
