var listFilmes = [
    "Star Wars", 
    "Toy Story", 
    "Interestellar", 
    "Esqueceram de mim", 
    "Os Vingadores", 
    "Godzilla vs. Kong"
]

var listPoster = [
    "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg"
]

var listLink = [
    "https://www.imdb.com/title/tt0076759/",
    "https://www.imdb.com/title/tt0114709/",
    "https://www.imdb.com/title/tt0816692/",
    "https://www.imdb.com/title/tt0099785",
    "https://www.imdb.com/title/tt0848228/",
    "https://www.imdb.com/title/tt5034838/"
]

for (var i = 0; i < 6; i++){
    document.write("<a href=" + listLink[i] + " target='_blank'>")
    document.write("<img src=" + listPoster[i] + " title='" + listFilmes[i] + "'></a> &nbsp;")
}
 
 
