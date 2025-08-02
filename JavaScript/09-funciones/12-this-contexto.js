const usuario = {
    nombre: 'nicolas',
    ciudadanias: ['chile', 'colombia', 'Bolivia'],
    mostrarCiudadanias(){
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania);
        });
    }
};

usuario.mostrarCiudadanias();

// En este caso si usasemos una funcion normal en vez de un arrow function ya q el context de this en una funcion es de windows, y nos daria error, pero, al usar una arrow function sabemos q esta no tiene contexto de this, y la hereda, en esta caso hereda de su contenedor que seria mostrar ciudadanias y porsteriormente de usuario.