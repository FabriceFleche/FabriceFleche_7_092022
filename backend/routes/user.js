const express = require('express');
const routerUser = express.Router();
const userCtrl = require('../controllers/user');

// creation de la route pour la creation d'un compte utilisateur
routerUser.post('/signup', userCtrl.signup);

// creation de la route pour la connexion de l'utilsateur
routerUser.post('/login', userCtrl.login);

//creation de la route pour la récuparation du nom de l utilisateur
routerUser.post('/name', userCtrl.name);

module.exports = routerUser;