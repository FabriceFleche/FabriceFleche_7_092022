require('dotenv').config();
const db = require("../middleware/dbConnection.js");

//Controleur pour la gestion du compteur des likes
exports.like = (req, res, next) => {
  const postObject = req.body;
  db.query(
    "UPDATE posts SET likes = likes + ? WHERE id_post=?",
    [postObject.likes, postObject.id_post],
    function (err) {
      if (err) {
        res.status(404).json({ err })
      } else { res.status(200).json({ message: 'Like modifié !' }) };
    }
  )
};

//Controleur pour l archivage des likes aimés par les users (table userlikes)
exports.likeUser = (req, res, next) => {
  const postObject = req.body;
  db.query(
    "INSERT INTO userslikes (id_post, user_id, liked) VALUES (?,?,?)",
    [postObject.id_post, postObject.userId, postObject.liked],
    function (err) {
      if (err) {
        res.status(404).json({ err })
      } else { res.status(200).json({ message: 'Vous aimez maintenant ce post !' }) };
    }
  )
};

// Controleur pour la récupération de tous les likes (table userslikes)
exports.getLikes = (req, res, next) => {
  db.query(
    "SELECT * FROM userslikes ",
    function (err, results) {
      if (err) {
        res.status(404).json({ err })
      } else { res.status(200).json(results) };
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
      if (err) {
        res.status(404).json({ err })
      } else { res.status(200).json(results) };
    }
  )
};

