//estructura semejante a un onbjeto en POO

let user = {
    email: 'user@gmail.com',
    name: 'usuario',
    direccion: {
        calle: 'Esteban Arce',
        numero: 1562,
    },
    activo: true,
    recuperarClave: function (){
        console.log('recuperando clave');
    },
}