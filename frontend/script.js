const tela_cadastro = document.getElementById('cadastro');
const tela_login = document.getElementById('login');

function cadastro() {
    const form_c = document.getElementById('formCadastro');
    form_c.addEventListener('submit', (eve) => {
        eve.preventDefault();
    
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const confirm_sen = document.getElementById('confirmar_senha');

    if (!email.include("@")){
        alert("Email inválido")
        return;

    } else if (senha.length > 8){
        alert("A senha precisa de no mínimo 8 caracteres")
        return;
    }
    })
    
}
function login(){
    const form_l = document.getElementById('formLogin');
    form_l.addEventListener('submit', (ev) => {
        ev.preventDefault();
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    })
}