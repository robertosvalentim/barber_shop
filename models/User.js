const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nickname:{
        type:Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false        
    },
    sex:{
        type: Sequelize.STRING,
        allowNull: false
    },
    birth_date:{
        type:Sequelize.DATE,
        allowNull:false
    },
    address_street:{
        type:Sequelize.STRING,
        allowNull:false
    },
    address_number:{
        type: Sequelize.STRING,
        allowNull: false
    },
    address_neighborhood:{
        type: Sequelize.STRING,
        allowNull: false
    },
    address_city:{
        type: Sequelize.STRING,
        allowNull: false
    },
    address_state:{
        type: Sequelize.STRING,
        allowNull: false
    },
    address_zip:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telephone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar:{
        type: Sequelize.STRING,
        allowNull: true
    },
    active:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

/*
const Common_User = db.define('common_user', {
    id_common_users: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

User.hasOne(Common_User);
*/


module.exports = User;