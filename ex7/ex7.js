function calcula(){
let n1= document.getElementById('num1');
let n2= document.getElementById('num2');

let operacoes = document.getElementById('operacoes');




let valor1 = Number(n1.value)
let valor2 = Number(n2.value)
let soma = valor1 +valor2;

let sub = valor1 - valor2;
let mult = valor1* valor2;
let div = valor1 / valor2
let pot = valor1 ** valor2;


    console.log(valor1)

    operacoes.innerHTML += (`<p>A soma : ${valor1} e ${valor2} é: ${soma}<\p>`)
    operacoes.innerHTML += (`<p> subtração : ${valor1} e ${valor2} é: ${sub}<\p>`)
    operacoes.innerHTML += (`<p> multiplicação : ${valor1} e ${valor2} é: ${mult}<\p>`)
    operacoes.innerHTML += (`<p> divisão : ${valor1} e ${valor2} é: ${div}<\p>`)
   operacoes.innerHTML += (`<p>${valor1} opetencia: ${valor2} resulta em: ${pot}<\p>`)
  
}

