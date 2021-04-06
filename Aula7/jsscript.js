var cartaPaulo = {
    nome:"Seiya de Pegaso",
    imagem: "./seiya.png",
    atributos:{
        ataque:80,
        defesa:60,
        magia:90
    }
}

var cartaRafa = {
    nome:"Bulbasaur",
    imagem: "./bulbasaur.png",
    atributos:{
        ataque:70,
        defesa:65,
        magia:85
    }
}

var cartaGui = {
    nome:"Lord Darth Vader",
    imagem: "./vader.png",
    atributos:{
        ataque:82,
        defesa:62,
        magia:90
    }
}

var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]
    //console.log(cartaMaquina)

    var numeroCartajogador = parseInt(Math.random() * 3)
    while ( numeroCartajogador == numeroCartaMaquina){
        numeroCartajogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartajogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
}

function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var imagem = document.getElementById('imagem')
    var opcoesTexto = ''
    for (var atributo in cartaJogador.atributos){
        //console.log(atributo)
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
    imagem.innerHTML = "<img src='"+cartaJogador.imagem+"' width='300'>"
}

function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            //console.log(radioAtributo[i].value)
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    //console.log(atributoSelecionado)
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        alert('vc venceu a máquina!!')
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        alert('Perdeu: a carta da  máquina é maior')
    } else {
        alert('Temos um empate!')
    }
    console.log(cartaMaquina)
}
