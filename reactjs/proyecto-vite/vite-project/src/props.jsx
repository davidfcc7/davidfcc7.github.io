import PropTypes from "prop-types";



const ComponentFruts = (props) => {
    // eslint-disable-next-line react/prop-types
    return <li>{props.frutas}</li>;
}






// eslint-disable-next-line react/prop-types
const EstadoUsuario = ({user}) => 
    (user ? <h3>Online</h3> :  <h3>Offline</h3>);








/* export default EstadoUsuario; */

//* los props se utilizan para pasar varios valores por un mismo componente
//* la propiedad props refiere a un objeto por ende podemos usar sus propiedades internas de objeto
const TextDinamic = ({text}) =>{
    const styleText = "text-center color-text f-size-48 p-24" ;
    const styleFont = {
        text: "text-center", 
        color: "green",  
        font: "f-size-24-important",
        padding: "p-24"
    };
    const modifyFont = `${styleText} ${styleFont.font} ${styleFont.color}`;

    
    return <p className={modifyFont}>{text}</p>
}

//* indica que los PropTypes son obligatorios para que la funcionalidad sea efectiva, el usuario debe llenar obligaroriamente las propiedades de text en el componente invocado se puede usar mas de un pop por componente pero si sedeclara debe ser obligatorio que se llame en el componente invocado

TextDinamic.propTypes = {
    text: PropTypes.string.isRequired,
}








const App = () => {
    const frutas = ["🍇","🍌","🍒"]
    const usuario = false;
    return(
    // para retornar varias etiquetas siempre deben estar dentro de un contenedor y dentro de parentesis el contenedor
        <>
            <section>
                <h2>Uso de props en una lista de componentes</h2>
                <ul>
                    {/* los corchetes declaran que se va a realizar una expresion */}
                    {/* el index se pasa como parametro de la funcion para indicas la posicion en la que se encuentra la posicion 
                    del arreglo */}
                    {
                        frutas.map((frutas, index)=>(
                            <ComponentFruts key={index} frutas={frutas}/>
                        ))
                    }
                </ul>
            </section>
            <section>
                <h2>Uso de props para cambiar el estado de un usuario</h2>
                {/* las llabes indican que se va a realizar una condicion IF */}
                {/* 1. se coloca la sentencia interna del if seguido del signo ? que hace referencia a si es verdadero, se
                deja un mensaje en caso de ser verdadero y si no se pone : que hace referencia al else seguido del mensaje de 
                falso */}
                {/* Si utilizo && puedo hacer un if con solo la respuesta en true sin necesidad de usar el else */}
                {
                    <EstadoUsuario user={usuario}/>
                }
            </section>
            <section>
                <h2>Uso de props para dar un valor dinamico a varios componentes</h2>
                <TextDinamic text="Texto 1" />
                <TextDinamic text="Texto 2" />
                <TextDinamic text="Texto 3" />
                <TextDinamic text="Texto 4" />
                <TextDinamic text="Texto 5" />
            </section>
        </>
        );
};

export default App; //Se utiliza para exportar una sola funcion por archivo