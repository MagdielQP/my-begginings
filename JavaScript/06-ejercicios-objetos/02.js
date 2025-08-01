function createUsuario(name){
    return{
        id: Math.random(),
        name,
    };
}

let user = createUsuario('Felipe');
let user1 = createUsuario("juan");

console.log(user,user1);