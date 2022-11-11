require('dotenv').config();
const db = require("../middleware/dbConnection.js");

//Controleur pour la gestion du like
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

