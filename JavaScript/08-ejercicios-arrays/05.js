const usuarios = [
    {edad: 17, nombre: 'nico', plan: 'premium'},
    {edad: 13, nombre: 'felipe', plan: 'free'},
    {edad: 32, nombre: 'pablo', plan: 'free'},
    {edad: 25, nombre: 'timoteo', plan: 'gold'},
];

function obtenerMayor(arr){
    let mayor = arr[0];
    for(let usuario of arr){
        if(mayor.edad < usuario.edad){
            mayor = usuario
        }
    }
    
    return mayor;
}

const mayor = obtenerMayor(usuarios);

console.log(mayor);