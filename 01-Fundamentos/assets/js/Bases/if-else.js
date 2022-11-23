const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});

if(dia === 0){
    console.log("Hoy es domingo")
}else if(dia ===1){
    console.log("Hoy es Lunes")
}

console.log("Fin de condicion");



let diaActual = 3;
const diasSemana = ["domingo", "Lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado"];
console.log(diasSemana[diaActual] || "No es un dia valido");

const diasSemana2 = {
    0: () => "domingo" + 0, 
    1: () => "Lunes" + 1, 
    2: () => "Martes" + 2, 
    3: () => "Miercoles" + 3, 
    4: () => "Jueves" + 4, 
    5: () => "viernes" + 5, 
    6: () => "Sabado" + 6
}

console.log(diasSemana2[diaActual]() || "No es un dia valido");
