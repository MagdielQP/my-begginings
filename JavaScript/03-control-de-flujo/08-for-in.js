//iterar las propiedades de un objeto

let user ={
    id: 1,
    name: 'julio',
    age: 21,
};

for (let prop in user){
    console.log(prop, user[prop]);
}

//iterar y aladir contador a las listas

let animales = ['canguro', 'koala', 'avestruz']

for (let indice in animales){
    console.log(indice, animales[indice]);
}