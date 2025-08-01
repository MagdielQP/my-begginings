const letras = ['a', 'b', 1, 'c', 'd', 1];

//buscamos si existe el elemento, en caso de no existir nos manda un -1

console.log(letras.indexOf('c'));
console.log(letras.indexOf(1));

//tambien podemos pasar otro argumento para especificar desde donde empezar a buscar:
console.log(letras.indexOf(1,4));

//buscar desde el ultimo
console.log(letras.lastIndexOf(1));

//si queremos una respuesta booleana entonces
console.log (letras.includes('d'));