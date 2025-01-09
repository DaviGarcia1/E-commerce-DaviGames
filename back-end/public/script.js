let numTotal = 0
let precoAtual = 0
function mostrarCarrinho() {
    let carrinhoDiv = document.getElementById('carrinho');
    const btnAplicativo = document.querySelector('#botaoAplicativo')
    const btnDesktop = document.querySelector('#botaoDesktop')

    
        btnDesktop.addEventListener('click', () => {
            // Alterna a visibilidade do carrinho
            if (carrinhoDiv.style.display === 'block') {
                carrinhoDiv.style.display = 'none';
            } else {
                carrinhoDiv.style.display = 'block';
            }
        });
        btnAplicativo.addEventListener('click', () => {
            // Alterna a visibilidade do carrinho
            if (carrinhoDiv.style.display === 'block') {
                carrinhoDiv.style.display = 'none';
            } else {
                carrinhoDiv.style.display = 'block';
            }
        });
    }
    
    
function fecharCarrinho() {
        let carrinhoDiv = document.getElementById('carrinho');
        carrinhoDiv.style.display = 'none';
    }
    


// Função para adicionar itens ao carrinho
function adicionarItens(botao) {
  let divEscolhida = botao.parentElement;
  let nome = divEscolhida.querySelector('.nomeCard').textContent;
  let preco = divEscolhida.querySelector('.precoCard').textContent;
  let ul = document.getElementById('itens-carrinho');
  let precoNumerico = Number(preco.replace('R$', '').trim());

  // Obter o carrinho atual do localStorage (ou criar um novo se vazio)
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  if (numTotal < 10) {
    numTotal++; // Incrementa o número de itens

    // Adicionar o novo item ao carrinho
    carrinho.push({ nome, preco: precoNumerico });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Criar um novo item no carrinho na interface
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `${nome} - R$${precoNumerico.toFixed(2)} <button type="button" class="btn btn-custom" onclick="removerItens(this)">Remover</button>`;
    ul.appendChild(li);

    // Notificação de sucesso
    notificacaoCompra();

    // Atualizar o valor total
    atualizarPreco(precoNumerico);

    // Remove a mensagem de erro se ela existir
    let mensagemErro = document.getElementById('mensagem-erro');
    if (mensagemErro) {
      mensagemErro.remove();
    }

  }
  else {
    // Verifica se a mensagem já foi adicionada
    if (!document.getElementById('mensagem-erro')) {
      let p = document.createElement('p');
      p.id = 'mensagem-erro';
      p.classList.add('mt-3', 'text-danger', 'position-absolute', 'bottom-0', 'start-50');
      p.innerHTML = 'Número máximo de itens para compra.';
      ul.appendChild(p);
    }
  }
}


// Função para atualizar o valor total
function atualizarPreco(preco) {
  let divResultado = document.querySelector('#itens-pagamentos');
  precoAtual += preco;
  divResultado.innerHTML = `Valor a ser pago: R$${precoAtual.toFixed(2)}`;
}

function removerItens(botao) {
  let liEscolhido = botao.parentElement;

  // Extrair o nome e o preço do item
  let texto = liEscolhido.textContent.replace('Remover', '').trim(); // Remove o texto do botão
  let [nome, preco] = texto.split(' - ');
  
  preco = preco.replace('R$', '').trim();
  let precoNumerico = parseFloat(preco);

  if (isNaN(precoNumerico)) {
    console.error('Erro: preço inválido ao remover item do carrinho.');
    return;
  }

  // Atualiza o carrinho no localStorage
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho = carrinho.filter(item => !(item.nome === nome && item.preco === precoNumerico));
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Remove o item da interface
  liEscolhido.remove();

  // Atualiza o valor total
  atualizarPreco(-precoNumerico);

  // Decrementa o número total de itens
  numTotal--;

  // Remove a mensagem de erro se o número de itens for menor que o máximo
  if (numTotal < 10) {
    let mensagemErro = document.getElementById('mensagem-erro');
    if (mensagemErro) {
      mensagemErro.remove();
    }
  }
}

// Função para restaurar o carrinho ao carregar a página
function restaurarCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let ul = document.getElementById('itens-carrinho');
  precoAtual = 0; // Reinicia o valor total

  // Recriar os itens na interface
  carrinho.forEach(item => {
      let li = document.createElement('li');
      li.innerHTML = `${item.nome} - R$${item.preco.toFixed(2)} <button type="button" onclick="removerItens(this)">Remover</button>`;
      ul.appendChild(li);
      precoAtual += item.preco; // Atualiza o valor total
  });

  // Atualizar o valor total na interface
  atualizarPreco(0); // Apenas atualiza o valor exibido
}



