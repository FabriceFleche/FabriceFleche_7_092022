const express = require('express');
const routerUser = express.Router();
const userCtrl = require('../controllers/user');

// creation de la route pour la creation d'un compte utilisateur
routerUser.post('/signup', userCtrl.signup);

// creation de la route pour l envoi des infos du formulaire de connexion
routerUser.post('/login', userCtrl.login);

module.exports = routerUser;