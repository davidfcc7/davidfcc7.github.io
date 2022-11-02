var piedra=0,papel=1,tijera=2;
var min=0,max=2;
var random=Math.floor(Math.random()*(max-min+1)+min);

function juego (usuario, maquina){
    if ((usuario === 0)&&(maquina === 2)||(usuario === 1)&&(maquina === 0)||(usuario === 2)&&(maquina === 1)){
        console.log("gana usuario");
    }
    else if ((usuario === maquina)){
        console.log("Empate");
    }
    else{
        console.log("gana maquina");
    }
}
juego(1,random);

function juegoSwitch (usuario, maquina){
    //con true los casos van a suceder
    switch (true){
        case (usuario === 0)&&(maquina === 2):
            console.log("Usuario Gana");
            break;
        case (usuario === 1)&&(maquina === 0):
            console.log("Usuario Gana");
            break;
        case (usuario === 2)&&(maquina === 1):
            console.log("Usuario Gana");
            break;
        case (usuario === maquina):
            console.log("Empate");
            break;
            default:
                console.log("Gana Maquina");
    }
}

juegoSwitch(1,random);

