const Sequelize = require('sequelize')

const sequelize = new Sequelize('X', 'root', 'X', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log('Conectado ao banco com sucesso')
}).catch(function(erro){
    console.log("Falha ao se conectat: "+ erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}