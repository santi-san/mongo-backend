'use strict' 

const express = require('express'); 
const bodyParser = require('body-parser');

const app = express(); //controlador/framework http

// cargar rutas
const fruta_routes = require('./routes/fruta'); 

// body-parser

app.use(express.urlencoded({extended:false})); //convert get/post/etc to json
app.use(express.json());

// configurar CORS


// Rutas base
app.use('/api', fruta_routes);



module.exports = app;