// Funcion constructora

// function User(name){
//     this.name = name;
//     this.instancia = function (){}
// }

// User.prototype.login = function (){
//     console.log('hola mundo');
// }

// clase mas su constructor
class User{
    constructor(name){
        this.name = name;
        // si creamos una funcion dentro del constructor hacemos q esta no se vaya al prototipo sino q sea parte del objeto mismo.
        this.instancia = function(){}
    }
// cuando colocamos metodos fuera del constructor hacemos q estos metodos sean parte de prototipo
//no se puede colocar funciones anonimas(fat arrow functions) en esta parte
    login(){
        console.log('Hola mundo');
    }
}

const u = new User('saix')

console.log(u);