const Sequelize = require('sequelize');
const User = require('./User');
const db = require('./db');

const Login = db.define('logins', {
    id_login: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date_and_time: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    ip: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

Login.belongsTo(User,{
    constraints: true,
    foreignKey: 'idUser'
});

module.exports = Login;