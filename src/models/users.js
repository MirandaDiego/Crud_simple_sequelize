
const db = require('../database/index.js')
const { Sequelize  } = require('sequelize')


const user = db.define("client", {
    id: {
        type:Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cpf: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true,
        
    }, 
    name: {
        type:Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type:Sequelize.STRING,
    },
    email: {
        type:Sequelize.STRING,
        unique: true,
    }
});

user.sync();

module.exports = user