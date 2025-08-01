function fullPrice(price,tax){
    return price + (price*tax);
}

let ans = fullPrice(19.90, 0.15);

console.log(ans);