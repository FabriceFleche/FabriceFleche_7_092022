require('dotenv').config();
const db = require("../middleware/dbConnection.js");

//Controleur pour la gestion du like
exports.like = (req, res, next) => {
  const postObject = req.body;
  const id = req.params.id;
  const like = postObject.like;
  db.query(
    "UPDATE posts SET likes=? WHERE user_id=?",
        [like, id],
            function(err, results) {
              if (results) {res.status(201).json({ message: 'Like modifié !' })
              } else {res.status(401).json({ message: 'Non autorisé' })};
            }
  )
};

