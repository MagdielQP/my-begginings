let promesa1 = new Promise((res,rej) => {
    res(12);
});

let promesa2 = new Promise((res,rej) => {
    res(15);
});

// el metodo then devuelve una promesa, por lo cual podemos encadenar las promesas

// El método then() en las promesas de JavaScript se utiliza para asociar funciones de devolución de llamada (callbacks) que se ejecutarán cuando la promesa se resuelva (cumplida) o se rechace

// en el siguiente ejemplo vemos como se encadenan 2 promesas, pero no podemos reutilizar el primer valor
// promesa1.then(valor => {
//     console.log(valor);
// }).then(() => {
//     console.log('la segunda promesa');
// })


// en el siguiente ejemplo reutilizamos el valor de la primera promesa con un return
// promesa1.then(valor => {
//     return valor + 18
// }).then(valor2 => { // valor 2 toma el valor retornado
//     console.log('la segunda promesa', valor2);
// })

// otro ejemplo
promesa1.then(valor => {
    if (valor > 10) {
        return promesa2;
    }
}).then(valor2 => { // valor 2 toma el valor retornado
    console.log('la segunda promesa', valor2);
})