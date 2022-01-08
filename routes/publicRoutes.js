const express = require('express');
const publicRouter = express.Router();
const pageController = require('../controllers/pageController');

// Rutas del Públicas:

publicRouter.get('/', pageController.index);

// ...

module.exports = publicRouter;
