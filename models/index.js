'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const Post = require('./post.model.js');
const Comment = require('./comment.model.js');
const user = require('./user.model.js');
// const POSTGRES_URL = "postgres://wgszegnyqxpvex:faad326b6b4c9dbb79fe34fcd5e5d0e195e88574d6c44530c47a242ce146d335@ec2-3-93-206-109.compute-1.amazonaws.com:5432/d20ko6bh6475hk";

const POSTGRES_URL = "postgres://adarbeh:0000@localhost:5432/adarbeh";
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

const sequelize = new Sequelize(POSTGRES_URL, {});

const userModel = user(sequelize, DataTypes);
const postModel = Post(sequelize, DataTypes);
const commentModel = Comment(sequelize, DataTypes);


userModel.hasMany(postModel, { foreignKey: 'postid', sourceKey: 'id' });
postModel.belongsTo(userModel, { foreignKey: 'postid', targetKey: 'id' });

postModel.hasMany(commentModel, { foreignKey: 'ownerID', sourceKey: 'id' });
commentModel.belongsTo(postModel, { foreignKey: 'ownerID', targetKey: 'id' });


const postcollections = new user_comment_routes(postModel);
const commentcollections = new user_comment_routes(commentModel);




module.exports = {
    db: sequelize,
    Comment: commentcollections,
    Post: postcollections,
    commentModel: commentModel,
    User: userModel,
    postinc: postModel,
    commentinc: commentModel

}
