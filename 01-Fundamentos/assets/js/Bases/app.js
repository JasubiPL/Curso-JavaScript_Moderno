//alert("Hola desde app.js");//Ventana de alerta, interrumpe el flujo de ejecucion

//console.log("Hola Mundo"); //Imprecion en consola

/*
Variables
let a = 10;
var b = 10;
const c = 10;

c = 20;No se puede reasignar valor a un Const
a = 20;i puede reasignar valor
b = 20;Si se puede reasignar valor
*/

/*----Otra forma de declarar varias variables----*/

let a = 10, 
    b = 20,
    c = 30,
    d = "Hola ",
    e = "Spiderman",
    x = a + b;

/*----Consola----*/

/*
console.log(a);
console.warn("colorea en amarillo para mensajes de precauscion");
console.error("Usada para mandar mensajes de error")

console.log("a = ",a);
console.log("b = ",b);
console.log("c = ",c);
*/

/*----Mandamos las variables como objetos----*/
// console.log({a});
// console.log({b});
// console.log({c});

/*----añadiendo css a la consola----*/
// console.log("%c Mis variables","color:green"); 

 /*----Imprimiendo una tabla en consola ----*/
//  console.table({a, b, c, d, e, x});

//  const saludo = d + e;
//  console.log(saludo);

let outerWidth = 1000000;//Let no sobre escribe los valores del objeto global "Window"
let outerHeight =500;

let miNombre = "JasubiP";

/*----Comentarios----*/

/*Let y Const dan mensajes mas utiles cuando hay algun error, ejemplo al tratar
de usar una variable que aun no ha sido inicializada, let y const indican que esto no
es posible, mientras que var solo le asigna el valor undefined*/