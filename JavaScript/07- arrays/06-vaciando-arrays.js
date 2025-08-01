let arr = [1, 2];

// una forma seria asignarle un array vacio, el problema seria si antes este array fue guardado en otro variable este vaciado no se reflejaria en las otras variables
// arr = [];

// otra forma seria manipulando la longitud del array
// arr.length = 0;

//otra seria usando el metodo splice()
// arr.splice(0,arr.length);

// la menos recomendada seria el de usar un loop
// while (arr.length > 0){
//     arr.pop();
// }