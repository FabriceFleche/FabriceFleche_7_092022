const express = require('express');
const routerlike = express.Router();
const likeCtrl = require('../controllers/like');
const auth = require('../middleware/auth');

routerlike.post('/', auth, likeCtrl.like);
//router.get('/', auth, likeCtrl.getLikes);

module.exports = routerlike;