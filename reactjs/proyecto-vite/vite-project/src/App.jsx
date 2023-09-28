/* import React from "react";  */
/* importacion nombrada y el nombre dentro de los corchetes se utiliza en el codigo de jsx*/

import './index.css'
import Btn from './button.jsx'
import Props from './props.jsx'



const App = () => {
    const title="Hola Soy React";
    const classTitle="text-center color-text f-size-48";
    const classTitle2={
        text: "text-center", 
        color: "color-text",  
        font: "f-size-48"}
    const img="https://picsum.photos/200/300"
    
    return(
    // para retornar varias etiquetas siempre deben estar dentro de un contenedor y dentro de parentesis el contenedor
        <>
            <section className="container">
                <h2>Como almacenar los datos en constantes y llamarlos dentro de las etiquetas</h2>
                <h1 className={classTitle}>{title}</h1> {/* //esto no es html si no xml desntro de 
                //javascript JSX */}
                <img src={img} alt={`imagen-${title}`} />
                {/* <MyButton/> */}
            </section>
            
            
            <section className="container">
                <h1 className={classTitle2.font}>Hola Soy React</h1> {/* //esto no es html si no xml desntro de 
                //javascript JSX */}
                <img src="https://picsum.photos/200/300" alt="imagen aleatoria" />
            </section>
            
            <section>
                <Btn />
            </section>
            <section>
                <Props />
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

