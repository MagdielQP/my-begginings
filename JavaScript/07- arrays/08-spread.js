// este metodo nos sirve para combinar arrays, similar al concat, pero mas flexible
let arr1 = [1, 2];
let arr2 = [5, 6];

let arr3 = [...arr1, 3, 4, ...arr2, 7, 8];

console.log(arr3);