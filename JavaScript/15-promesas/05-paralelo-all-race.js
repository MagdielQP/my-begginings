const p1 = Promise.reject('fallo en conexion al servidor');
const p2 = 42;
const p3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, 'foo')
});

// el metodo all recibe un Array
// en paralelo espera a q se resuelva p1,p2,p3 y luego de q todas hayan sido resuletas se ejecutara .then, pero si al menos 1 sea rechazada se ira al .catch
// Promise.all([p1, p2, p3])
//     .then(valores => console.log('all', valores))
//     .catch(e => console.log('error en all', e));

// Metodo race
// Espera a q se resuelvan las promesas en el array y la primera q sea resuelta o rechazada va a mostrar su valor en .then o .catch
// Promise.race([p1, p2, p3])
//     .then(valor => console.log('race', valor))
//     .catch(e => console.log('error en race', e));

// Metodo .Any
// funciona igual que race pero este devolvera el valor de la primera promesa resuelta
// pero si todas la promesas son rechazadas, entonces nos muestra el mensaje de error
// Promise.any([p1, p2, p3])
//     .then(valor => console.log({ valor }))
//     .catch(e => console.log({ e }));

// Metodo allSettled
// este metodo, independientemente de si las promesas son resueltas o rechazadas estas se van a envolver dentro de un objeto que cual contiene la propiedad de status y al propiedad de reason
Promise.allSettled([p1, p2, p3])
    .then(valores => console.log({ valores }))
    .catch(e => console.log({ e }));