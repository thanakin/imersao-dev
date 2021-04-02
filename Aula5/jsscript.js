function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    listarFilmesNaTela(filmeFavorito)
    /*if (filmeFavorito.endsWith('.jpg')) {
        listarFilmesNaTela(filmeFavorito)
    } else {
        alert('Imagem inválida')
    }*/
    campoFilmeFavorito.value = ''
}

function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#Listafilmes')
    //var elementoFilme = "<img src=" + filme + ">"
    var elementoFilme = filme

    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}