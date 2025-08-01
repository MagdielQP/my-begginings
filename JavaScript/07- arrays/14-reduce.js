// sirve para reducir el contenido de un array, esto sirve para elementos muy grandes y evitar q la busqueda cueste demasiado
const numeros = [1,2,3,4];

// los parametros son 2 (el acumulador, el elemento al q accede en este caso 1 para q comience desde el inicio), ahora necesitamos colocar un valor mas, si vemos ese cero sera el valor de inicio del acumulador

// const suma = numeros.reduce((acumulador,elemento) => {
//     return acumulador + elemento;
// },0);

// console.log(suma);


// tambien ayuda a "aplanar" arrays
// const anidado = [[1,2],3,[4,5]];
// const plano = anidado
//     .reduce((acumulador, el) => acumulador.concat(el),[]);

// console.log(plano);



// cuando tenemos un array muy grande y evitar usar find, podemos crear un indice

const usuarios = [
    {edad: 17, nombre: 'nico'},
    {edad: 13, nombre: 'marcela'},
    {edad: 25, nombre: 'erick'},
    {edad: 32, nombre: 'juan'},
];
// nuestro valor inicial sera un objeto vacio {}
const indexado = usuarios.reduce((acu, el) => ({
    ...acu,
    [el.nombre]: el,
}),{});

console.log(indexado);