'use strict';
const {Sequelize , DataTypes} = require('sequelize');
const Post = require('./post.model.js');
const POSTGRES_URL = "postgres://faldrbueajsumr:dfe4d50d3d42ac8bb9a9af31dcbcfe77709344d9361aeef36a6ab4c45e91521b@ec2-34-231-42-166.compute-1.amazonaws.com:5432/d9ktkjtf6adsoj";
// const POSTGRES_URL = "postgresql://adarbeh:0000@localhost:5432/adarbeh";
require('dotenv').config();


const sequelizeOptions = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
};

// {
//     dialect: 'postgres',
//     protocol: 'postgres',
//     dialectOptions: {}, 
//   }


const sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

module.exports = {
    db: sequelize,
    Post: Post(sequelize, DataTypes),
}
