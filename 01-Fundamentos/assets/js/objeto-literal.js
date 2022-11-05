let personaje = {
    nombre: "Jasubi",
    codeName: "Web Developer",
    vivo: true,
    edad:25,
    coords:{
        latitud:34.034,
        longitud:-118.70
    },
    trajes:["formal", "Street", "Dizfras", "Escuela"],
    dierccion:{
        zip: "10880, 90265",
        ubicacion: "Iztacalco, Mexico"
    },
    "ultimo-trabajo": "Almacen"//Este nombre de propiedad es valido pero no se recomienda
};

console.log(personaje);
console.log(personaje.nombre);//accedemos al valor de la propiedad "nombre" del objeto
console.log(personaje["nombre"]);//Asi tambien accedemos al valor de "nombre"
console.log(personaje.edad);
console.log(personaje.dierccion.ubicacion)//Accedemos al objeto "dereccion" dentro de el objeto personajes
console.log(personaje.trajes.length);//Cantidad de trajes
console.log(personaje.trajes[personaje.trajes.length -1]);//Ultimo traje

const x = "vivo";
console.log("Esta vivo?", personaje[x]);//busca el valor "x" en el objeto y retorna true o false
console.log("Ultimo traje", personaje["ultimo-trabajo"]);//Asi se accede al valor de una propiedad entre comillas dentro de un objeto

/*----Mas Detalles----*/

delete personaje.edad; //elimina un elemento edad de el objeto

personaje.casado = true;//Se añade otro elemento al objeto

const entriesPares = Object.entries(personaje);//Genera un arrya con los elemntos en otro array
console.log(entriesPares);

Object.freeze(personaje);//BLoquea el los elementos dentro de el objeto, ecepto on¿bjetos dentro del mismo
personaje.batman = "DC Comics";

const propiedades = Object.getOwnPropertyNames(personaje);//Crea un arreglo con solo las propiedades del elemento, sin tomar encuenta el valor asignado
const valores = Object.values(personaje);//Crea un array con los valores de los elementos
console.log(propiedades);
console.log(valores);



