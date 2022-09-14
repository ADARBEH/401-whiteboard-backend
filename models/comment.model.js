'use strict';

const Comment = (sequelize, DataTypes) => sequelize.define('Comment', {
  petName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ownerID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Comment;
