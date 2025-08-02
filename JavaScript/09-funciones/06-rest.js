function suma(a,b, ...rest) {
    console.log(rest);
}

suma(1,2,3,4,5,6);


// ...rest siempre debe ir al ultimo, nos muestra el "resto" de variables aparte de las especificadas en los parametros

// un uso real de esto seria para controlar errores 