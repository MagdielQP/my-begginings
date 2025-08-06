let promesa1 = new Promise((res,rej) => {
    rej(12);
});

let promesa2 = new Promise((res,rej) => {
    res(15);
});

// para controlar los errores usaremos el metodo de catch
promesa1.then(valor => {
    if (valor > 10) {
        return promesa2;
    }
}).then(valor2 => { // valor 2 toma el valor retornado
    console.log('segunda promesa');
    return valor2;
})
    .catch(e => console.log(e))
    .finally(() => console.log('estamos en finally')) 
    // finally se ejecuta siempre si hay rechazo o es aceptada, no recibe nunca un argumento
    //este se usa mucho si estamos realizando alguna carga al servidor.(seria el icono de carga o espera)