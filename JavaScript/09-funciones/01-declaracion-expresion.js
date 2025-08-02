console.log();

// declaracion de funciones o function declaration
function suma(){
    console.log('sumando...');
}

// funcion anonima o anonymus function
// se usa dentro de un map por ejemplo:
// function (){
//     console.log('anonima');
// }

// expresion de funciones o function expression
// expresion de funcion anonima
let resta = function(){
    console.log('restando...');
}
// expresion de funcion nombrada
let multiplica = function multi(){
    console.log('multiplicando...');
}

// expresion de funcion con fat arrow function
// estas siempre son anonimas
const divide = () => {
    console.log('diviviendo...')
}


