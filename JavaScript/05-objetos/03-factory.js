//factory function nos permite crear objetos de manera mas facil
let user = {
    id:1,
    email: 'user@gmail.com',
    name: 'usuario',
    activo: true,
    recuperarClave: function (){
        console.log('recuperando clave');
    },
}

let user1 = {
    id:2,
    email: 'user1@gmail.com',
    name: 'usuario1',
    activo: false,
    recuperarClave: function (){
        console.log('recuperando clave...');
    },
}

function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function (){
            console.log('recuperando clave...');
        },
    }
}

let user3 = crearUsuario('rocio', 'rocio@gmail.com');
let user2 = crearUsuario('jorge', 'jorge@gmail.com');

console.log(user3,user2);