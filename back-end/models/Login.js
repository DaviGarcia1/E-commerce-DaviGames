const db = require('./db')   

const Cadastro = db.sequelize.define('cadastro', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING(15) 
    },
    timeFav: {
        type: db.Sequelize.STRING
    },
    instagram: {
        type: db.Sequelize.STRING
    },
    dataNascimento: {
        type: db.Sequelize.DATE
    }
})

module.exports = Cadastro
//Cadastro.sync({force:true})