//clonar objetos sin q apunten a la misma referencia
let punto = {
    x:10,
    y:7,
};
//vemos como funciona lo de clonar
let clonePunto = Object.assign({},punto,{z:20});
console.log(punto, clonePunto);

//como se clonaba antes
let copiaPunto = Object.assign({},punto);
console.log(copiaPunto, punto);

let copia4 = {};
for (let llave in punto){
    copia4[llave] = punto[llave];
}
console.log(copia4);

//como se clona ahora:
let copia3 = { ...punto};
console.log(copia3);