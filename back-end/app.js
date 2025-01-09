const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path');
const Login = require('./models/Login')
const Produto = require('./models/Produto')
const {engine} = require('express-handlebars')


app.use(express.static(path.join(__dirname, 'public')));

//Configuração Template engine
 //Template Engine
app.engine('handlebars', engine({defaultLayout: 'main',  runtimeOptions: {
    allowProtoPropertiesByDefault: true
  }}))
app.set('view engine', 'handlebars')

//Body parser 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Rotas
app.get('/', function(req, res){
    res.render('home')
})

app.get('/cad', function(req, res){
    res.render('cad')
})
app.get('/login', function(req, res){
    res.render('login')
})

app.get('/user', function(req, res){
    res.render('user')
})

app.get('/sobre', function(req, res){
    res.render('sobre')
})

app.get('/payments', function(req, res){
    res.render('payments')
})

app.get('/produtos/adicionar', function(req, res){
    res.render('adicaoProdutos');
})

//Rotas formulário
app.post('/add', function(req, res){
    Login.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        telefone: req.body.telefone,
        timeFav: req.body.timeFav,
        instagram: req.body.insta,
        dataNascimento: req.body.data
    }).then(function(){
        res.redirect('/login')
    }).catch(function(erro){
        res.send(`Houve um erro ${erro}`)
    })
})

app.post('/produtos/adicionar', function(req, res){
    console.log(req.body);
    Produto.create({
    nome: req.body.nome,
    preco: req.body.preco,
    imagem: req.body.imagem,
    descricao: req.body.descricao,
    categoria_id: req.body.categoria_id
    }).then(function(){
        res.redirect('/produtos/adicionar')
        console.log('Deu certo!! Tabela criada.')
    }).catch(function(erro){
        res.send(`Houve um erro ${erro}`)
    })
})


//Rotas de envio para o front-end
app.get('/api/users', (req, res) => {
    Login.findAll() 
        .then(users => {
            res.json(users); 
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar os usuários.' });
        });
});

app.get('/produtos', (req, res) =>{
    Produto.findAll() 
    .then(users => {
        res.json(users); 
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar os usuários.' });
    });

})

app.get('/categorias', (req, res) =>{
    Categoria.findAll() 
    .then(users => {
        res.json(users); 
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar os usuários.' });
    });
    
})

//Rotas de recebimento do front-end
// Atualizar usuário pelo ID
app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id; // ID do usuário a ser atualizado
    const { nome, email, senha, telefone, timeFav, instagram, dataNascimento } = req.body;

    Login.update(
        {
            nome,
            email,
            senha,
            telefone,
            timeFav,
            instagram,
            dataNascimento,
        },
        {
            where: { id: userId } // Condição para identificar o registro a ser atualizado
        }
    )
    .then(rowsUpdated => {
        if (rowsUpdated[0] > 0) {
            res.status(200).json({ message: 'Usuário atualizado com sucesso' });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    });
});


app.get('/teste', function(req, res){
    res.render('teste')
})

app.listen(3000, function(){
    console.log('Conectado com sucesso! Porta 3000.')
})
