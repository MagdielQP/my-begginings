function saludar(...rest){
    console.log(this, rest);
}

saludar.call({propiedad: 'hola mundo'},1 ,5);
saludar.apply({propiedad: 'hola mundo'},[1 ,5]);
saludar.bind({propiedad: 'hola mundo'})(3, 4);