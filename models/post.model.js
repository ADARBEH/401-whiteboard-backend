'use strict';

const Post = (sequelize, DataTypes) => sequelize.define('post', {
    title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

module.exports = Post;

