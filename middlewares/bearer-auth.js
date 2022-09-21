'use strict';

const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

const bearerAuth = async (req, res, next) => {
    if (!req.headers.authorization) {

        next('Invalid Login');
    }

    try {

        const token = req.headers.authorization.split(' ').pop();

        const validUser = await User.authenticateToket(token);
        // console.log(validUser);
        const userinfo = await User.findOne({ where: { userName: validUser.userName } });
        // console.log(userinfo);

        if (userinfo) {
            req.user = userinfo;
            req.token = userinfo.token
        } else {
            next('Invalid Token');
        }
    } catch (error) {
        next(error.message);
    }


    next();
}

module.exports = bearerAuth;