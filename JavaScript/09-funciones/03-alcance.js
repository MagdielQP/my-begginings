// mismo problema de HOISTING

function alcance() {
    console.log(saludo);
    console.log(vieja);
    console.log(variable);
    console.log(constante);

    function saludo(){};
    var vieja = 'ya no usar';
    let variable = 'hola mundo';
    const constante = 'HOLA MUNDO';
}