'use strict'

const Fruta = require('../models/fruta');

// configurar rutas
function pruebas(req, res) {
    res.status(200).send({
        message: "esta ruta es de prueba en mi api restful con mongo y node"
    });
}

function saveFruta(req, res) {
    const fruta = new Fruta();

    const params = req.body;
    if(params.nombre){
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;

        fruta.save((err, frutaStored) => {
            if(err){
                res.status(500).send({
                    message: 'Error en el servidor'
                });
            } else {
                if(frutaStored){
                    res.status(200).send({
                        fruta: frutaStored
                    });
                } else {
                    res.status(200).send({
                        message: 'no se ha guardado la fruta'
                    });
                }
            }
        });
    } else {
        res.status(200).send({
            message: 'El nombre de la fruta es obligatorio'
        });
    }

}

module.exports = {
    pruebas,
    saveFruta
};