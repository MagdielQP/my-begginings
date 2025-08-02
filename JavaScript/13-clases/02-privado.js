class User {
    #name; //esta es una propiedad privada

    constructor(name){
        this.#name = name;
    }

    #logger(){ //este es un metodo privado

    }

    get name(){
        this.#logger();
        return this.#name;
    }
}

const u = new User('saix');
console.log(u);