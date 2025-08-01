let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
};

console.log(personaje);
//formas de ver los valores en un objeto
console.log(personaje.nombre);
console.log(personaje['anime']);

//agregar a un objeto
personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;

//eliminar un valor del objeto
delete personaje.anime;

console.log(personaje);