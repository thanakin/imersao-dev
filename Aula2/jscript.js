function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

var opcao = random(1,5);

if (opcao == 1){
    descricao = 'Fabricante europeia com sede em Tolouse, França.';
    img = './Airbus.jpg'
} else if (opcao == 2) {
    descricao = 'Fabricante norteamericana com sede em Seattle, Washington.';
    img = './Boeing.jpg'
} else if (opcao == 3) {
    descricao = 'Fabricante BRASILEIRA com sede em São José dos Campos - SP.';
    img = './Embraer.jpg'
}else if (opcao == 4){
    descricao = 'Fabricante ucraniana com sede em Kiev, Ucrania.';
    img = './Antonov.jpg'
} else {
    img = './ceu.jpg'
}

var oi = '1 - Airbus, 2 - Boeing, 3 - Embraer, 4 - Antonov';

var primeiroValor = parseInt(prompt(descricao + "\n" + oi))

if ( primeiroValor == opcao){
    document.write("<h1>Acertou!<h1>")
    document.body.style.backgroundImage = "url("+img+")";  
} else {
    document.write("<h1>Errou...<h1>")
    document.body.style.backgroundImage = "url("+img+")";  
}

console.log(opcao)
console.log(descricao)