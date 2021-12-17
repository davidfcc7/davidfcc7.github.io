

    /* VARIABLES DE ENTRADA */
    let gravedadTierra = 9.8;
    let gravedadMarte = 3.7;
    let gravedadJupiter = 24.8;
    let peso = parseInt(prompt("¿Cuanto pesas en Kilogramos?"))
    let planeta = parseInt(prompt("¿Que planeta deseas elegir: 1. Marte o 2. Jupiter"))

    /* VARIABLES DE SALIDA */

    let pesoMarte;
    let pesoJupiter;

    

    if (planeta === 1) {
        pesoMarte = (peso * gravedadMarte) / gravedadTierra;
        alert("Mi peso en Marte es: <strong>" + pesoMarte.toFixed(2) + "kg</strong><br>")
    }
    if (planeta === 2) {
        pesoJupiter = (peso * gravedadJupiter) / gravedadTierra;
        alert("Mi peso en Jupiter es: <strong>" + pesoJupiter.toFixed(2) + "kg</strong>")
    }
    if (planeta != 1 && planeta != 2) {
        alert("ESTA OPCION NO EXISTE!!!!")
    }

