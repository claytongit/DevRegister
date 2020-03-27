const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ erro: "No token provided" });
    }

    const parts = authHeader.split(' ');

    if(!parts.length == 2){
        return res.status(401).send({ erro: "Token erro" });
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({ erro: "Token malformatted" });
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err){
            return res.status(401).send({ erro: "Token invalid" });
        }

        req.userId = decoded.id;

        return next();
    });
}