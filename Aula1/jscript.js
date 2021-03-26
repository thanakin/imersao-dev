var celsius = prompt("Informe a temperatura em ºC: ")

if (celsius === ''){
    alert('Informe um valor para realizar o calculo')
} else {
    celsius = parseFloat(celsius)
    var fahrenheit = (celsius * 9/5) + 32
    alert(fahrenheit + '° F')
}