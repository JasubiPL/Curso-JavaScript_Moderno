let juegos = ["Assassins 1", "Burnaut", "Need for speed", "Spider man 4"];
console.log("Largo:", juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length -1];

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr)=>{//recorre el array y asigna una accion
    console.log(elemento, indice, arr);
});


let nuevaLongitud = juegos.push("GTA 5");//Se añade un elemento al final deñ array juegos
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift("Gotham");//Añade elemento al principio
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();//Se borra el ultimo elemnto
console.log({juegoBorrado, juegos});

let posicion = 1;
let elementosABorrar = 2;

let juegosBorrados = juegos.splice(posicion, elementosABorrar);//elimina elementos apartir de la posicion especificada y la cantidad indicada
console.log(juegosBorrados, juegos);

let saberPosicion = juegos.indexOf("Need for speed");//Busca el valor señalado he indica su posicion
console.log(saberPosicion);//-1 indica que no encontro el elemento buscado