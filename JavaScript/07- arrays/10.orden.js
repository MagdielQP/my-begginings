let numeros = [15, 10, -3];

//ordenamos de menor a mayor esto sirve para numeros y letras(ojo q las letras las ordena en el orden del formato ascii)
numeros.sort();
console.log (numeros);
//para convertirlo de mayor a menor usamos:
numeros.reverse();
console.log (numeros);

let conMayuscula = ['Z', 'a', 'd'];

conMayuscula.sort((a,b) => {
    /**
     * a antes b => -1
     * b antes a => 1
     * si son iguales => 0
     */
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();

    if(alower < blower){
        return -1; 
    }
    if(alower > blower){
        return -1;
    }
    return 0;
});

console.log(conMayuscula);

// Ahora trabajando con objetos

let usuarios = [
    {edad:15, nombre: 'juan'},
    {edad:24, nombre: 'cesar'},
    {edad:9, nombre: 'hans'},
];

usuarios.sort((a,b) => {
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    return 0;
});

console.log(usuarios);






