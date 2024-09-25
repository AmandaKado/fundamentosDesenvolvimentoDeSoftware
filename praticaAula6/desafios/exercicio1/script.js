const botao = document.getElementById('botao');

function mouseCima(){
    botao.style.backgroundColor = 'blue';
}

function mouseLonge() {
    botao.style.backgroundColor = 'green';
}

function clicou() {
    botao.style.backgroundColor = 'red';
    botao.textContent = 'Quebrei!!';

    botao.removeEventListener('click', clicou);
    botao.removeEventListener('mouseout', mouseLonge);
    botao.removeEventListener('mouseover', mouseCima);
}

botao.addEventListener('click', clicou);

botao.addEventListener("mouseout", mouseLonge);

botao.addEventListener("mouseover", mouseCima);