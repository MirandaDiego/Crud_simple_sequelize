const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: 'P4$$w0rd',
    dialect: 'mysql',
    port: 3306,
    database: 'users2'

})

 const Connection = async () => {
 
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully')
        return sequelize
    }catch(error){
        console.log('Connection ERROR', error)
    }

    
}

module.exports = sequelize;