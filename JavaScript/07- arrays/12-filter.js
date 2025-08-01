const usuarios = [
    {edad: 17, nombre: 'nico'},
    {edad: 13, nombre: 'marcela'},
    {edad: 25, nombre: 'erick'},
    {edad: 32, nombre: 'juan'},
];

const mayores = usuarios.filter(u => u.edad > 17);

console.log(mayores);