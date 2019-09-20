const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-live','root','',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;