class Rectangulo{
    #area = 0;//una variable privada, asi no puede ser modificada fuera de el constructor

    constructor(base, altura){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    //NOTA: para acceder al valor de un metodo privado debes llamarlo atraves de un metodo publico
    #calcularArea(){//Metodo Privado
        return this.#area * 2;
    }

    mostrarMetodoPrivado(){
        return this.#calcularArea();
    }
}

const rectangulo = new Rectangulo(10, 5);

console.log(rectangulo);
console.log(rectangulo.mostrarMetodoPrivado());