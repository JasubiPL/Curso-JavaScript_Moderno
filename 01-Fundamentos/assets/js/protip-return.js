/*----Creamos una funcion que agrega valores a los parametros de un objeto----*/

//Forma larga de hacerlo
function crearPersona(nombre, apellido, edad){
    return {
        nombre:nombre,
        apellido:apellido,
        edad:edad
    };
}
const persona = crearPersona("Jasubi", "Piñeyro", 25);
console.log(persona);

//Forma comun
function crearPersona2(nombre, apellido, edad){
    return {
        nombre,
        apellido,
        edad
    };
}
const persona2 = crearPersona2("David", "Piñeyro", 18);
console.log(persona2);

//Forma Corta y optima
const crearPersona3 = (nombre, apellido, edad) => ({nombre, apellido, edad});
const persona3 = crearPersona("Gerzom", "Piñeyro", 49);
console.log(persona3);

/*----Argumentos----*/
//Forma tradicional
function imprArgumentos (){
    console.log(arguments);
}
imprArgumentos("Carros", true, 32);

//Forma corta y optima
const imprArgumentos2 = (...arg) => arg;
const [veiculo, vivo, edad] = imprArgumentos2("Moto", false, 25);
console.log({veiculo, vivo, edad});



