'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const Post = require('./post.model.js');
const Comment = require('./comment.model.js');
const POSTGRES_URL = "postgres://faldrbueajsumr:dfe4d50d3d42ac8bb9a9af31dcbcfe77709344d9361aeef36a6ab4c45e91521b@ec2-34-231-42-166.compute-1.amazonaws.com:5432/d9ktkjtf6adsoj";

const user_comment_routes = require('../collections/user_comment_routes.js');

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
// }

const sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);

const commentModel = Comment(sequelize, DataTypes);
const postModel = Post(sequelize, DataTypes);

postModel.hasMany(commentModel, { foreignKey: 'ownerID', sourceKey: 'id' });
commentModel.belongsTo(postModel, { foreignKey: 'ownerID', targetKey: 'id' });

const postcollections = new user_comment_routes(postModel);
const commentcollections = new user_comment_routes(commentModel);


module.exports = {
    db: sequelize,
    Comment: commentcollections,
    Post: postcollections,
    commentModel: commentModel,

}
