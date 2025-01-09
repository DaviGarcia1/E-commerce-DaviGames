const db = require('./db')
const Categoria = require('./Categoria');
const Produto = db.sequelize.define('produtos', {
    nome: {
        type: db.Sequelize.STRING
    },
    preco: {
        type: db.Sequelize.DECIMAL(10, 2)
    },
    imagem: {
        type: db.Sequelize.STRING()
    }, 
    descricao: {
        type: db.Sequelize.TEXT
    }
});

Produto.belongsTo(Categoria, { foreignKey: 'categoria_id', as: 'categoria' });
Categoria.hasMany(Produto, { foreignKey: 'categoria_id', as: 'produtos' });





/*Produto.sync({force:true}).then(() => {
    console.log('Tabela criada com sucesso')})
.catch((err) => {
    console.log(`Aconteceu um erro: ${err}`)
})
*/

module.exports = Produto;