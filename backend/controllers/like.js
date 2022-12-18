require('dotenv').config();
const db = require("../middleware/dbConnection.js");

//Controleur pour la gestion du compteur des likes
exports.like = (req, res, next) => {
  const postObject = req.body;
  db.query(
    "UPDATE posts SET likes = likes + ? WHERE id_post=?",
    [postObject.likes, postObject.id_post],
    function (err, results) {
      if (results) {
        res.status(201).json({ message: 'Like modifié !' })
      } else { res.status(401).json({ message: 'Non autorisé' }) };
    }
  )
};

//Controleur pour l archivage des likes aimés par les users (table userlikes)
exports.likeUser = (req, res, next) => {
  const postObject = req.body;
  db.query(
    "INSERT INTO userslikes (id_post, user_id, liked) VALUES (?,?,?)",
    [postObject.id_post, postObject.userId, postObject.liked],
    function (err, results) {
      if (results) {
        res.status(201).json({ message: 'Vous aimez maintenant ce post !' })
      } else { res.status(401).json({ message: 'Non autorisé' }) };
    }
  )
};

// Controleur pour la récupération de toute les likes (table userslikes)
exports.getLikes = (req, res, next) => {
  db.query(
    "SELECT * FROM userslikes ",
    function (err, results) {
      if (results) {
        res.status(200).json(results)
      } else { res.status(404).json({ err }) };
    }
  )
};

// Controleur pour la suppression d'un like user (table userslikes) 
exports.deleteLike = (req, res, next) => {
  const postObject = req.body;
  db.query(
    "DELETE FROM userslikes WHERE id_post=? && user_id=?",
    [postObject.id_post, postObject.userId],
    function (err, results) {
      if (results) {
        res.status(200).json(results)
      } else { res.status(404).json({ err }) };
    }
  )
};

