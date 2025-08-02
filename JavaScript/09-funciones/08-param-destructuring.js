// nueva implementacion para obtener propiedades en especifico de un objeto

// 1ra forma:
// function webserver(config) {
//     const url = config.url;
//     return url;
// }

// 2da forma:
// function webserver(config) {
//     const {url} = config;
//     return url;
// }

//3ra forma:
// function webserver({ url }) {
//     return url;
// }

// console.log(webserver({ url: 'https://holamundo.io'}));


// Para hacer un destructuring de un objeto:
//si ves la forma en como usamos los parametros en la funcion, si tenemos mas objetos dentro de otros objetos se puede llegar a complicar mucho mas

const config = {
    url: 'https://holamundo.io',
    direccion: {
        calle: 'avaroa',
        numero: 80,
    }
}
// forma 1
// function webserver({url, direccion: { calle }}){
//     console.log(calle);
//     return url;
// }

// forma 2
function webserver(config){
    const { url, ...rest } = config
    console.log(rest);
    return url;
}

console.log(webserver(config));

// en vez de lo anterior seria bueno trabajar con listas 
// const config =[
//     'https://holamundo.io',
//     145,
//     80,
// ]
// forma 1
// function webserver(configuration){
//     const[url, bucket, port] = configuration;
//     return url;
// }

// forma 2
// function webserver([url, bucket, port]){
//     return url;
// }

// console.log(webserver(config));