const Entidad = {
    
    save(){
        console.log('guardado de entidad');
    },
}

const Actualizar = {
    
    save(){
        console.log('actualizando de entidad');
    },
}

class User {
    constructor(name){
        this.name = name;
    }

    save(){
        console.log('guardado en usuario');
    }
}

const nuevoProto = Object.assign(Entidad, Actualizar);
Object.setPrototypeOf(User.prototype, nuevoProto);

const u = new User('magdiel');

console.log(u);