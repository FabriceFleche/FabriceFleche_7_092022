require('dotenv').config();
const fs = require('fs');
const db = require("../middleware/dbConnection.js");

// Controleur pour la création d'un post
exports.createPost = (req, res, next) => {
  const postObject = req.body;
  const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null;
  db.query(
    'INSERT INTO  posts(user_id, names, title, content, imageUrl, date, likes) VALUES (?,?,?,?,?,?,?)',
    [postObject.userId, postObject.name, postObject.title, postObject.content, imageUrl, postObject.date, 0],
    function (err, results) {
      if (results) {
        res.status(201).json({ message: 'Post enregistré' })
      } else { res.status(400).json({ err }) };
    }
  )
};

// Controleur pour la modification d'un post
// exports.modifyPost = (req, res, next) => {
//   const postObject = req.body;
//   const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : req.body.image;
//   db.query(
//     "UPDATE posts SET title=?, content=?, imageUrl=? WHERE id_post=?",
//     [postObject.title, postObject.content, imageUrl, postObject.id_post],
//     function (err, results) {
//       if (req.file !== null) {
//         const filename = postObject.oldImage.split('/images/').pop();
//         fs.unlink(`images/${filename}`, () => {
//           results.status(201).json({ message: 'Post modifié !' });
//         })
//       } else {
//         results.status(201).json({ message: 'Post modifié !' });
//       }
//     }
//   )
// };

// Controleur pour la modification d'un post
exports.modifyPost = (req, res, next) => {
  const postObject = req.body;
  const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : req.body.image;
  db.query(
    "UPDATE posts SET title=?, content=?, imageUrl=? WHERE id_post=?",
    [postObject.title, postObject.content, imageUrl, postObject.id_post],
    function (err, results) {
      if (results) {
        res.status(201).json({ message: 'Post modifié !' })
      } else { res.status(401).json({ message: 'Non autorisé' }) };
    }
  )
};

// Controleur pour la suppression d'un post 
exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  function deletePost() {
    db.query(
      "DELETE FROM posts WHERE id_post=?",
      [id]
    ), (err, res) => {
      res.status(201).json({ message: 'Post supprimé !' });
    }
  }
  db.query(
    "SELECT imageUrl FROM posts WHERE id_post=?",
    [id],
    function (err, results) {
      if (results[0].imageUrl !== null) {
        const filename = results[0].imageUrl.split('/images/').pop();
        fs.unlink(`images/${filename}`, () => {
          deletePost();
        })
      } else {
        deletePost();
      }
    }
  )
}

// Controleur pour la selection des posts d'un user
exports.getPostUser = (req, res, next) => {
  db.query(
    "SELECT * FROM posts WHERE user_id= ?",
    [req.params.id],
    function (err, results) {
      if (results) {
        res.status(200).json(results)
      } else { res.status(404).json({ err }) };
    }
  )
};

// Controleur pour la selection d'un post
exports.getOnePost = (req, res, next) => {
  db.query(
    "SELECT * FROM posts WHERE id_post= ?",
    [req.params.id],
    function (err, results) {
      if (results) {
        res.status(200).json(results)
      } else { res.status(404).json({ err }) };
    }
  )
};

//Controleur pour la récupération de toute les posts
exports.getAllPost = (req, res, next) => {
  db.query(
    "SELECT * FROM posts",
    function (err, results) {
      if (results) {
        res.status(200).json(results)
      } else { res.status(404).json({ err }) };
    }
  )
};

// Controleur pour la récupération de tous les posts avec gestion like user
let arrayOfpostsLiked = []
exports.getLikeUser = (req, result, next) => {
  const user = req.params.id
  arrayOfpostsLiked = []
  db.query(
    "SELECT id_post FROM userslikes WHERE user_id=?",
    [user],
    function (err, results) {
      results.map((like) => {
        arrayOfpostsLiked.push(like.id_post);
      })
    }
  )
  db.query(
    "SELECT * FROM posts",
    function (err, res) {
      res = res.map((post) => {
        if (arrayOfpostsLiked.includes(post.id_post) === true) {
          post.isLiked = true;
        } else {
          post.isLiked = false;
        }
        return post
      })
      result.status(200).json(res)
    }
  )
}
