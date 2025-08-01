//sirve para recorrer listas
let animales = ['perro', 'vaca','loro'];

for (let animal of animales){
    console.log(animal);
}

//lo mismo pero con while
let i=0;
while(i < animales.length){
    console.log(animales[i]);
    i++;
}