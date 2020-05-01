'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize('enterprisecontentmanagement', 'postgres', 'test123', {
    host: 'postgresql',
    dialect:  'postgres'
});

module.exports = sequelize;
