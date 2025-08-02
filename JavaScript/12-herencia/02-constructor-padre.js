function Entidad (entidad){
    this.id = Math.random().toString('20');
    this.entidad = entidad;
}

function User(){
    Entidad.call(this,'user');
    this.attrs = {
        name: 'magiel',
        email: 'magdiel@gmial.com',
    }
}

const u = new User();
console.log(u);