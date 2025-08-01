const usuarios = [
    { id: 1, name: 'felipe' },
    { id: 2, name: 'julio'},   
];

//predicate = funcion que devuelve true o false
const resultado = usuarios.find(function(usuario){
    return usuario.name === 'julio'
});

// para escribirlo en forma de arrow function seria:
const res = usuarios.find(usuario => 
    usuario.name === 'felipe');

console.log(resultado);
console.log(res);