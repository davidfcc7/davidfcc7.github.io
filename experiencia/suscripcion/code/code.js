let textoEmail = document.getElementById("exampleInputEmail1")
let btn = document.getElementById("btn-guardar")
btnEmail = btn.addEventListener("click", eventoGuardar)

let guardarDatos = [i]

//for que guarde los valores en i

function eventoGuardar(){
    let guardar = textoEmail.value
    console.log(guardar)
}

eventoGuardar()