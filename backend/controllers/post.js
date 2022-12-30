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
      } else { res.status(404).json({ err }) };
    }
  )
};

// Controleur pour la modification d'un post
exports.modifyPost = (req, res, next) => {
  const postObject = req.body;
  const imageOld = postObject.oldImage;
  const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : req.body.image;
  function modifPost() {
    db.query(
      "UPDATE posts SET title=?, content=?, imageUrl=? WHERE id_post=?",
      [postObject.title, postObject.content, imageUrl, postObject.id_post],
      function (err, results) {
        if (imageOld !== imageUrl) {
          const filename = imageOld.split('/images/').pop();
          fs.unlink(`images/${filename}`, () => {
            if (results) {
              res.status(200).json({ results })
            } else { res.status(404).json({ message: 'Erreur' }) };
          })
        } else {
          if (results) {
            res.status(200).json({ results })
          } else { res.status(404).json({ message: 'Erreur' }) };
        }
      }
    )
  }
  db.query(
    "SELECT * FROM posts WHERE id_post=?",
    [postObject.id_post],
    function (err, results) {
      if (results[0].user_id.toString() !== postObject.idUser && Number(postObject.admin) !== 77) {
        return res.status(401).json({ message: 'Vous n etes pas autorisé a effectuer cette action' })
      }
      else modifPost()
    }
  )
};

// Controleur pour la suppression d'un post 
exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  const idUser = req.body.idUser;
  const admin = req.body.admin;
  function deletePost() {
    db.query(
      "DELETE FROM posts WHERE id_post=?",
      [id]
    ), (err, res) => {
      if (res) {
        res.status(200).json({ res })
      } else { res.status(404).json({ message: 'Erreur' }) };
    }
  }
  db.query(
    "SELECT * FROM posts WHERE id_post=?",
    [id],
    function (err, results) {
      if (results[0].user_id.toString() !== idUser && Number(admin) !== 77) {
        return res.status(401).json({ message: 'Vous n etes pas autorisé a effectuer cette action' })
      }
      if (results[0].imageUrl !== null) {
        const filename = results[0].imageUrl.split('/images/').pop();
        return fs.unlink(`images/${filename}`, () => {
          deletePost();
        })
      }
      return deletePost();
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
      if (err) {
        res.status(404).json({ err })
      } else { res.status(200).json(results) };
    }
  )
};

//Controleur pour la récupération de tous les posts
exports.getAllPost = (req, res, next) => {
  db.query(
    "SELECT * FROM posts",
    function (err, results) {
      if (err) {
        res.status(404).json({ err })
      } else { res.status(200).json(results) };
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
      if (result) {
        result.status(200).json(res)
      } else { result.status(404).json({ err }) };
    }
  )
}
