function suma(a,b ) {
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
    // return a + b;
    // console.log(arguments);
    // arguments nos devuelve en forma de iterador la cantidad de parametros que contiene nuestra funcion.
}

console.log(suma(1,2,3,4));
// si pasasemos solo un argumento sumaria 1 + undefined, lo cual da NaN (not a number)
