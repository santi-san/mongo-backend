'use strict'

const express = require('express');
const FrutaController = require('../controllers/fruta');

const api = express.Router();

api.get('/pruebas', FrutaController.pruebas);
api.post('/fruta', FrutaController.saveFruta);

module.exports = api;