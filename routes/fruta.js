'use strict'

const express = require('express');
const FrutaController = require('../controllers/fruta');

const api = express.Router();

api.get('/pruebas', FrutaController.pruebas);

module.exports = api;