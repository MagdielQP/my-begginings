//las fat arrow functions hacen que podamos escribir fucniones de manera mas "breve"

// como es una funcion normal
// function hola(){
//     return 'hola mundo';
// }


//cabe aclarar q las arrow functions son anonimas(no hace falta ponerles un nombre), pero para referenciarla en el futuro hay que guardarla en una variable como es el caso del siguiente ejemplo
const hola = () => {
    return 'hola mundo';
}

//si nuestro codigo solo tendra una linea, aplicamos lo q trae como retorno implicito (no hace falta hacer return) ejemplo: 
// const saludo = () =>  'hola mundo';
// esto nos dara como resultado  el texto hola mundo
// pero si ocupara mas de una linea entonces sera necesario el uso de llaves

//ahora como añadimos parametros a una arrow function
const saludo = (mensaje) =>  mensaje + ' hola mundo';
// de la misma manera, si necesitamos solo un parametro, no es necesario escribir el parentesis, pero si hay mas de uno, si se debe de escribir

const resultado = hola();

console.log(resultado);