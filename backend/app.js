const express= require ('express');
const cors=require('cors');
const mysql=require('mysql');


const app = express();
app.use(express.json());
app.use(cors());

var connection= ({
    host:'',
    user:'',
    password:'',
    database:''
});

//para evitar futuras desconecciones (inicio)
var conexion;
function handleDisconnect(){
    conexion=mysql.createConnection(connection);
    conexion.connect(function(err){
        if(err){
            console.log('error cuando se conecta a la bd:',err);
            setTimeout(handleDisconnect,2000);
            
        }
        
    });
    conexion.on('error',function(err){
        console.log('db error',err);
        if(err.code==='PROTOCOL_CONNECTION_LOST'){
            handleDisconnect();
        }else{
            throw err;
        }
    });
}
handleDisconnect();

//(final)

app.get('/', function(req,res){
    res.send('ruta INICIO');

})
    
const PORT = process.env.PORT || 3000 ;

app.listen(PORT, function(){
        console.log("servidor ok en puerto:"+PORT);
    });
