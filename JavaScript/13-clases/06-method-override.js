class Entidad{
    constructor(id){
        this.id = id;
        this.created_at = new Date();
    }

    save(){
        console.log('save en entidad');
    }
}

class User extends Entidad{
    constructor(name){
        super(1);
        this.name = name;
    }

    save(){
        super.save();
        console.log('save en usuario');
    }
}

const u = new User('magdiel');

console.log(u.save());