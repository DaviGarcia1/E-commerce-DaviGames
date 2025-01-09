const db = require('./db')

const Categoria = db.sequelize.define('categorias', {
    nome: {
        type: db.Sequelize.STRING,
        unique: true
    }
});

/*Categoria.sync({force:true}).then(() => {
    console.log('Tabela criada com sucesso')})
.catch((err) => {
    console.log(`Aconteceu um erro: ${err}`)
})
*/
module.exports = Categoria;