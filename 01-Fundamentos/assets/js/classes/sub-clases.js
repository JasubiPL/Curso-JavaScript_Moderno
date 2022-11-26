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

class Heroe extends Persona{
    clan = "";

    constructor(nombre,clave, frase){
        super(nombre, clave, frase);//Sirve para traer el constructor de la clase Persona

        this.clan = "Avengers";
    }

    quienSoy(){
        console.log(`Soy ${this.clave}, de los ${this.clan}`);
        super.quienSoy();//traemos el metodo "quienSoy" de la clase "Persona"
    }
}

const spiderman = new Heroe("Piter Parker", "Spiderman", "Tu fiel vecino"); 

console.log(spiderman);
spiderman.quienSoy();
