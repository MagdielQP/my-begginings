class Rocola{
    temas = [
        "No hay lugar mas alto",
        "alaba",
        "lion",
        "cambiare mi tristea",
        "libre",
        "cantaremos de tu amor",
        "danzar",
        "con todo mi corazon",
        "tu amor no tiene fin",
        "renuevame",
        "como el ciervo",
        "aqui estoy",
        "me gozare",
        "no hay santo como el señor"
    ]

    queue = [];

    play(numSaltos){
        if (this.queue.length >= numSaltos) {
            let primero = this.queue.shift();
            this.temas.push(primero)
        }
        let indiceRandom = Math.floor(Math.random() * this.temas.length);
        let tema = this.temas.splice(indiceRandom,1);
        this.queue.push(tema);
        return tema;
    }
}

let rocola = new Rocola();

console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
console.log(rocola.play(4));
