// ejemplo simple
// function sumaTodo(arr){
//     return arr.reduce((acc, el) => acc + el);
// }

// // console.log(sumaTodo([1,2,3,4]));

// try {
//     console.log(sumaTodo({ prop:1 }));
// } catch (error) {
//     console.log(error);
// }

// console.log('mensaje despues del catch');

// ejemplo con throw
function sumaTodo(arr){
    if (!Array.isArray(arr)){
        throw new Error('El parametro no es un array');
    }
    return arr.reduce((acc, el) => {
        if (typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`Elemento ${el} no es un numero`);
        }
        return acc + el;
    });
}

// console.log(sumaTodo([1,2,3,4]));

try {
    console.log(sumaTodo([1,2,NaN,'texto']));
} catch (e) {
    console.log(e.message);
}

console.log('mensaje despues del catch');