let longitud = 9;
function createArray(n){
    if(n <= 0){
        return [];
    }

    let arr = [];
    for (let i = 0; i < n ; i++){
        arr[i] = i + 1;
    }

    return arr;
}

let ans = createArray(longitud);

console.log(ans);