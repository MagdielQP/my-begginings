const letras = ['a', 'b'];

//agregar al final de un array
letras.push('c', 'd');

//agregar al comienzo de un array
letras.unshift('aa','bb');

//agregar elementos en el medio (indice,elementos a eliminar, elem,elementos a agregar puede ser mas de uno)
letras.splice(3,0,8, 'g', 4)

console.log(letras);