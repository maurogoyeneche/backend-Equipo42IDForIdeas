const express = require('express');
const publicRouter = express.Router();
const pagesController = require('../controllers/pagesController');

// Rutas del Públicas:
publicRouter.get('/', pagesController.showHome);

module.exports = publicRouter;
