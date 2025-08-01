let pairs = [
    [1,{name:"Nicolas"}],
    [2,{name:"Rodrigo"}],
    [3,{name:"Fernando"}],
];

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

function toCollection(arr){
    let collection = [];
    for (idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }

    return collection;
}

let answer = toCollection(pairs);

console.log(answer)
