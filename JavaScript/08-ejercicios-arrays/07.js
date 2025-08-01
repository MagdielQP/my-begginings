const usuarios = [
    {edad: 17, nombre: 'nico', plan: 'premium'},
    {edad: 13, nombre: 'felipe', plan: 'free'},
    {edad: 32, nombre: 'pablo', plan: 'gold'},
    {edad: 25, nombre: 'timoteo', plan: 'free'},
];

// esta funcion existe en Object.groupBNy
function groupBy(arr, prop){
    return arr.reduce((acc, el) => {
        let valor = el[prop];

        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    },{});
}

const grouped = groupBy(usuarios, 'plan');
console.log({grouped});