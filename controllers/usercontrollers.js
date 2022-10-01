'use strict';
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { User } = require('../models');



const signup = async (req, res) => {
    try {
        const { userName, email, password , role } = req.body;
        
        const user = await User.create({
            userName,
            email,
            password: await bcrypt.hash(password, 10),
            role
        });
        if (user) {
            res.status(201).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: `${error}` });

    }

};

const signin = async (req, res) => {
    try {
        const basicAuth = req.headers.authorization.split(' ').pop();
        const encoded = base64.decode(basicAuth);
        const [email, password] = encoded.split(':');
        const user = await User.findOne({ where: { email } });
        if (user) {
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid) {
                res.status(200).json(user);

            } else {
                res.status(403).json({ message: 'Check Your Password & Email' });
            }
        } else {
            res.status(403).json({ message: 'Check Your Password & Email' });
        }

    } catch (error) {
        res.status(500).json({ message: `${error}` });
    }

}

const allUser = async (req, res) => {

    try {
        const user = await User.findAll();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: `${error}` });
    }
}

module.exports = {
    signup,
    signin,
    allUser
}
