
let nome = document.getElementById('nome');
let sobrenome = document.getElementById('sobrenome')
const botao = document.getElementById('btn');

function alerta(){
    alert('ola '+nome.value+" "+sobrenome.value);
}
botao.onclick =alerta;
