// las promesas representan el estado de una peticion
// los estados podrian ser: pending(pendiente),rejected(rechazada) o  fulfilled (terminada)

// ¿Para q nos sirve?
// - para realizar consultas a la base de datos
// - Para realizar peticiones a los servidores
// - para trabajar con WebWorkers (calculos muy pesados para el ordenador)

// Las promesas ayudan a capturar valores q se van a resolver en un futuro

// prueba para ver el fulfilled
// let promesa = new Promise((resolve, reject) => {
//     resolve(42);
// });

// prueba para ver el pending
// let promesa = new Promise((resolve, reject) => {
//     // creamos un temporizador, el 10000 es el tiempo que queremos q la ejecucion espere
//     setTimeout(() => resolve(42),10000);
// });

// prueba para ver el rejected
// let promesa = new Promise((resolve, reject) => {
//     // creamos un temporizador, el 10000 es el tiempo que queremos q la ejecucion espere
//     setTimeout(() => reject(42),10000);
// });

// ejemplo de error de carga
let promesa = new Promise((resolve, reject) => {
    // creamos un temporizador, el 10000 es el tiempo que queremos q la ejecucion espere
    setTimeout(() => resolve('hola mundo'),1000);
});

promesa.then(
    valor => console.log(valor),
    e => console.log('error', e),
)