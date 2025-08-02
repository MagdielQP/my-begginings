function User(){
    this.name = 'hola mundo';
}


User.prototype.login = function (){
    console.log('iniciando sesion', this.name);
}

let user = new User();

// iterar todas las propiedades incluyendo las del prototipo
// for (let prop in user)
//     console.log(prop);

//iterar todas las propiedades menos la del prototipo
for (let prop in user)
    if(user.hasOwnProperty(prop))
        console.log(prop);

// Crear un array con las propiedades del objeto y no del prototipo
console.log(Object.keys(user));