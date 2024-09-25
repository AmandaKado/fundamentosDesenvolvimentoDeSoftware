const campo1 = document.querySelector('#numero1');
const campo2 = document.querySelector('#numero2');
let resposta = document.querySelector('.resultado');
const seletor = document.querySelector('#operador');
const botao = document.querySelector('.calcular');

botao.addEventListener("click", calculo);

function calculo() {
    if (campo1.value === '' || campo2.value === ''){
        resposta.classList.add("problema");
        resposta.innerHTML="Campo vazio";
        setTimeout(() => {
            resposta.classList.remove("problema");
            resposta.innerHTML="";
        }, 3000);
    }
    else  {    
        const valor1 = parseInt(campo1.value);
        const valor2 = parseInt(campo2.value);
        const operacao = seletor.value;

        if(operacao === "soma") {
            resposta.innerHTML = valor1 + valor2;
            } else if (operacao === "subtracao") {
                resposta.innerHTML = valor1 - valor2;
            } else if (operacao === "divisao") {
                resposta.innerHTML = valor1 / valor2;
            } else {
                resposta.innerHTML = valor1 * valor2;
        }
        }
}
