/*
H = Hearts - "corazones"
D = Diamonds - "diamantes"
S = Spades - "Espadas"
C = Clubs - "Treboles"
*/

let deck = [];
let tipos = ["H", "D", "S", "C"];
let especiales =["A", "J", "Q", "K"];

let puntosJugador = 0,
    puntosComputadora = 0;

/*----Referencias HTML----*/
const btnNuevo = document.querySelector("#btn-nuevo");
const btnPedir = document.querySelector("#btn-pedir");
const btnDetener = document.querySelector("#btn-detener");
let contadorJugador = document.querySelectorAll("small")[0];
let contadorComputadora = document.querySelectorAll("small")[1];
const jugadorCartas = document.querySelector("#jugador-cartas");
const computadoraCartas = document.querySelector("#computadora-cartas");

/*----Esta funcion crea un nuevo Deck----*/
const crearDeck = () =>{
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);//"_.shuffle" es una funcion de la libreria UNDERSCORE.JS que toma un arreglo y lo regresa en un nuevo arreglo de forma aleatoria
    //console.log(deck);

    return deck;
}

crearDeck();

/*----Esta funcion te da una carta----*/

const pedirCarta = () =>{
    if(deck.length === 0){
        throw "No hay cartas en la baraja";
    }

    const carta = deck.pop();
    console.log(carta);
    //console.log(deck);
    return carta;

}

/*----Dar valor a carta----*/

const valorCarta = (carta) =>{
    const valor = carta.substring(0, carta.length -1);
    return (isNaN(valor)) ?
    (valor === "A") ? 11 :10//Segunda condicion ternaria
    : valor * 1;

}

/*----Eventos----*/

/*----turno computadora----*/

const turnoComputadora = (puntosMinimos) =>{

    do{

    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    contadorComputadora.innerText = puntosComputadora;
    

    const getCarta = document.createElement("img");
    getCarta.src = `./assets/cartas/${carta}.png`;
    getCarta.classList.add("carta");

    computadoraCartas.append(getCarta);

    if(puntosMinimos < 21){
        break;
    }

    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert("Nadie Gana");
        }else if(puntosMinimos > 21){
            alert("Computadora Gana");
        }else if(puntosComputadora > 21){
            alert("Jugador Gana");
        }else{
            alert("Computadora Gana");
        }
    }, 500);
}

/*----Pedir Carta----*/
btnPedir.addEventListener("click", () =>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    contadorJugador.innerText = puntosJugador;

    const getCarta = document.createElement("img");
    getCarta.src = `./assets/cartas/${carta}.png`;
    getCarta.classList.add("carta");

    jugadorCartas.append(getCarta);

    if(puntosJugador === 21){
        setTimeout(()=>{
            alert("21, Genial");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        },300);
    }else if(puntosJugador > 21){
            setTimeout(()=>{
                alert("Perdiste el juego");
                btnPedir.disabled = true;
                btnDetener.disabled = true;
                turnoComputadora(puntosJugador);
            },300);
    }

});

btnDetener.addEventListener("click",() =>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener("click", () =>{
    deck = [];
    crearDeck();
    puntosComputadora = 0;
    puntosJugador = 0;
    contadorComputadora.innerText = 0;
    contadorJugador.innerText = 0;

    btnPedir.disabled = false;
    btnDetener.disabled = false;

    computadoraCartas.innerText = "";
    jugadorCartas.innerText = "";

});
