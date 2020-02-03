'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    label: DataTypes.STRING,
    picture: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    summary: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};