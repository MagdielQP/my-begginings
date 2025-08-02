// para colocar un parametro por default si es q no meten parametros al momento de invocar la funcion hacemos:

// function configurarAPI(url = 'https://holamundo.io'){
//     return `${url}`;
// }

// console.log(configurarAPI());
// console.log(configurarAPI('https://chaomundo.io'));

// si queremos trabajar con un objeto:
// const config = {
//     url: 'https://holamundo.io',
// }


// aqui vemos los parametros por default cuando hay valores q no nos mandan al llamar

function configurarAPI(url, bucket = 145, port = 80){
    return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI('holamundo.io'));