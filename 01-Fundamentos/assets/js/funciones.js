function saludar(nombre){
    console.log(arguments);//Imprime todos los parametros enviados a la funcion asi no sean usados
    console.log("Hola Mundo" + nombre);

    return [10, 20];//Asi se retornan 2 valores

    console.log("Este codigo no se ejecutara por que hay un return antes");
}

/*-const saludar = function(){//Buena practica
    console.log("Hola Mundo");
}-*/

const arrow = () =>{
    console.log("Funcion de flecha");
}
const arrow2 = (nombre) =>{
    console.log("Hola " + nombre);
}
const retornoDeSaludar = saludar("Fernando", 40, true, "Costa Rica");
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

arrow();
arrow2("amors");

/*----Ejersicios de flecha----*/

function sumatoria(a, b){
    return a + b;
}

console.log(sumatoria(1, 2));

const sumaFlecha = (a, b) =>{
    return a + b;
}

console.log(sumaFlecha(2, 3));

const sumaFlechaResumida = (a, b) => a + b;//Solo para operaciones de una sola linea
console.log(sumaFlechaResumida(5, 10));

const numeroAleatirio = () => Math.random();
console.log(numeroAleatirio());//Se usan los parentesis al llamar a la funcion, para que sea ejecutada