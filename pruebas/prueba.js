/* ¿Qué es una variable y para qué sirve? */
/* Una variable es un espacio en memoria y sirve para guardar informacion que ser[a utilizada mas adelante en alguna funcion */

/* ¿Cuál es la diferencia entre declarar e inicializar una variable? */
/* Declarar una variable es darle un nombre e inicializarla es darle un valor */

/* ¿Cuál es la diferencia entre sumar números y concatenar strings? */
/* suma de numeros 2+2 y para sumar strings "2"+"2" lo quie hace a un dato estrig son las comillas y el signo mas sirve para concatenar */

/* ¿Cuál operador me permite sumar o concatenar? */
/* El operador de + */

/* Nombre "string"
Apellido "string"
Nombre de usuario en Platzi "string"
Edad "number"
Correo electrónico "string"
Mayor de edad "boolean"
Dinero ahorrado "number"
Deudas "number" */

var estudiante = {
    "Nombre": "David",
    "Apellido": "Caicedo",
    "NombreUsuarioPlatzi": "davidfelipecaicedo93",
    "Edad": 30,
    "CorreoElectronico": "davidfelipecaicedo93@gmail.com",
    "MayorEdad": true,
    "DineroAhorrado": 3000000,
    "Deudas": 800000,
    nombreCompleto: function(){
        console.log(`Mi nombre completo es: ${this.Nombre} ${this.Apellido}`);
    },
    dineroReal: function(DineroAhorrado, Deudas){
        var total = DineroAhorrado - Deudas
        console.log(`Mi dinero ahorrado es: ${total}`);
    }
}

estudiante.nombreCompleto();
estudiante.dineroReal(estudiante.DineroAhorrado, estudiante.Deudas);

/* ¿Qué es una función? */
/* Una funcion es un conjunto de pasos para realizar una accion */

/* ¿Cuándo me sirve usar una función en mi código? */
/* Cuando se requiere encapsular el codigo y reutilizarlo en varias partes del programa */

/* ¿Cuál es la diferencia entre parámetros y argumentos de una función? */
/* Los parametros son valores de entrada para usar dentro de la funcion mientras que los atributos son datos que se colocan a la funcion para saber cual es su funcion */

function persona (name, lastname, nickname){
    nombreCompleto = name + " " + lastname;
    console.log("Mi nombre es " + nombreCompleto + ", pero prefiero que me digas " + nickname + ".");
}

persona("David Felipe", "Caicedo", "pipe");

/* ¿Qué es un condicional? */
/* Es una estructura de control que permite ejecutar codigo mediante una funcion */

/* ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias? */
/* Existen dos, if y switch la diferencia es que if puede evaluar una condicion a la vez y switch varias */

/* ¿Puedo combinar funciones y condicionales? */
/* si */

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

const planesPlatzi = {
    free: "Solo puedo tomar los cursos gratis",
    Expert: "Puedo tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Yo y alguien más podemos tomar TODOS los cursos de Platzi durante un año",     
    Basic: "Puedo tomar casi todos los cursos de Platzi durante un mes" 
}

for(const plan in planesPlatzi){ 
    var Basic = "Basic";
    if(plan == Basic){
        console.log(`Mi plan es: ${Basic} y ${planesPlatzi[plan]}`);
    } 
}

/* ¿Qué es un ciclo? */
/* Es una forma de realizar tareas repetitivas */

/* ¿Qué tipos de ciclos existen en JavaScript? */
/* For, While */

/* ¿Qué es un ciclo infinito y por qué es un problema? */
/* Es un ciclo sin fin, que no tiene forma de retornar un resultado, es un problema por que no permite la finalizacion del codigo y no permite realizar las siguientes tareas */

/* ¿Puedo mezclar ciclos y condicionales? */
/* Si */

/* Replica el comportamiento de los siguientes ciclos for utilizando ciclos while: */

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

var i = 0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

var i = 10;
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}

/* Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. */

var usuario = prompt("Cuanto es 2 + 2 ?").valueOf();
var usuarioNum = parseInt(usuario);

while(true){
    if(usuarioNum == 4){
        alert("Fantastico! respuesta correcta");
        break;
    } else {
        usuario = prompt("Respuesta incorrecta, inténtalo de nuevo. Cuanto es 2 + 2 ?");
        usuarioNum = parseInt(usuario);
    }
}

/* ¿Qué es un array? */
/* Un arreglo es un conjunto de elementos del mismo tipo */

/* ¿Qué es un objeto? */
/* Es un conjunto de atributos asignados a un solo elemento */

/* ¿Cuándo es mejor usar objetos o arrays? */
/* los objetos son utilizados cuando se desea utilizar un sistema similar a una base de datos ya que se puede llamar una clave que a su vez trae un valor, miestras que los arreglos
se llaman segun la posicion del elemento */

/* ¿Puedo mezclar arrays con objetos o incluso objetos con arrays? */
/* si */

/* Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */
/* Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). */
/* Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */
