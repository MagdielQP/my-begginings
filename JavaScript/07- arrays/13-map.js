const usuarios = [
    {edad: 17, nombre: 'nico'},
    {edad: 13, nombre: 'marcela'},
    {edad: 25, nombre: 'erick'},
    {edad: 32, nombre: 'juan'},
];
// una forma mas simple de su uso
// const lista = usuarios.map(u => u.nombre);
// console.log(lista);

const lista = usuarios
    .filter(u => u.edad > 17) //podemos o no hacer esta linea, esto solo filtra por edad
    .map(u => `<li>${u.nombre}</li>`);

const html = `<ol>${lista.join('')}</ol>`;

console.log(html);


//como seria con objetos:
const mapped = usuarios.map(u => ({
    ...u,
    mayor:u.edad > 17,
}))

console.log(mapped);