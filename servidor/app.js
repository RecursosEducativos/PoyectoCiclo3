//requerir el módulo express de node.js
const express = require("express");
const morgan = require( 'morgan');
const cors = require("cors");
const path = require('path');




const app=express();

const mongoose = require('mongoose');
//direccionamiento de mi base de datos cosmetica casera
const uri= 'mongodb://localhost:27017/cosmeticacasera';
const options = {useNewUrlParser:true, useUnifiedTopology:true};
mongoose.connect(uri, options).then(()=> { console.log('Conectado a DB')},
err=> { console.log(err)}
);


//Middleware van antes de las rutas
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//RUTA
//se utiliza el módulo express dentro de la variable app

//se crea un puerto de escucha estático

//const port = 3020;

//RUTA TRAIDA DE MI ARCHIVO producto.js DE MI CARPETA ROUTES
//<--problema de conexion--!>
app.use('/api',require('./routes/producto'));
//app.get('/', function(req,res){res.send("hola mundo");});

//app.listen(port,function(){

    //console.log(`el servidor esta escuchando http://localhost:${port}`)
//})
//Asignar puerto automáticamente esto se hace cuando usamos un hosting
const history =require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'Proyectovue')));
app.set('puerto', process.env.PORT || 3080);
app.listen(app.get('puerto'), function(){
    console.log('El puerto escucha en el puerto' + app.get('puerto'));
});