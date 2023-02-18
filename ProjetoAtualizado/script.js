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
