/* VARIABLES DE ENTRADA */
let gravedadTierra = 9.8;
let gravedadMarte = 3.7;
let gravedadJupiter = 24.8;
let peso = 94;

/* VARIABLES DE SALIDA */

let pesoMarte;
let pesoJupiter;
let nombre = prompt("¿Cómo te llamas?");

pesoMarte = (peso * gravedadTierra) / gravedadMarte;

pesoJupiter = (peso * gravedadTierra) / gravedadJupiter;

document.write("Mi peso en Marte es: <strong>" + pesoMarte.toFixed(2) + "kg </strong> y mi peso en Jupiter es: <strong>" + pesoJupiter.toFixed(2) + "kg </strong>");

document.write("mi nombre es: " + nombre)
