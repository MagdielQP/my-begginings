function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...')}
}

let punto = { z: 7};
//call los argumentos se pasan 1 a 1
Punto.call(punto, 1, 2);
//apply los argumentos se pasan separados
Punto.apply(punto,[1,2]);

console.log(punto);