// 1 Criar o balao
// 2 Estourar o balao
// 3 Carregar o jogo
let total = 0;
let idBalao = 0;
let idBalaoRemover = 0;
let pontos = 1;
let parar = false;
let chances = 5;
let ativarPerdeu = false;
let clicarStart = false;

function criarBalao() {
    if (parar == false) {
        let balao = document.createElement("div");
        balao.setAttribute("class", "balao");
        balao.setAttribute("id", "" + idBalao);
        let x = Math.floor(Math.random() * 600);
        let y = Math.floor(Math.random() * 400);
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
            const excluirBalao = document.getElementById(idBalaoRemover++);
            excluirBalao.parentNode.removeChild(excluirBalao);
            chances--;
            erros.innerHTML = "Chances disponíveis: " + chances;
        }, 1550);
        idBalao++;
    }
}

function estourar(objeto) {
    document.body.removeChild(objeto);
    total++;
    let score = document.getElementById("total");
    score.innerHTML = "Balões estourados: " + total;
}

function perdeu() {
    if (ativarPerdeu == true) {
        chances--;
        let erros = document.getElementById("erros");
        erros.innerHTML = "Chances disponíveis: " + chances;
        pontos++;
        if (pontos == 5) {
            parar = true;
            window.location.reload();
            alert("Que pena, você perdeu :(  Balões estourados: " + total);
            erros.innerHTML = "Chances disponíveis: 3";
        }
    } else if (ativarPerdeu == false) {
        return false;
    }
}

function removerBalao() {
    setInterval(function loopDerrota() {
        for (let i = 0; i < 1; i++) {
            if (chances == 0) {
                window.location.reload();
                alert("Que pena, você perdeu :(  Balões estourados: " + total);
                break;
            }
        }
    }, 1);
}

function carregarJogo() {
    if (clicarStart == false) {
        parar = false;
        pontos = 1;
        chances = 5;
        totalBalao = 0;
        total = 0;
        ativarPerdeu = true;
        clicarStart = true;
        setInterval(criarBalao, 400);
        removerBalao();
    } else {
        return;
    }
}
