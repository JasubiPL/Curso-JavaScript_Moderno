class Persona {//Se inicia una clase
    nombre;
    clave;
    frase;

    constructor(nombre = "Sin definir", clave = "Sin definir", frase = "Sin definir"){//Se define el contructor que dara forma al objeto
        this.nombre = nombre;
        this.clave = clave;
        this.frase = frase;
    }

    quienSoy(){//Metodo
        console.log(`Hola soy ${this.nombre} y soy ${this.clave}`);
    }
    saludo(){
        this.quienSoy();//Se puede llamar a un metodo dentro de otro metodo
        console.log(`${this.clave} dice: ${this.frase}`)
    }
}

const spiderman = new Persona("Piter Parker", "Spiderman", "Tu fiel vecino");
console.log(spiderman);
const batman = new Persona("Bruce Wein", "Batman", "Soy Batman");
console.log(batman);
spiderman.saludo();
batman.saludo();