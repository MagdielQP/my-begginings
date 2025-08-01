//metodo q nos dice si existe la propiedad
let objeto = {
    id:1,
    name: 'fercho',
    login: function(){},
    logout: function(){},
}

let propiedad = 'name';

function tienePropiedad(obj, propiedad){
    let props = Object.keys(obj);

    for (let prop of props){
        if (propiedad == prop) {
            return true;
        }
    }
    return false;
}

console.log(tienePropiedad(objeto, propiedad));