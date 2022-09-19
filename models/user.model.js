'use strict';

const User = (sequelize, DataTypes) => sequelize.define('user', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = User;