const punto ={
    x:10,
    y:4,
    dibujar(){
        console.log('dibujando');
    }
};
//al usar el in podemos ver si dicho metodo esta en la objeto punto
if('dibujar' in punto){
    punto.dibujar();
}

//podemos hacer lo mismo usando keys (ver las propiedades)
console.log(Object.keys(punto));

//esto es antiguo
//si queremos acceder a sus valores, entonces podriamos usar:
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}
//si queremos que nos muestre la propiedad y el valor usamos:
for (let entry of Object.entries(punto)) {
    console.log(entry);
}

//esto es nuevo -mejor usar este 
for (let llave in punto) {
    console.log(llave, punto[llave]);
}