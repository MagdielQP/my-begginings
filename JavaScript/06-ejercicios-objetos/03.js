//comparar objetos con una funcion
function similares(obj1, obj2){
    let distintos = false;
    for (let llave in obj1){
        if (obj1[llave] !== obj2[llave]) {
            distintos = true;
        }
    }
    return !distintos;
}

let resultado = similares(
    {id:1, name: 'Nico'},
    {id:2, name: 'Nico'},
);

console.log(resultado);