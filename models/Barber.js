const Sequelize = require('sequelize');
const db = require('./db');
const User = require('./User');

const Barber = db.define('barber', {
    id_barber: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    biography:{
        type: Sequelize.TEXT,
        allowNull: true
    }
});

Barber.belongsTo(User,{
    constraints: true,
    foreignKey: 'idUser'
});

module.exports = Barber;