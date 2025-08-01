const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id:15},
    {nombre: 'juan'},
]

//ordenar en numeros, Strings, objetos
function dividePortipo(arr){
    return {
        numbers: arr.filter(n => typeof n === "number"),
        strings: arr.filter(n => typeof n === "string"),
        objects: arr.filter(n => typeof n === "object"),
    }
}

const nuevoArray =dividePortipo(miArray);
console.log(nuevoArray);