function notificacaoCompra() {
    let notificacaoDiv = document.createElement('div');
    notificacaoDiv.setAttribute('class', 'notificacao-div');
    notificacaoDiv.textContent = 'Item adicionado ao carrinho!';
    document.body.appendChild(notificacaoDiv);

    // Exibir notificação
    setTimeout(() => {
        notificacaoDiv.classList.add('ativo');
    }, 100);
    
    // Remover notificação após 3 segundos
    setTimeout(() => {
        notificacaoDiv.classList.remove('ativo');
        setTimeout(() => notificacaoDiv.remove(), 500);
    }, 3000);
}

function acessarCompras() {
    const btnCompras = document.querySelector('#acessarCatalogo');
    const main = document.querySelector('.itens');
    const divAcesso = document.querySelector('.divAcesso')
    const p = document.createElement('p')
    divAcesso.appendChild(p)
    let contador = 0; 
    btnCompras.addEventListener('click', () => {
      if (contador === 0) {
        main.classList.remove('d-none'); 
        contador = 1; 
        btnCompras.innerHTML = 'Fechar Catálogo';
        p.innerHTML = 'Clique em uma categoria do catálogo abaixo:'
        p.classList.add('container' ,'bg-danger', 'mt-5')
        } else {
          main.classList.add('d-none'); 
          contador = 0; 
          btnCompras.innerHTML = 'Acessar Catálogo';
          p.innerHTML = '';
        }
    });
}

function mostrarUsuários(){
    let usuariosLogados = localStorage.getItem('usuarioLogado');
  
    if(usuariosLogados){
      usuariosLogados = JSON.parse(usuariosLogados)
  
      let p = document.createElement('p');
      let div = document.querySelector('.boasVindas')
      p.innerHTML = `Seja bem vindo! <br> ${usuariosLogados.nome} <br> <button id="logout" class="bg-transparent text-custom">Logout</button>`
      p.style.textAlign = 'center'
      div.appendChild(p)
      console.log(usuariosLogados)
    }else {
      alert('Precisa ter um login para entrar!')
      window.location.href = 'http://localhost:3000/login'
    }
  }
  
  
  
  function logoutUsuarios(){
    let buttonLogout = document.querySelector('#logout')
    buttonLogout.addEventListener('click', () => {
      let div = document.querySelector('.boasVindas')
      div.innerHTML = '' 
      localStorage.removeItem('usuarioLogado'); 
      alert('Logout realizado com sucesso!');
      window.location.href = 'http://localhost:3000/login'
    })
  }

document.addEventListener('DOMContentLoaded', function () {
    mostrarCarrinho()
    acessarCompras();
    catálogo();
    mostrarUsuários();
    logoutUsuarios();
    restaurarCarrinho();
});



function catálogo() {
    fetch('http://localhost:3000/produtos')
      .then(res => res.json())
      .then(produtos => {
        console.log(produtos);
  
        // Variáveis
        const container = document.querySelector('.itens'); 
        let categorias = document.querySelectorAll('.li-main'); // Seleciona corretamente os links
  
        function limparProdutos() {
          const produtosDivs = container.querySelectorAll('.itens-div');
          produtosDivs.forEach(produtoDiv => produtoDiv.remove());
        }
        
        categorias.forEach((categoria, index) => {
          categoria.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão do link
            limparProdutos();
            
            const section = document.createElement('section')
            section.classList.add('itens-div', 'container-fluid',  'row' ,  'mt-3');
            container.appendChild(section)
            const categoriaId = index + 1; // Mapeia as categorias para os IDs
            produtos.filter(prod => prod.categoria_id === categoriaId)
              .forEach(prod => {
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('col-4', 'm-3', 'border-danger', 'border-3', 'border', 'card', 'bg-custom', 'd-flex', 'justify-content-center','align-itens-center', 'flex-column');
                produtoDiv.style.width = '18rem'
                produtoDiv.style.height = '18rem'
                produtoDiv.style.overflow = 'hidden'
                produtoDiv.innerHTML = `
                <img src="${prod.imagem}" class="card-img-top" alt="${prod.nome}">
                <div class="card-body d-flex flex-column justify-content-center">
                  <h5 class="nomeCard card-title text-center text-white">${prod.nome}</h5>
                  <p class="precoCard card-text text-center text-white">${prod.preco}R$</p>
                  <button type="button" class="btn btn-danger" onclick="adicionarItens(this)">Comprar</button>
                </div>`
                section.appendChild(produtoDiv); 
              });
          });
        });
      }).catch(error => console.error('Erro ao carregar os produtos:', error));
  }

  
  