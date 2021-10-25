'use strict'    //js es6

const mongoose = require("mongoose");
const app = require('./app');
const port = 3800;

mongoose.connect('mongodb://localhost:27017/curso_mongo')
    .then(() => {
        console.log('La conexion a MongoDB se ha realizado correctamente!');
        app.listen(port, () => {
            console.log('El servidor esta corriendo en localhost: 3800')
        });
    })
    .catch(err => console.log(err + ' no se que paso'));