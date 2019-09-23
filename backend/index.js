'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(()=>{
        console.log("Conexion a la base de datos establecida con éxito...");
        
        //creacion del servidor
        app.listen(port, () =>{
            console.log("Servidor corriendo correctamente en la URL: localhost:3700");

            
        });
    
    
    })
    .catch(err=> congole.log('err'));