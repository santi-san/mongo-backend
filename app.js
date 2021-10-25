'use strict' 

const express = require('express'); 
const bodyParser = require('body-parser');

const app = express(); //controlador/framework http

// cargar rutas

// body-parser

app.use(express.urlencoded({extended:false})); //convert get/post/etc to json
app.use(express.json());

// configurar CORS


// configurar rutas
app.get('/', (req, res) => {
    res.status(200).send({
        message: "esta ruta es de prueba en mi api restful con mongo y node"
    });
})

module.exports = app;