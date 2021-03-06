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

function getFrutas(err, res) {
    Fruta.find({}).sort({'_id': -1}).exec((err, frutas) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(frutas){
                res.status(200).send({
                    frutas
                });
            } else {
                res.status(404).send({
                    message: 'No hay frutas'
                });
            }
        }
    });
}

function getFruta(req, res) {
    const frutaId = req.params.id;

    Fruta.findById(frutaId).exec((err, fruta) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(fruta){
                res.status(200).send({
                    fruta
                });
            } else {
                res.status(404).send({
                    message: 'No existe la fruta'
                });
            }
        }
    })
}

function updateFruta(req, res){
    var frutaId = req.params.id;
    var update = req.body;

    Fruta.findByIdAndUpdate(frutaId, update, {new:true}, (err, frutaUpdated) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(frutaUpdated){
                res.status(200).send({
                    fruta: frutaUpdated
                });
            } else {
                res.status(404).send({
                    message: 'No existe la fruta'
                });
            }
        }
    });
}

function deleteFruta(req, res) {
    const frutaId = req.params.id;

    Fruta.findByIdAndRemove(frutaId, (err, frutaRemoved) => {
        if(err){
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if(frutaRemoved){
                res.status(200).send({
                    fruta: frutaRemoved
                });
            } else {
                res.status(404).send({
                    message: 'No existe la fruta'
                });
            }
        }
    });
}

module.exports = {
    pruebas,
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta

};