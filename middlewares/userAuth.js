'use strict';

const {User} = require('../models/index');

const userAuth = async (req, res, next) => {
try{
    const userName = await User.findOne({ where: { userName: req.body.userName } });
    if (userName) {
        return res.status(409).json({ message: 'Username already exists' });
    }

    const email = await User.findOne({ where: { email: req.body.email } });
    if (email) {
        return res.status(409).json({ message: 'Email already exists' });
    }

    next();
    
} catch (error) {
    res.status(500).json({ message: `${error}` });
}
};

module.exports = userAuth;
