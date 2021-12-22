var pantalla = document.getElementById("dibujoCanvas");
var lienzo = pantalla.getContext("2d");
dibujarCasa("blue",150,10,50,50)/* TECHO IZQUIERDO */
dibujarCasa("black",150,10,250,50)/* TECHO DERECHO */
dibujarCasa("orange",50,50,250,50)/* BASE TECHO */
dibujarCasa("gray",50,50,50,110)/* PARED IZQUIERDA */
dibujarCasa("green",250,50,250,110)/* PARED DERECHA */
dibujarCasa("yellow",250,110,50,110)/* BASE PAREDES */
dibujarCasa("brown",200,110,200,80)/* PUERTA */
dibujarCasa("red",100,110,100,80)
dibujarCasa("violet",200,80,100,80)
dibujarCasa("purple",150,110,150,80)
function dibujarCasa(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xinicial, yinicial)
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke()
    lienzo.closePath()
}