require('dotenv').config();
const db = require("../middleware/dbConnection.js");

//Controleur pour la gestion du compteur des likes
exports.like = (req, res, next) => {
  const postObject = req.body;
  //const id = req.params.id;
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

exports.likeUser = (req, res, next) => {
  const postObject = req.body;
  db.query(
    "INSERT INTO userslikes (id_post, user_id, liked) VALUES (?,?,?)",
    [postObject.id_post, postObject.userId, true],
    function (err, results) {
      if (results) {
        res.status(201).json({ message: 'Vous aimez maintenant ce post !' })
      } else { res.status(401).json({ message: 'Non autorisé' }) };
    }
  )
};

