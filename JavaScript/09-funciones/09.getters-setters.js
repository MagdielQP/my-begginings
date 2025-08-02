const usuario = {
    nombre: 'magdiel',
    apellido: 'quispe',
    get nombreCompleto() {
        return `${usuario.nombre} ${usuario.apellido}`;
    },
    set nombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

usuario.nombreCompleto = 'josue baez';
console.log(usuario.nombreCompleto);