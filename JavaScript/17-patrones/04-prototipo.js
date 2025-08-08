// El patrón de diseño Prototype es un patrón creacional cuyo objetivo principal es crear nuevos objetos mediante la clonación de una instancia ya existente, conocida como prototipo
// La idea fundamental es que un objeto puede crear una copia de sí mismo sin necesidad de conocer su clase o los detalles específicos de su creación
class Alexa {
    constructor(version){
        this.version = version;
    }

    saludar(){
        console.log("Hola soy alexa");
    }
}

const alexa1 = new Alexa("1");
const alexa2 = new Alexa("2");
const alexa3 = new Alexa("3");

// Alexa.prototype.saludar();

// alexa1.saludar();
// alexa1.__proto__.saludar();

class EchoDot extends Alexa {
    constructor(version){
        super(version);
    }

    apagar(){
        console.log("Buenas noches");
    }
}

const echoDot = new EchoDot("1");

echoDot.saludar();
echoDot.__proto__.saludar();
echoDot.__proto__.__proto__.saludar();

echoDot.apagar();
echoDot.__proto__.apagar();
echoDot.__proto__.__proto__.apagar();