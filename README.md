# Mini E-commerce

## Sobre o Projeto

Este projeto é um mini e-commerce desenvolvido inicialmente com JavaScript puro, mas, conforme fui aprendendo novas tecnologias, fui incorporando novas ferramentas para aprimorar a aplicação.

O foco principal foi aplicar diversas tecnologias para entender melhor seu funcionamento e integração.

## Tecnologias Utilizadas

### Back-End
- **Node.js** e seus frameworks:
  - Express
  - Handlebars
  - Sequelize
  - Body-Parser
- Criação de várias rotas, funcionando como uma **API**
- Banco de dados **MySQL** para armazenamento dos dados

### Front-End
- **Fetch API** para consumir os dados do back-end
- **JavaScript** puro para a manipulação do DOM e interações
- **Bootstrap** para estilização
- Arquivos HTML renderizados pelo **Handlebars**

## Instalação e Execução do Projeto

### Pré-requisitos
Antes de iniciar, certifique-se de ter instalado em sua máquina:
- Node.js
- MySQL

### Passo a Passo

1. **Clone o repositório**
```bash
  git clone https://github.com/DaviGarcia1/E-commerce-DaviGames/tree/main
```

2. **Acesse a pasta do projeto**
```bash
  cd E-commerce-DaviGames
```

3. **Instale as dependências**
```bash
  npm install
```

4. **Configuração do Banco de Dados**
   - O banco de dados utilizado no projeto é o **MySQL**. Para utilizá-lo, siga os passos abaixo:
     1. **Crie um banco de dados no MySQL** conforme o `db.js`:
        ```sql
        CREATE DATABASE dgeccomerce;
        ```
     2. **Importe o arquivo SQL**
        - Baixe o arquivo do banco de dados (`dgeccomerce.sql`) e importe no seu MySQL usando o comando:
        ```bash
        mysql -u seu_usuario -p dgeccomerce < dgeccomerce.sql
        ```
     3. **Configure a conexão no arquivo `db.js`**
        - Se necessário, altere os dados de conexão no arquivo `db.js`:
        ```js
        const sequelize = new Sequelize('dgeccomerce', 'seu_usuario', 'sua_senha', {
            host: 'localhost',
            dialect: 'mysql'
        });
        ```

5. **Execute o projeto**
```bash
  npm start
```

O servidor estará rodando em `http://localhost:3000`

## Rotas da Aplicação

### Rotas de Visualização (Front-End)
- `GET /` - Página inicial
- `GET /cad` - Página de cadastro de usuários
- `GET /login` - Página de login
- `GET /user` - Página de perfil do usuário
- `GET /sobre` - Página "Sobre nós"
- `GET /payments` - Página de pagamentos
- `GET /produtos/adicionar` - Página para adicionar produtos

### Rotas de API (Back-End)
- `GET /api/users` - Retorna todos os usuários cadastrados
- `GET /produtos` - Retorna todos os produtos cadastrados
- `GET /categorias` - Retorna todas as categorias cadastradas
- `POST /add` - Cadastra um novo usuário
- `POST /produtos/adicionar` - Adiciona um novo produto
- `PUT /api/users/:id` - Atualiza um usuário pelo ID

## Contribuições
Se quiser contribuir com melhorias, fique à vontade para abrir um pull request!

## Autor
Desenvolvido por **Davi Garcia Castro Alves**.

