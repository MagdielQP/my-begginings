//como obtener documentos del html
let htmlElemento = document.getElementById('cuerpo');

//HTMLCollection -> se parece a un array pero no lo es!!!
let elementosRed = document.getElementsByClassName('red');

//este devuelve un nodeList "elementosChanchito"
let elementosChanchito = document.getElementsByName('chanchito');

let parrafos =document.getElementsByTagName('p');

// Los siguientes son busquedas muy lentas porque recorren toda la lista , los anteriores son mas rapidos al bucar por el id

//lo siguiente devuelve un HTMLElement -> devuelve solo un elemento
let el = document.querySelector('#cuerpo');

// lo siguiente devuelve una NodeList
let els = document.querySelectorAll('p');

//Diferencia entre HTMLCollection y NodeList
// para ver la diferecia haremos :

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);
console.log(plive, pstatic);

// logramos ver q el cambio del agregado de 'p' se refleja en el HTMLdocument, mientras que en el NodeList no, por lo cual podemos decir que en el primero se reflejan los cambios en "vivo", mientras en el otro necesitariamos volver a realizar un nuevo querySelector...