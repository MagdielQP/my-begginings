function mixin (Ctr, ...args){
    Object.assign(Ctr.prototype, ...args);
}

let vuela = {
    vuela(){
        console.log('volando');
    }
}

let nada = {
    nada(){
        console.log('nadando');
    }
}

let banio = {
    banio(){
        console.log('yendo al banio');
    }
}

let camina = {
    camina(){
        console.log('caminando');
    }
}

//vuela , nada, camina, va al baño
function Pato(){
    this.name = 'Patito';
}
mixin(Perro,camina,nada,banio,vuela);

// camina, nada, va al baño
function Perro(){}
mixin(Pato,camina,nada,banio);
// let p = new Perro();

//nada, va al baño
function Pez(){}
mixin(Pez,nada, banio);

// let p = new Pez();
// console.log(p);

// vuela pero no nada, camina ni va al baño
function Avion(){}

mixin(Avion,vuela);
console.log(Avion.prototype, new Avion());
