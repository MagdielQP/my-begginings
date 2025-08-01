//metodo que saca copias de otro objeto
//sin usar ... ni Object.assign
let obj1 = {id:1, name: 'carlos'};
function crearCopia(obj){
    let copia = {};
    for (let llave in obj){
        copia[llave] = obj[llave];

    }
    return copia;
}

let obj2 = crearCopia(obj1);
console.log({obj1, obj2});