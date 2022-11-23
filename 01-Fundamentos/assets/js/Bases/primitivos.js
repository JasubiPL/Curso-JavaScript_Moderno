/*----STRING----*/
let nombre = "Jasubi";
console.log(nombre);

nombre = "Piñeyro";
console.log(nombre);

nombre = "Legaspi";
nombre = 123;

console.log(typeof nombre);//Imprime tipo de variable

/*----BOOLEANO----*/

let marvel = true;
console.log(typeof marvel);

/*----NUMBER----*/

let edad = 25;
edad = 26;

console.log(typeof edad);

/*----Sin valor----*/
let superPoder;
console.log(superPoder);

let soyNull = null;
console.log(typeof soyNull);

/*----SYMBOL----*/

let symbol1 = Symbol("a");
let symbol2 = Symbol("a");
console.log(typeof symbol1);
console.log(symbol1 === symbol2);
