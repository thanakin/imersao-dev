// Variaveis 

var paulo = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var rafa = {
    nome: "Rafa",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var jogadores = [rafa, paulo]

// Funcoes

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

function exibirJogadoresNaTela(jogadores){
    var html = ''
    for (var i = 0; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelasJogadores = document.getElementById("tabelaJogadores")
    tabelasJogadores.innerHTML = html
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    rafa.empates++
    paulo.empates++
    rafa.pontos = calculaPontos(jogadores[0])
    paulo.pontos = calculaPontos(jogadores[1])
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}

// Execucao

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)

exibirJogadoresNaTela(jogadores)
