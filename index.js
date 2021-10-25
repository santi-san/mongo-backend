'use strict'    //js es6

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/curso_mongo')
    .then(() => {
        console.log('La conexion a MongoDB se ha realizado correctamente!');
    })
    .catch(err => console.log(err + ' no se que paso'));