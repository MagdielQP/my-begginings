let array = [{
    id: 1,
    name: 'nicolas',
},{
    id: 2,
    name: 'rodrigo',
},{
    id: 3,
    name: 'fernando',
}];

function toPairs(arr){
    let pairs = [];
    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id,elemento];
    }

    return pairs;
}

let answer = toPairs(array);

console.log(answer)
