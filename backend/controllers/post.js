require('dotenv').config();
const fs = require('fs');
const db = require("../middleware/dbConnection.js");

// Controleur pour la création d'un post
exports.createPost = (req, res, next) => {
  const postObject = req.body;
  const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null;
  db.query(
    'INSERT INTO  posts(user_id, names, title, content, imageUrl, likes) VALUES (?,?,?,?,?,?)',
    [postObject.userId, postObject.name, postObject.title, postObject.content, imageUrl, 0],
    function (err, results) {
      if (results) {
        res.status(201).json({ message: 'Post enregistré' })
      } else { res.status(400).json({ err }) };
    }
  )
};

// Controleur pour la modification d'un post  
exports.modifyPost = (req, res, next) => {
  const postObject = req.body;
  //const id = req.params.id;
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
// exports.deletePost = (req, res, next) => {
//   const id = req.params.id;
//   db.query(
//     "DELETE FROM posts WHERE id_post=?",
//     [id],
//     function (err, results) {
//       if (results) {
//         if (results.imageUrl != null) {
//           const filename = results.imageUrl.split('/images/')[1];
//           fs.unlink(`images/${filename}`, () => { res.status(201).json({ message: 'Post et image supprimés !' }) })
//         } else { { res.status(400).json({ message: 'Post supprimé !' }) } }
//       } else { res.status(401).json({ message: 'Non autorisé' }) };
//     }
//   )
// };

// Controleur pour la suppression d'un post 
exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  db.query(
    "SELECT imageUrl FROM posts WHERE id_post=?",
    [id],
    function (err, results) {
      if (results != (NULL)) {
        const filename = results.split('/images/');
        fs.unlink(`images/${filename}`, () => { res.status(201).json({ message: 'Post et image supprimés !' }) })
      } else { { res.status(400).json({ message: 'Post supprimé !' }) } }
      db.query(
        "DELETE FROM posts WHERE id_post=?",
        [id]
      )
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


// Controleur pour la récupération de toute les posts (test avec gestion like user)
exports.getLikeUser = (req, res, next) => {
  const user = req.params.id
  db.query(
    "SELECT id_post FROM userslikes WHERE user_id=?",
    [user],
    function (err, results) {
      if (results) {

        res.status(200).json(results)
      } else { res.status(404).json({ err }) };

    }
  )
}


//Controleur pour la gestion du like / user
// exports.postLike = (req, res, next) => {
//   const postObject = req.body;

//   db.query(
//     "UPDATE posts SET likeUser=? WHERE id_post=?",
//     [postObject.userId, postObject.id_post],
//     function (err, results) {
//       if (results) {
//         res.status(201).json({ message: 'Like modifié !' })
//       } else { res.status(401).json({ message: 'Non autorisé' }) };
//     }
//   )

//   db.query(
//     "SELECT * FROM posts WHERE user_id= ?",
//     [req.params.id],
//     function (err, results) {

//       // L utilisateur aime le post
//       if (!post.usersLiked.includes(req.body.userId) && req.body.like === 1) {
//         Post.updateOne({ _id: req.params.id },
//           {
//             $inc: { likes: 1 },
//             $push: { usersLiked: req.body.userId }
//           })
//           .then(() => res.status(201).json({ message: 'Vous avez aimé ce post !' }))
//           .catch((error) => { res.status(400).json({ error }) });

//         // L utilisateur annule son like
//       } else if (post.usersLiked.includes(req.body.userId)) {
//         Post.updateOne({ _id: req.params.id },
//           {
//             $inc: { likes: -1 },
//             $pull: { usersLiked: req.body.userId }
//           })
//           .then(() => res.status(201).json({ message: "Le like de ce post a été annulé !" }))
//           .catch((error) => { res.status(400).json({ error }) });
//       }
//     })
//   //.catch((error) => { res.status(404).json({ error }) });

// }

