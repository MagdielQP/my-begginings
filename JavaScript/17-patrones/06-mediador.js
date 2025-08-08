class Uber{
    comunicar(conductor,mensaje){
        console.log(`${Date.now()} [${conductor.nombre}]: ${mensaje}`);
    }
}

class Conductor{
    constructor(nombre,servicio){
        this.nombre = nombre;
        this.servicio = servicio;
    }

    enviar(mensaje){
        this.servicio.comunicar(this, mensaje);
    }
}

const servicio = new Uber();

const conductor1 = new Conductor("fernando", servicio);
const conductor2 = new Conductor("luis", servicio);

conductor1.enviar('estoy disponible');
conductor2.enviar('estoy ocupado');