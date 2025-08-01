const usuarios = [
    {edad: 17, nombre: 'nico', plan: 'premium'},
    {edad: 13, nombre: 'felipe', plan: 'free'},
    {edad: 32, nombre: 'pablo', plan: 'free'},
    {edad: 25, nombre: 'timoteo', plan: 'gold'},
];

function getPaidUsers(usrs){
    return usrs.filter(u => u.plan != 'free');

}


console.log(getPaidUsers(usuarios))