function User(){
    this.name = 'hola mundo';
}
function Product(){
    this.name = 'Producto';
}

function Entidad(){}
Entidad.prototype.save = function(){
    console.log('guardando', this.name);
}
Entidad.prototype.validate = function(){
    console.log('validando', this.name);
}

// Formas antiguas de extender prototipos
// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;
// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

// forma mas moderna de extender prototipos
Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User;
console.log(user);
