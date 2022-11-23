//Forma de crear instancias de objetos antes del ES6

function Persona(nombre, edad){
    console.log("Se llama a la instancia en esta linea");

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona("Maria", 18);
const ricardo = new Persona("Ricardo", 48);

maria.imprimir();
ricardo.imprimir();