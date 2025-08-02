//No extender los prototipos de opciones constructoras que tiene JS(Array, Boolean...) ya q en una actualizacion estan se podrian renovar o eliminar.

Object.prototype.isEqual = function(obj){
    //...
}

let x = {};
x.isEqual({a:1});