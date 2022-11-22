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
                'INSERT INTO user(name, email, password, isAdmin) VALUES (?,?,?,?)',
                [name, email, password, 0],
                function (err, results) {
                    if (results) {
                        res.status(201).json({ message: 'Utilisateur créé !' })
                    } else { res.status(400).json({ err }) };
                    console.log(err);
                    console.log(results);
                }
            );
        })
        .catch(error => { res.status(500).json({ error }) });
};

// // Controleur pour la connexion de l'utilisateur
exports.login = (req, res, next) => {
    const email = req.body.email;
    db.query(
        "SELECT EXISTS(select * from user WHERE email= ?) AS emailExist",
        [email],

        function (error, results) {
            if (results[0].emailExist == 0) {
                res.status(400).json({ Message: "Paire identifiant/mot de passe incorrecte" })

            } else {
                db.query(
                    "SELECT user_id, name, password, isAdmin FROM user WHERE email= ?",
                    [email],
                    function (error, results) {
                        bcrypt.compare(req.body.password, results[0].password)
                            .then(valid => {
                                if (!valid) {
                                    res.status(400).json({ Message: "Paire identifiant/mot de passe incorrecte" })

                                } else {
                                    res.status(200).json({
                                        userId: results[0].user_id,
                                        isAdmin: results[0].isAdmin,
                                        name: results[0].name,
                                        token: jwt.sign(
                                            { userId: results[0].user_id },
                                            process.env.token,
                                            { expiresIn: '24h' }
                                        )
                                    })
                                };
                            })
                            .catch(error => {
                                res.status(500).json({ error });
                            });
                    }
                )
            }
        }
    )
};

// Controleur pour la connexion de l'utilisateur
// exports.login = (req, res, next) => {
//     const email = req.body.email;
//     db.query(
//         "SELECT user_id, name, password, isAdmin FROM user WHERE email= ?",
//         [email],
//         function (error, results) {
//             bcrypt.compare(req.body.password, results[0].password)
//                 .then(valid => {
//                     if (!valid) {
//                         res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' })
//                     } else {
//                         res.status(200).json({
//                             userId: results[0].user_id,
//                             isAdmin: results[0].isAdmin,
//                             name: results[0].name,
//                             token: jwt.sign(
//                                 { userId: results[0].user_id },
//                                 process.env.token,
//                                 { expiresIn: '24h' }
//                             )
//                         })
//                     };
//                 })
//                 .catch(error => {
//                     res.status(500).json({ error });
//                 });
//         }
//     )
// }


// Controleur pour la recuperation du nom de l'utilisateur lors de la creation d un post
exports.name = (req, res, next) => {
    const user_id = req.body.id;
    db.query(
        "SELECT name FROM user WHERE user_id= ?",
        [user_id],
        function (err, results) {
            if (results) {
                res.status(200).json(results)
            } else { res.status(404).json({ err }) };
        }
    )
};