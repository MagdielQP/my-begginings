let promesa1 = new Promise((res,rej) => {
    res(5);
});

let promesa2 = new Promise((res,rej) => {
    res(15);
});

promesa1
    .then(valor => {
        if (valor > 10) {
            return promesa2;
        }
        // para rechazar una promesa y devolver una nueva instancia:
        // return Promise.reject('Valor menor que 10');

        // ahora para colocar un resolve:
        return Promise.resolve(555);
    })
    .then(valor2 => { // valor 2 toma el valor retornado
        console.log('segunda promesa',valor2);
        return valor2;
    })
    .catch(e => console.log(e))
    .finally(() => console.log('estamos en finally')) 