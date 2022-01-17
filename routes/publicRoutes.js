const express = require('express');
const publicRouter = express.Router();
const pageController = require('../controllers/pageController');
const userController = require('../controllers/userController');
const checkJwt = require('express-jwt');

const tokenVerification = checkJwt({ secret: 'UnStringMuyScreto', algorithms: ['HS256'] });

//Public routes
publicRouter.post('/token', userController.login);

//User routes
publicRouter.get('/user', tokenVerification, userController.show);

module.exports = publicRouter;
