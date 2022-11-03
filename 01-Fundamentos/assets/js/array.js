const arr = new Array(10);//Se inicializa un array para 10 elementos  vacias
console.log(arr);

const arr2 = [];//Se declara un array vacio "Es la manera mas usada de declarar arrays"

const videJuegos = ["Mario 3", "Mega Man", "PacMan"];
console.log({videJuegos});

console.log(videJuegos[0]);

const arrCosas = [
    true,
    123,
    "fernando",
    1 + 2,//En este casi, se ejecuta la operacion y luego iserta el resultado
    function(){},
    () =>{},//Tambien se pueden guardar funciones
    {a:1},//Tambien guardan objetos
    ["x", "MegaMan","Zeero","Otro Mas",
        ["dr.House", "SpiderMan"]
    ],
];

console.log(arrCosas);
console.log(arrCosas[7][4][1]);//Accedemos al aray dentro del array