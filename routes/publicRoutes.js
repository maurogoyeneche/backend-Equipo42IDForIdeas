const express = require('express');
const publicRouter = express.Router();
const userController = require('../controllers/userController');

// Rutas del Públicas:
publicRouter.post('/token', userController.login);

module.exports = publicRouter;
