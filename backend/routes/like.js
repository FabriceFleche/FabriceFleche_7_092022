const express = require('express');
const routerlike = express.Router();
const likeCtrl = require('../controllers/like');
const auth = require('../middleware/auth');

// Creation de la route pour la recuperation du nombre des likes par posts avec vérification du token
routerlike.post('/', auth, likeCtrl.like);

// Creation de la route pour le stockage dans la table userslikes du like d'un user avec vérification du token
routerlike.post('/likeUser', auth, likeCtrl.likeUser);

// Creation de la route pour la recuperation de tous les posts aimés par un user avec vérification du token
routerlike.get('/', auth, likeCtrl.getLikes);

// Creation de la route pour la suppression du like par l'user dans la table userslikes avec vérification du token
routerlike.delete('/', auth, likeCtrl.deleteLike);

module.exports = routerlike;
