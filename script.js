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
var ativarPerdeu = false;

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
                "px; position: absolute; margin-left: 618px; border: 2px solid #FF0000;"
        );
        balao.setAttribute("onclick", "estourar(this)");
        document.body.appendChild(balao);
        setTimeout(function () {
            const excluirBalao = document.getElementById(totalBalao++);
            excluirBalao.parentNode.removeChild(excluirBalao);
            balaoSumiu++;
        }, 1550);
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
    if (ativarPerdeu == true) {
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
    } else if (ativarPerdeu == false) {
        return false;
    }
}

function removerBalao() {
    setInterval(function loopDerrota() {
        for (var i = 0; i < 1; i++) {
            if (balaoSumiu == 10) {
                window.location.reload();
                alert("Você perdeu");
                break;
            }
        }
    }, 1);
}

function carregarJogo() {
    parar = false;
    pontos = 1;
    chances = 3;
    totalBalao = 0;
    total = 0;
    ativarPerdeu = true;
    setInterval(criarBalao, 400);
    removerBalao();
}
