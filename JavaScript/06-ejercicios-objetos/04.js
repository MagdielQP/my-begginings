//metodo q nos dice q funciones hay en un objeto
let objeto = {
    id:1,
    name: 'fercho',
    login: function(){},
    logout: function(){},
}

function cualesMetodos(obj){
    for (let llave in obj){
        if (typeof obj[llave] === 'function') {
            console.log(llave);
        }
    }
}

cualesMetodos(objeto);