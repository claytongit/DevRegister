const Dev = require('../models/devModel');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const bcryptjs = require('bcryptjs')

module.exports = {
    async store(req, res){
        const { email, password } = req.body;

        const dev = await Dev.findOne({ email }).select('+password');

        if(!dev){
            return res.status(400).send({ erro: 'User not found' });
        }

        if(!await bcryptjs.compare(password, dev.password)){
            return res.status(400).send({ erro: 'Invalid password' });
        }

        dev.password = undefined;

        const token = jwt.sign({ id: dev.id }, authConfig.secret, { expiresIn: 86400 });

        return res.send({ dev, token });
    }
}