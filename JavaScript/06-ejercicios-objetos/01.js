function Usuario(name){
    this.name = name,
    this.id = Math.random();
}

let user = new Usuario("Felipe");
let user1 = new Usuario("juan");

console.log(user,user1);