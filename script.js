var imgAtual = "/images/racsales-pq.png"
var imgAnterior = "/images/racsales.png"


function trocar(){
    document.getElementById("figura").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAtual = aux;
}

function destrocar(){
    document.getElementById("figura").src = imgAnterior;
    let aux = imgDepois
    imgDepois = imgAtual;
    imgAtual = aux;
}

var button = document.getElementById('readmore-button');

button.addEventListener('click', function() {

     var sobre = document.querySelector(".sobre");
     sobre.classList.toggle('active');

     if(sobre.classList.contains('active')) {
        return button.textContent = 'Ler menos';
     }
     button.textContent = 'Ler mais';
});

const elemento = document.querySelector("#text");
const texto = "Um desenvolvedor apaixonado por solucionar problemas voltados a web.";
const intervalo = 50;

function showText(elemento, texto, intervalo){

    const char = texto.split("").reverse();

    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        elemento.innerHTML += next;

    }, intervalo);
}

showText(elemento, texto, intervalo);