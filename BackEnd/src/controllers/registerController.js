const Dev = require('../models/devModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let dev = await Dev.findOne({ email });

        if(!dev){
            dev = await Dev.create(req.body);

            dev.password = undefined;

            const token = jwt.sign({ id: dev.id }, authConfig.secret, { expiresIn: 86400 });

            return res.send({ dev, token });
        }else{
            return res.status(400).send({ erro: "User exists" });
        }
    },
    async show(req, res){
        const dev = await Dev.find();

        return res.json(dev);
    }
}