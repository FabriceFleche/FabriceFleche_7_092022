const express = require('express');
const app = express();
const path = require("path");
const helmet = require('helmet');

const postsRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
require('dotenv').config();


/*db.query(
  'INSERT INTO  user(email, password) VALUES (?,?)',
  ['Fabrice', 'Test'],
  function(err, results) {
    console.log(err)
    console.log(results);
  }
);*/

// Accès au corps de la requête de Json en JS
app.use(express.json());

// Sécurise les headers
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Ajout des Middlewares d'autorisations
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Mise en place des routes
//app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/posts', postsRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;