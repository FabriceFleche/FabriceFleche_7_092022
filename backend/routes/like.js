const express = require('express');
const routerlike = express.Router();
const likeCtrl = require('../controllers/like');
const auth = require('../middleware/auth');

routerlike.post('/', auth, likeCtrl.like);
routerlike.post('/likeUser', auth, likeCtrl.likeUser);
routerlike.get('/', auth, likeCtrl.getLikes);
//routerlike.get('/getUserLike', auth, likeCtrl.getUserLike)
routerlike.delete('/', auth, likeCtrl.deleteLike);

module.exports = routerlike;
