class Persona {//Se inicia una clase
    static _contador = 0;
    static get conteo(){
        return Persona._contador + " instancias";
    }
    static mensaje(){
        console.log("Ese es un metodo estatico");
    }

    nombre = "";
    clave = "";
    frase = "";
    comida = "";

    constructor(nombre = "Sin definir", clave = "Sin definir", frase = "Sin definir"){//Se define el contructor que dara forma al objeto
        this.nombre = nombre;
        this.clave = clave;
        this.frase = frase;

        Persona._contador++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        console.log(`La comida favorita de ${this.nombre} es ${this.comida}`);
    }

    quienSoy(){//Metodo
        console.log(`Hola soy ${this.nombre} y soy ${this.clave}`);
    }
    saludo(){
        this.quienSoy();//Se puede llamar a un metodo dentro de otro metodo
        return `${this.clave} dice: ${this.frase}`;
    }
}

const spiderman = new Persona("Piter Parker", "Spiderman", "Tu fiel vecino");
/*
spiderman.saludo();
spiderman.setComidaFavorita = "Pay de limon";
console.log(spiderman);
console.log(spiderman.getComidaFavorita);
*/

const batman = new Persona("Bruce Wein", "Batman", "Soy Batman");
/*
batman.setComidaFavorita = "Tortas";
batman.saludo();
console.log(batman);
console.log(batman.getComidaFavorita);
*/

console.log(Persona._contador);
console.log(Persona.conteo);   
console.log(Persona.mensaje());  
