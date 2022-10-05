const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const db = require("../middleware/dbConnection.js");
require('dotenv').config();


// Controleur pour la creation du compte utilisateur
exports.signup = (req, res, next) => {
    bcrypt
        .hash(req.body.password, 10)
        .then(hash => {
            const name = req.body.name;
            const email = req.body.email;
            const password = hash;
            console.log(password);
            db.query(
                'INSERT INTO user(name, email, password, isAdmin) VALUES (?,?,?)',
                [name, email, password, 0],
                function(err, results) {
                  console.log(err)
                  console.log(results);
                }
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }))
            );
        })
        .catch(error => {res.status(500).json({ error })});
};

// Controleur pour la connexion de l'utilisateur
exports.login = (req, res, next) => {
    const email = req.body.email;
    db.query(
        "SELECT user_id, password FROM user WHERE email= ?",
        [email],
        function (err, results) {
            console.log(results[0].password, req.body.password);
         bcrypt.compare(req.body.password, results[0].password)
        .then(valid => {
            if (!valid) {
                res.status(401).json({message: 'Paire identifiant/mot de passe incorrecte'})
            } else {
                res.status(200).json({
                    userId: results[0].user_id,
                    token: jwt.sign(
                        {userId: results[0].user_id},
                        process.env.token,
                        {expiresIn: '24h'}
                    )
                })
            };
        })     
        .catch(error => {
            res.status(500).json({ error });
        });
})};