const usuarios = [
    {edad: 17, nombre: 'nico', plan: 'premium'},
    {edad: 13, nombre: 'felipe', plan: 'premium'},
    {edad: 32, nombre: 'pablo', plan: 'free'},
    {edad: 25, nombre: 'timoteo', plan: 'gold'},
];

function cuantosPremium(usrs){
    return usrs.reduce((acu,el) => {
        if(el.plan !== 'free'){
            return acu + 1;
        }
        return acu;
    },0);
}
// hacer todo lo anterior pero de manera mas simplificada usando ternarios seria:
function cuantosMayores(usrs){
    return usrs.reduce((acu, el) => 
        el.edad > 17 ? acu+1 : acu ,0);
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));