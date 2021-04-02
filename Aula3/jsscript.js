var numeroSecreto = parseInt(Math.random() * 20)
var tentativas = 5
var vidas = ['❤','❤','❤','❤','❤']

while(tentativas > 0){  
    var chute = parseInt(prompt("Digite um número entre 1 e 20:"))
    if ( numeroSecreto == chute) {
        console.log("Acertou... era " + numeroSecreto + "\n restaram " + vidas)
        alert("Acertou... era " + numeroSecreto + "\n restaram " + vidas)
        tentativas = 0
    } else if (chute > numeroSecreto) {
        vidas.pop()
        tentativas --
        console.log("O número secreto é menor que " + chute + "\n" + vidas)
        alert("O número secreto é menor que " + chute + "\n" + vidas)
    } else if (chute < numeroSecreto) {
        vidas.pop()
        tentativas --
        console.log("O número secreto é maior " + chute + "\n" + vidas)
        alert("O número secreto é maior " + chute + "\n" + vidas)
    } else {
        tentativas = 0
        console.log("Vc não digitou nada e o numero era " + numeroSecreto)
        alert("Vc não digitou nada e o numero era " + numeroSecreto)
    }
}
console.log("Fim de jogo")
alert("Fim de jogo")
