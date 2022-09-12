'use strict';
const {Sequelize , DataTypes} = require('sequelize');
const Post = require('./post.model.js');
const POSTGRES_URL = process.env.DB_DATABASE || "postgresql://adarbeh:0000@localhost:5432/adarbeh";


// const sequelizeOptions = {
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     }
// };


const sequelize = new Sequelize(POSTGRES_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {}, 
  });

module.exports = {
    db: sequelize,
    Post: Post(sequelize, DataTypes),
}
