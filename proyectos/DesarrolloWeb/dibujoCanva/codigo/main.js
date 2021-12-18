var pantalla = document.getElementById("dibujoCanvas");
var lienzo = pantalla.getContext("2d");

/* FUNCIONES PARA DIBUJAR SOBRE CANVAS */

lienzo.beginPath();

lienzo.strokeStyle = "blue";
/* TECHO IZQUIERDO */
lienzo.moveTo(150,10); /* X - Y */
lienzo.lineTo(50,50);
/* TECHO DERECHO */
lienzo.moveTo(150,10); /* X - Y */
lienzo.lineTo(250,50);
/* BASE TECHO */
lienzo.moveTo(50,50); /* X - Y */
lienzo.lineTo(250,50);
/* PARED IZQUIERDA */
lienzo.moveTo(50,50); /* X - Y */
lienzo.lineTo(50,110);
/* PARED DERECHA */
lienzo.moveTo(250,50); /* X - Y */
lienzo.lineTo(250,110);
/* BASE PAREDES */
lienzo.moveTo(250,110); /* X - Y */
lienzo.lineTo(50,110);
/* PUERTA */
lienzo.moveTo(200,110);
lienzo.lineTo(200,80);
lienzo.moveTo(100,110);
lienzo.lineTo(100,80);
lienzo.moveTo(200,80);
lienzo.lineTo(100,80);
lienzo.moveTo(150,110);
lienzo.lineTo(150,80);


lienzo.stroke();
lienzo.closePath();