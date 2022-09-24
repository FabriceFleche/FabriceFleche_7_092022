const express = require('express');
const app = express();
const path = require("path");
const helmet = require('helmet');
const mysql = require('mysql2');
const postsRoutes = require('./routes/post');
const userRoutes = require('./routes/user');


// Configuration de la base de données mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "devmarion7169$"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySql");
});

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
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/posts', postsRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;