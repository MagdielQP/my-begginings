function getIdByIdx(arr,idx){
    if(idx < 0 || arr.length <= idx){
        return 'Elemento no existe'
    }

    return arr[idx];
}

let arreglo = ['loro', 'pato','gorrion'];

let valor = getIdByIdx(arreglo,2);

console.log(valor);