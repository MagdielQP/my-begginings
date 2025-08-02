// 1. Dentro de un objeto: this hace referencia a un objeto al cual estamos usando
// 2. En una funcion: si this se encuentra dentro de una funcion, esta hace referencia al objeto window,o al objeto global
// 3. En new: en new, this hace referencia al objeto que sera creado

// 1.
// const user = {
//     name:'isai',
//     login(){
//         console.log(this)
//     }
// };

// user.logout = function logout() {
//     console.log(this);
// }

// user.logout();

// 2.
// function log(){
//     console.log(this);
// }

// log();


// 3. 
function Log(mensaje){
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('hola mundo')

/**
 * cuando usamos la palabra reservada de new, vemos 4 cosas:
 * Se crea un objeto literal
 * se vincula este objeto a this
 * se vincula el prototipo
 * si no retorna nada, entonces retorna this
 */