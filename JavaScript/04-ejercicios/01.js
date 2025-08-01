//ejercicio para saber cual es mayor
function cualEsMayor(a,b){
    if (a>b){
        console.log(a + ' es mayor a '+ b);
    }else{
        console.log(b + ' es mayor a '+ a);
    }
}

let mayor = cualEsMayor(15,8);

console.log(mayor);

//otra manera usan ternarios

function esMayor(a,b){
    return (a > b) ? a : b;
}

let bigger = esMayor(8,15);

console.log(bigger);