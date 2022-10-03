// Gestion de l'authentification avec un token
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.token);
        const userId = decodedToken.user_id;
        req.auth = {userId: userId};
    next();
    } catch(error) {
        res.status(401).json({error});
    }
};