function usuario() {
    let usuariosLogados = localStorage.getItem('usuarioLogado');
  
    if (usuariosLogados) {
        usuariosLogados = JSON.parse(usuariosLogados);
        let inputs = document.querySelectorAll('.input');
        inputs[0].value = usuariosLogados.nome;
        inputs[1].value = usuariosLogados.email;
        inputs[2].value = usuariosLogados.senha;
        inputs[3].value = usuariosLogados.telefone;
        inputs[4].value = usuariosLogados.timeFav;
        inputs[5].value = usuariosLogados.instagram;
        inputs[6].value = usuariosLogados.dataNascimento ? usuariosLogados.dataNascimento.split('T')[0] : '';
        console.log(usuariosLogados);
    } else {
        console.log("Usuário não encontrado no localStorage");
    }
}

usuario();

function alterarDados() {
    const alterBtn = document.querySelector('.alterBtn');
    alterBtn.addEventListener('click', () => {
        let newBtn = document.createElement('button');
        let btnLimpar = document.createElement('button');
        let divBtn = document.querySelector('.divBtn');
        let inputs = document.querySelectorAll('.input');

        inputs.forEach(x => {
            x.value = '';
            x.removeAttribute('readonly');
        });

        newBtn.classList.add('btn', 'salvar', 'btn-danger');
        newBtn.setAttribute('type', 'button');
        newBtn.innerHTML = 'Salvar';
        divBtn.appendChild(newBtn);

        btnLimpar.classList.add('btn', 'btn-danger', 'limpar');
        btnLimpar.setAttribute('type', 'button');
        btnLimpar.innerHTML = 'Limpar';
        divBtn.appendChild(btnLimpar);

        divBtn.removeChild(alterBtn);

        // Evento de Limpar
        btnLimpar.addEventListener('click', () => {
            inputs.forEach(x => x.value = '');
        });

        // Evento de Salvar
        newBtn.addEventListener('click', () => {
            let nome = inputs[0].value;
            let email = inputs[1].value;
            let senha = inputs[2].value;
            let telefone = inputs[3].value;
            let timeFav = inputs[4].value;
            let instagram = inputs[5].value;
            let dataNascimento = inputs[6].value;

            let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
            if (usuarioLogado) {
                let id = usuarioLogado.id;
                atualizarUsuario(nome, email, senha, telefone, timeFav, instagram, dataNascimento, id);
            } else {
                console.error("Usuário não encontrado");
            }
        });
    });
}

alterarDados();

function atualizarUsuario(nome, email, senha, telefone, timeFav, instagram, dataNascimento, id) {
    const dadosUsuario = {
        nome,
        email,
        senha,
        telefone,
        timeFav,
        instagram,
        dataNascimento
    };

    fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosUsuario)
    })
    .then(res => res.json())
    .then(result => {
        console.log('Usuário atualizado com sucesso:', result);
        window.location.href = 'http://localhost:3000/user';
        localStorage.setItem('usuarioLogado', JSON.stringify(dadosUsuario));
    })
    .catch(error => {
        console.error('Erro ao atualizar o usuário:', error);
    });
}