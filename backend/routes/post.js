const express = require('express');
const routerPost = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Creation de la route pour la recuperation de toute les posts avec vérification du token
routerPost.get('/', auth, postCtrl.getAllPost);

// Creation de la route pour la creation d un post avec vérification du token
routerPost.post('/', auth, multer, postCtrl.createPost);

// Creation de la route pour la récupération du post selectionne avec verif du token
routerPost.get('/:id', auth, postCtrl.getOnePost);

// Creation de la route pour la modification d un post avec verif du token
routerPost.put('/:id', auth, multer, postCtrl.modifyPost);

// Creation de la route pour le suppression d un post avec verif du token
routerPost.delete('/:id', auth, postCtrl.deletePost);

// Creation de la route pour donner son avis sur un post avec verif du token
routerPost.post('/:id/like', auth, postCtrl.postLike);
  
module.exports = routerPost;
