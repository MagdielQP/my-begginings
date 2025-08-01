//construir un nuevo objeto
let obj = {};
let obj1 = new Object();

// new Array(); []
// new String(); "" ''
// new Number(); 1231
// new Boolean(); true false

function Usuario(){
    this.name = "laredo";
}

let user = new Usuario();
console.log(user.constructor)