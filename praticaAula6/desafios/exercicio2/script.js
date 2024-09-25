const soma = document.getElementById('soma');
const selecao = document.querySelector('select');
const subtracao = document.getElementById('subtracao');
const divisao = document.getElementById('divisao');
const multiplicacao = document.getElementById('multiplicacao');
const calcular = document.getElementById('calcular');

let primeiroNumero = document.getElementById('numero1');
let segundoNumero = document.getElementById('numero2');
let resultado = document.getElementById('resultado');

calcular.addEventListener("click", calculo());

function somando() {
    resultado = parseInt(primeiroNumero) + parseInt(segundoNumero);
    div.innerHTML = resultado;
}



function calculo() {
    if(selecao.soma) {
        somando();
    } else if(subtracao) {
        subtraindo();
    } else if(multiplicacao) {
        multiplicando();
    } else {
        dividindo();
    }
}
