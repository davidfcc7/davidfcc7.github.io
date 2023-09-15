/* import React from "react";  */
/* importacion nombrada y el nombre dentro de los corchetes se utiliza en el codigo de jsx*/

const MyButton = () =>{
    const title="Click Aquí";
    const classTitle2 = {

        text: "text-center", 
        color: "color-text",  
        font: "f-size-48",
        padding: "p-24"
    };
    return <button className={classTitle2.padding}>{title}</button>
}
const Online = () =>{
    const text = "Online";
    const styles = "f-size-48 color-text text-center"
    return(
        <p className={styles}>{text}</p>
    )
}




const App = () => {
    const title="Hola Soy React";
    const classTitle="text-center color-text f-size-48";
    const classTitle2={
        text: "text-center", 
        color: "color-text",  
        font: "f-size-48"}
    const img="https://picsum.photos/200/300"
    const usuario = true;
    const frutas = ["🍇","🍌","🍒"]
    return(
    // para retornar varias etiquetas siempre deben estar dentro de un contenedor y dentro de parentesis el contenedor
        <>
            <section className="container">
                <h1 className={classTitle}>{title}</h1> {/* //esto no es html si no xml desntro de 
                //javascript JSX */}
                <img src={img} alt={`imagen-${title}`} />
                <MyButton/>
            </section>
            {/* las llabes indican que se va a realizar una condicion IF */}
            {/* 1. se coloca la sentencia interna del if seguido del signo ? que hace referencia a si es verdadero, se
            deja un mensaje en caso de ser verdadero y si no se pone : que hace referencia al else seguido del mensaje de 
            falso */}
            {/* Si utilizo && puedo hacer un if con solo la respuesta en true sin necesidad de usar el else */}
            {
                usuario ? <Online/> : "Offline"
            }
            
            <section className="container">
                <h1 className={classTitle2.font}>Hola Soy React</h1> {/* //esto no es html si no xml desntro de 
                //javascript JSX */}
                <img src="https://picsum.photos/200/300" alt="imagen aleatoria" />
            </section>
            <section>
                <ul>
                    {/* los corchetes declaran que se va a realizar una expresion */}
                    {/* el index se pasa como parametro de la funcion para indicas la posicion en la que se encuentra la posicion 
                    del arreglo */}
                    {
                        frutas.map((frutas, index)=>(
                            <li key={index}>{frutas}</li>
                        ))
                    }
                </ul>
            </section>
        </>
        );
};

export default App; //Se utiliza para exportar una sola funcion por archivo

//si utilizamos exportaciones nombradas, 
//se puede esportar mas de una funcion por archivo

/* export const App = () =>{
    return <h1>Hola soy una exportación nombrada</h1>
} */

/* si no se desea utilizar contenedores se pueden utilizar framents <Fragment> etiquetas </Fragment> y hay que importar la libreria 
de fragment(opcional)*/

