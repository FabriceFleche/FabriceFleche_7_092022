// Gestion de l'authentification avec un token
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.token);
        const user_id = decodedToken.user_id;
        req.auth = {userId: user_id};
    next();
    } catch(error) {
        res.status(401).json({error});
    }
};