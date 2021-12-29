var pantalla = document.getElementById("dibujoCanvas");
var lienzo = pantalla.getContext("2d");
var lineas = 30;
var l = 0; 

var color = "blue";
var yini, xfin;

while(l < lineas){
    yini = 10 * l
    xfin = 10 * (l+1)
    dibujarLineas (color, 0, yini, xfin, 300)
    l = l + 1
}

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xinicial, yinicial)
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke()
    lienzo.closePath()
}