//a un objeto se le pueden añadir propiedades, pero no cambiar las q ya tenia, caso del ejm el id 1
const user = { id: 1};

user.name = 'Isai';
user.guardar = function(){
    console.log('guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//con .freeze hacemos q no se pueda añadir ninguna propiedad mas
const user1 = Object.freeze({ id: 1});
user1.name = 'nico';
user.id = 2;
console.log(user1);

//con seal permitimos q se cambie los valores q ya tenia pero no se pueden agregar mas propiedades
const user1 = Object.seal({ id: 1});
user1.name = 'nico';
user.id = 2;
console.log(user1);

