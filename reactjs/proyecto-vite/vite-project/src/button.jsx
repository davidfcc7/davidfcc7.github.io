/* import React from "react";
import PropTypes from "prop-types"; */


const MyButton = () =>{
    const title="Click Aquí Ahora";
    const classTitle2 = {

        text: "text-center", 
        color: "color-text",  
        font: "f-size-48",
        padding: "p-24"
    };
    return <button className={classTitle2.padding}>{title}</button>
}

const App = () => {
    return(
    // para retornar varias etiquetas siempre deben estar dentro de un contenedor y dentro de parentesis el contenedor
        <>
            <section className="container">
                <h2>Como crear y llamar un componente</h2>
                <MyButton/>
            </section>
            {/* las llabes indican que se va a realizar una condicion IF */}
            {/* 1. se coloca la sentencia interna del if seguido del signo ? que hace referencia a si es verdadero, se
            deja un mensaje en caso de ser verdadero y si no se pone : que hace referencia al else seguido del mensaje de 
            falso */}
            {/* Si utilizo && puedo hacer un if con solo la respuesta en true sin necesidad de usar el else */}
        </>
        );
};
export default App; //Se utiliza para exportar una sola funcion por archivo