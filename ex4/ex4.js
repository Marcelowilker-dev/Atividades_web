
let nome = document.getElementById('nome');
const botao = document.getElementById('btn');

function alerta(){
    alert('ola '+nome.value);
}
botao.onclick =alerta;