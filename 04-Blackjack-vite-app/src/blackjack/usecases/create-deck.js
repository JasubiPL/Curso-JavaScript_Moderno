// Esta función crea un nuevo deck
import _ from 'underscore';

//export const miNombre = "JasubiP";

/**
 * Esto crea un nuevo deck
 * @param {Array<String>} tiposDeCartas Ejemplo ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Ejemplo ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck decartas
 */

 export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.length === 0) throw new Error("TipoDeCartas es obligatorio como un arreglo de strings");

    let deck = [];
 
     for( let i = 2; i <= 10; i++ ) {
         for( let tipo of tiposDeCartas ) {
             deck.push( i + tipo);
         }
     }
 
     for( let tipo of tiposDeCartas ) {
         for( let esp of tiposEspeciales ) {
             deck.push( esp + tipo);
         }
     }
     // console.log( deck );
     deck = _.shuffle( deck );
     console.log( deck );
     return deck;
 }

 //export default crearDeck; una forma de exportacion unica