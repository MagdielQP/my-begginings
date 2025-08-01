let array = [2, 5, 7, 15, -5, -100, 55];

function positives(arr){
    let contador = 0;
    for(number of arr){
        if(number > 0){
            contador++;
        }
    }
    return contador;
}

let numeros = positives(array);
console.log(numeros);