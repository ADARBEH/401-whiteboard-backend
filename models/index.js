'use strict';
const {Sequelize , DataTypes} = require('sequelize');
const Post = require('./post.model.js');
const POSTGRES_URL =  "postgresql://adarbeh:0000@localhost:5432/adarbeh";

let sequelize = new Sequelize(POSTGRES_URL);

module.exports = {
    db: sequelize,
    Post: Post(sequelize, DataTypes),
}
