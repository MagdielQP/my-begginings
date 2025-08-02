function User(){
    this.name = 'hola mundo';
    this.login = function (){
        console.log('iniciando sesion');
    }
}

const user1 = new User();
const user2 = new User();

user1.login();
console.log(user1.login == user2.login);