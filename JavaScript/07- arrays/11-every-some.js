// cuando necesitamos evaluar si nuestro array cuenta con todas o una caracteristica específica
// every nos devuleve true si todos son true, sino nos dara un false, se detiene cuando encuentra uno en false
// some nos dara un true si es q alguno es true, se detiene cuando encuentra uno en true
let usuarios = [
    {id:1, activo: true},
    {id:2, activo: false},
    {id:3, activo: false},
];

let todosActivos = usuarios.every(u => {
    console.log('todos activos', u.id);
    return u.activo;
});

console.log(todosActivos);

let algunoActivo = usuarios.some(u => {
    console.log(u.id);
    return u.activo;
});

console.log(algunoActivo);