const usuarios = [
    {edad: 17, nombre: 'nico', plan: 'premium'},
    {edad: 13, nombre: 'felipe', plan: 'free'},
    {edad: 32, nombre: 'pablo', plan: 'free'},
];

const users = [
    {age: 22, name: 'michael', membership: 'premium'},
    {age: 27, name: 'kevin', membership: 'free'},
    {age: 29, name: 'selena', membership: 'free'},
];

// unificar la estructura de usuarios y user
// fusionar los array
// ordenar por edad
// crear plantilla HTML
// <li>Nombre:name, Edad: age</li>
//imprimir la lista en consola


const usersEspanol = users.map(u => ({
    edad: u.age,
    nombre: u.name,
    plan: u.membership,
}));

const todos = [...usuarios, ...usersEspanol];

todos.sort((a, b) => {
    if (a.edad < b.edad){
        return 1;
    }
    if (a.edad > b.edad){
        return -1;
    }
    return 0;
});

const lista = todos.map(u => 
    `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);

const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`

console.log(lista);
