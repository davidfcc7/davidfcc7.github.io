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