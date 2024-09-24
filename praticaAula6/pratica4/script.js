let paragrafo = document.querySelector("#para1");

paragrafo.addEventListener("mouseover", verde);
paragrafo.addEventListener("mouseout", vermelho);

function verde() {
    paragrafo.style.background="green";
}

function vermelho() {
    paragrafo.style.background="red";
}