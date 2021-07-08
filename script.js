// 1 Criar o balao
// 2 Estourar o balao
// 3 Carregar o jogo
var total = 0;
var totalBalaoF = 0;
var totalBalao = 0;
var pontos = 1;
var parar = false;
var chances = 3;
var balaoSumiu = 0;

function criarBalao() {
    if (parar == false) {
        var balao = document.createElement("div");
        balao.setAttribute("class", "balao");
        balao.setAttribute("id", "" + totalBalaoF);
        var x = Math.floor(Math.random() * 600);
        var y = Math.floor(Math.random() * 400);
        balao.setAttribute(
            "style",
            "left:" +
                x +
                "px;top:" +
                y +
                "px; position: absolute; margin-left: 618px;"
        );
        balao.setAttribute("onclick", "estourar(this)");
        document.body.appendChild(balao);
        totalBalaoF++;
    }
}

function estourar(objeto) {
    document.body.removeChild(objeto);
    total++;
    var score = document.getElementById("total");
    score.innerHTML = "Balões estourados: " + total;
}

function perdeu(objeto) {
    console.log(objeto);
    chances--;
    erros = document.getElementById("erros");
    erros.innerHTML = "Chances disponíveis: " + chances;
    pontos++;
    if (pontos == 4) {
        parar = true;
        window.location.reload();
        alert("Você perdeu");
        erros.innerHTML = "Chances disponíveis: 3";
    }
}

function carregarJogo() {
    parar = false;
    pontos = 1;
    chances = 3;
    totalBalao = 0;
    total = 0;
    setInterval(criarBalao, 500);
    executarRemoverBalao();
}

function removerBalao() {
    if (parar == false) {
        const elem = document.getElementById(totalBalao++);
        elem.parentNode.removeChild(elem);
        balaoSumiu++;
    }
}

function executarRemoverBalao() {
    setInterval(function myloop() {
        for (var i = 0; i < 1; i++) {
            removerBalao();
            if (balaoSumiu == 10) {
                parar = true;
                window.location.reload();
                alert("Você perdeu");
                erros.innerHTML = "Chances disponíveis: 3";
                console.log(balaoSumiu);
                break;
            }
        }
    }, 800);
}
