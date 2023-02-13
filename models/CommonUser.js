const Sequelize = require('sequelize');
const db = require('./db');
const User = require('./User');

const CommonUser = db.define('common_user', {
    id_common_users: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
});

CommonUser.belongsTo(User,{
    constraints: true,
    foreignKey: 'idUser'
});

module.exports = CommonUser;
