// esta es una clase 
// class Pelicula{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     toString(){
//         return ` la pelicula es ${this.name}, estrenada el año: ${this.year}`;
//     }
// }

// podremos realizarlo haciendo una factory function
function Pelicula(name,year){
    this.name = name;
    this.year = year;
    this.toString = function(){
        return ` la pelicula es ${this.name}, estrenada el año: ${this.year}`;
    }
}

console.log(new Pelicula('peli1',123).toString());
console.log(new Pelicula('peli2',456).toString());
console.log(new Pelicula('peli3',789).toString());