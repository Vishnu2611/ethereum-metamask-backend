'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    publicAddress: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    nounce: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
});
module.exports = User;
