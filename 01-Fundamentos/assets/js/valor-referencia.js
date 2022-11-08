let juan = {nombre: "Juan"};
let ana = {...juan};//con el operador Spread "..." reasignamos el valor en otro lugar en memoria
ana.nombre = "Ana";

console.log({juan, ana});

const cambiarNombre = ({...persona}) =>{
    persona.nombre = "Tony";
    return persona;
}

let peter = {nombre: "Peter"};
let tony = cambiarNombre(peter);

console.log({peter, tony});

/*----Arrays----*/
const frutas = ["Manzana", "Uva", "Fresa"];

console.time("slice");
const otrasFrutas = frutas.slice();
console.timeEnd("slice");

console.time("spread");
const otrasFrutas2 = frutas.slice();
console.timeEnd("spread");

otrasFrutas.push("naranja");

console.table({frutas, otrasFrutas})