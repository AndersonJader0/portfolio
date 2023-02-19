var imgAtual = "/ProjetoAtualizado/images/racsales-pq.png"
var imgAnterior = "/ProjetoAtualizado/images/racsales.png"


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

const elemento = document.querySelector("#text1");
const texto = "Um desenvolvedor apaixonado por solucionar problemas voltados a web.";
const intervalo = 100;

function showText(elemento, texto, intervalo){

    const char = texto.split("").reverse();

    const typer = setInterval(() => {
        if(!char.length) {
            return clearIntervalo(typer);
        }

        const next = char.pop();

        elemento.innerHTML += next;

    }, intervalo);
}

showText(elemento, texto, intervalo);

const elemento2 = document.querySelector("#text2");
const texto2 = "Em busca de uma oportunidade de estágio.";
var intervalo2 = 100;

function showText2(elemento2, texto2, intervalo2){

    const char = texto2.split("").reverse();

    const typer = setInterval(() => {
        
        if(!char.length) {
            return clearIntervalo(typer);
        }

        const next = char.pop();

        elemento2.innerHTML += next;

    }, intervalo2);
}

showText2(elemento2, texto2, intervalo2);
