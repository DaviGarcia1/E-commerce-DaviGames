

function limpar(){
    let button = document.querySelector('.limpar');
    button.addEventListener('click', function(){
        let inputs = document.querySelectorAll('.divDireita-form input')
        for(let i = 0; i < inputs.length; i++){
            inputs[i].value = '';
        }
    })
}




    function login() { 
        let buttonLogin = document.querySelector('#buttonLogin'); 
        if (buttonLogin) { 
            buttonLogin.addEventListener('click', function() { 
                window.location.href = 'http://localhost:3000/login'; }); 
            } 
        } 
    function Cad() { 
        let buttonCad = document.querySelector('#buttonCad');
        if (buttonCad) { 
            buttonCad.addEventListener('click', function() { 
                window.location.href = 'http://localhost:3000/cad'; });

            } } 
        
    


//Evitando de o telefone ter mais números do que pode.
function avisoCaracteres() {
    let telefoneInput = document.querySelector('#telefone');
    let telefone = telefoneInput.value;

    if (telefone.length > 15) {
        
        let mensagemExistente = document.querySelector('.aviso-telefone');
        if (!mensagemExistente) {
            let p = document.createElement('p');
            p.textContent = 'Você está inserindo mais números que um telefone pode suportar. Faça novamente.';
            p.style.color = 'red';
            p.classList.add('aviso-telefone'); 

            telefoneInput.parentElement.appendChild(p);

            setTimeout(function () {
                p.remove();
            }, 4000);
        }

        telefoneInput.value = '';
    }
}




function usuario() {
    
    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(users => {
        console.log(users)
        let formEnviar = document.querySelector('.form')
        formEnviar.addEventListener('submit', (e) => {
        e.preventDefault()
        let inputSenha = document.querySelector('#senha').value
        let inputEmail = document.querySelector('#email').value
        
        let usuarioLogado = users.find((user) => {
           return user.email === inputEmail && user.senha === inputSenha
        });

        if(usuarioLogado){
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
            window.location.href = 'http://localhost:3000'
        }else {
            alert(`Email ou senhas incorretas:v`)
        }

            
        
        })
    }).catch((err) => console.error('Erro ao buscar usuários: ', err))
  }
  

  document.addEventListener('DOMContentLoaded', function () {
    limpar() 
    usuario() 
    login() 
    Cad() 
    avisoCaracteres()
});