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
            db.query(
                'INSERT INTO user(name, email, password) VALUES (?,?,?)',
                [name, email, password],
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
    const passwordSql = db.query(
        "SELECT password FROM user WHERE email= ?",
        [email],);
    if (passwordSql != null) {
        const userIdSql = db.query(
            "SELECT user_id FROM user WHERE email= ?",
            [email]);
        bcrypt.compare(req.body.password, passwordSql)
        .then(valid => {
            if (!valid) {
                res.status(401).json({message: 'Paire identifiant/mot de passe incorrecte'})
            } else {
                res.status(200).json({
                    userId: userIdSql,
                    token: jwt.sign(
                        {userId: userIdSql},
                        process.env.token,
                        {expiresIn: '24h'}
                    )
                })
            };
        })     
        .catch(error => {
            res.status(500).json({ error });
        });
    } else res.status(401).json({message: 'Paire identifiant/mot de passe incorrecte'});
};
