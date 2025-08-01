const usuarios = [
    {edad: 17, nombre: 'nico', plan: 'premium'},
    {edad: 13, nombre: 'felipe', plan: 'free'},
    {edad: 32, nombre: 'pablo', plan: 'free'},
    {edad: 25, nombre: 'timoteo', plan: 'gold'},
];

// obtener los usuarios pago
// ordenar a mayor y menor edad
// devolver el nombre del usuario
// crear una plantilla HTML
// imprimir en consola

const pagos = usuarios.filter(u => u.plan != 'free');

pagos.sort((a, b) => {
    if (a.edad < b.edad){
        return 1;
    }
    if (a.edad > b.edad){
        return -1;
    }
    return 0;
});

const lista = pagos.map(u => `<li>${u.nombre}</li>`);

const html = `
<ul>
    ${lista.join(`
    `)}
</ul>    
`

console.log(html);