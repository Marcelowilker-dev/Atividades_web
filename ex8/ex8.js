const num = document.getElementById('num')
const resultado = document.getElementById('resultado')
const dinheiro = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01]

function contar() {
    let numero = num.value 
    resultado.innerHTML = ''

    for (let valor of dinheiro) {
        const cont = parseInt(numero / valor)
        numero = parseFloat(numero % valor).toFixed(2)

        if (cont > 0) {
            resultado.innerHTML += `${cont} dinheiro de R$ ${valor} <br>`
        }
    }
}