// Diferencias entre HTMLCollection entre las NodeList

let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

// accediendo a los elementos de una HTMLCollection
// let item1 = collection.namedItem('chanchito');//por su nombre
// let item2 = collection.item(3); //por su indice
// let item3 = collection[3];

// como iterar estos elementos?, asi:
//forma1
// for (let el of collection) // solo enumera los q tiene indices enumerados
//     console.log(el);

// forma2
// recorremos transformandola en un array
// Array.from(collection).forEach(x => console.log(x));

// forma3
// usando el spred operation para q nos devuelva sus valores:
// [...collection].forEach(x => console.log(x));


// ------------------ Metodos que contienen las NodeList -----
// Accediendo por indices

let item1 = list.item(3);
let item2 = list[3];

// list.forEach(x => console.log(x));

//entries, keys y values

// let entries = list.entries();
// let keys = list.keys();
// let values = list.values();


[...list].forEach(el => console.log(el));