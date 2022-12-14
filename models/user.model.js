'use strict';
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.VIRTUAL,
            get: function () {
                return jwt.sign({
                    userName: this.userName
                }, process.env.JWT_SECRET)
            },
            set(tokenObj) {
                return jwt.sign(tokenObj, process.env.JWT_SECRET)
            }
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            allowNull: false,
            defaultValue: 'user'
        },
        capabilities: {
            type : DataTypes.VIRTUAL,
            get: function () {
                const acl = {
                    admin : ['read' , 'create' , 'delete', 'update'],
                    user : ['read', 'create']
                }
                return acl[this.role]

            }
        }
        
    });

    User.authenticateToket = (token) => {
        return jwt.verify(token, process.env.JWT_SECRET , (err, decode) => {
            if (err) {
                return err;
            } else {
                return decode;
            }
        })
    }

    return User;
}