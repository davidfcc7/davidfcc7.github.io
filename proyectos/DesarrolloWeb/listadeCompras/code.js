var acordeon = document.getElementsByClassName("acordion")
/* NOMBRAR LA CLASE DE ACORDION EN UNA VARIABLE PARA LUEGO UTILIZARLA */
var contador

for (contador = 0; contador < acordeon.length; contador++) {
    /* recorrer la longitud de acordeon y sumarle un paso esto se guarda en la variable de acordeon */
    acordeon[contador].addEventListener("click", function(){
        this.classList.toggle("active")
        /* this se utiliza para asignar un objeto, classList.toggle para acceder a la lista de un arreglo y buscar si esta existe, si no existe añade la clase active */
        var panel= this.nextElementSibling
        /* la propiedad nextElementSibling se utiliza para obtener el elemento que sigure inmediatamente al elemento que se especifique y lo guarda en la variable panel */
        if (panel.style.display === "block"){
        /* si la propiedad display que esta en los estilos del panes es exactamente igual a block... */
            panel.style.display = "none"
            /* si, si se cumple cambia la propiedad de block en un none esto oculta todo lo que haya en esa propiedad */
        }else{
            panel.style.display = "block"
            /* si no se cumple deja la propiedad como está */
        }
    })
}