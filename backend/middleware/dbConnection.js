const mysql = require('mysql2');

// Configuration de la base de données mysql
const db = mysql.createConnection({
    host: "localhost",
    user: process.env.userMysql,
    password: process.env.passwordMysql,
    database:"groupomania"
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySql");
  });
  
  module.exports = db;