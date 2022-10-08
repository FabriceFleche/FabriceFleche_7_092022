require('dotenv').config();
//const fs = require('fs');
const db = require("../middleware/dbConnection.js");

// Controleur pour la création d'un post
exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    delete postObject._id;
    delete postObject._userId;
    console.log(postObject);
    db.query(
      'INSERT INTO  posts(user_id, names, title, content) VALUES (?,?,?,?)',
      [req.auth.userId, postObject._name, postObject._title, postObject._content],
      function(err, results) {
        if (results) {res.status(201).json({ message: 'Post enregistré' })
        } else {res.status(400).json({ err })};
      }
    )
};  

// Controleur pour la modification d'un post  
exports.modifyPost = (req, res, next) => {
    const sauceObject = req.file ? {
      ...JSON.parse(req.body.post),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Post.findOne({ _id: req.params.id })
      .then((post) => {
        if (post.userId != req.auth.userId) {
          res.status(401).json({ message: 'Non autorisé' });
        } else {
          Post.updateOne({ _id: req.params.id}, {...postObject, _id: req.params.id})
          .then(() => res.status(200).json({ message: 'Post modifié !'}))
          .catch((error) => {res.status(401).json({ error })});
        }
      })
      .catch((error) => {res.status(400).json({ error })});
  };      

// Controleur pour la suppression d'un post 
exports.deletePost = (req, res, next) => {
  db.query(
    "SELECT * FROM posts WHERE user_id= ?",
    [req.params.id],
    function(err, results) {
      if (results.userId != req.auth.userId) {
            res.status(401).json({ message: 'Non autorisé' });
      } else {
        db.query(
          "DELETE FROM posts WHERE user_id= ?",
            [req.params.id],
            function(err, results) {
              if (results) {res.status(201).json({ message: 'Post supprimé !' })
              } else {res.status(400).json({ err })};
            }
        )
      }
    }        
  )
};
      // .then((post) => {
      //   if (post.userId != req.auth.userId) {
      //     res.status(401).json({ message: 'Non autorisé' });
      //   } else {
      //     db.query(
      //       "DELETE FROM posts WHERE user_id= ?",
      //       [req.params.id],
      //     )
      //     .then(() => res.status(200).json({ message: 'Post supprimé !'}))
      //     .catch((error) => {res.status(401).json({ error })})
      //   }
      // })  
      //.catch((error) => {res.status(400).json({ error })});

/*
          const filename = post.imageUrl.split('/images/')[1];
          fs.unlink(`images/${filename}`, () => {
            Post.deleteOne({ _id: req.params.id })
              .then(() => res.status(200).json({ message: 'Post supprimé !'}))
              .catch((error) => {res.status(401).json({ error })})
          })*/


// Controleur pour la selection d'un post
exports.getOnePost = (req, res, next) => {
  db.query(
    "SELECT * FROM posts WHERE user_id= ?",
    [req.params.id],
    function(err, results) {
      if (results) {res.status(200).json(results)
      } else {res.status(404).json({ err })};
    }
  )
};

// Controleur pour la récupération de toute les posts
exports.getAllPost = (req, res, next) => {
  db.query(
    "SELECT names,title,content FROM posts",
    function(err, results) {
      if (results) {res.status(200).json(results)
      } else {res.status(404).json({ err })};
    }
  )
};

//Controleur pour la gestion du like
exports.postLike = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {

      // L utilisateur aime le post
      if(!post.usersLiked.includes(req.body.userId) && req.body.like === 1) {
        Post.updateOne({ _id: req.params.id  },
          {
            $inc: {likes: 1},
            $push: {usersLiked: req.body.userId}
          })
          .then(() => res.status(201).json({ message: 'Vous avez aimé ce post !'}))
          .catch((error) => {res.status(400).json({ error })});

      // L utilisateur annule son like    
      } else if (post.usersLiked.includes(req.body.userId)) {
        Post.updateOne({ _id: req.params.id  },
          { 
            $inc: {likes: -1},
            $pull: {usersLiked: req.body.userId}
          })
          .then(() => res.status(201).json({ message: "Le like de ce post a été annulé !" }))
          .catch((error) => {res.status(400).json({ error })});
      }
    })
    .catch((error) => {res.status(404).json({ error })});
}

