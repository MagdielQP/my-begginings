"use.strict"

const definirCompra = (n) => {
    let money = prompt(`dinero de ${n}`)
    if (money >= 0.6 && money < 1 ) {
        let sobra = money - 0.6;
        alert("tu cambio es: " + sobra + "$");
        return (`${n}: helado de agua`);
    }
    if (money >= 1 && money < 1.6 ) {
        let sobra = money - 1;
        alert("tu cambio es: " + sobra + "$");
        return (`${n}: helado de crema`);
    }
    if (money >= 1.6 && money < 1.7 ) {
        let sobra = money - 1.6;
        alert("tu cambio es: " + sobra + "$");
        return (`${n}: helado de heladix`);
    }
    if (money >= 1.7 && money < 1.8 ) {
        let sobra = money - 1.7;
        alert("tu cambio es: " + sobra + "$");
        return (`${n}: helado de heladovich`);
    }
    if (money >= 1.8 && money < 2.9 ) {
        let sobra = money - 1.8;
        alert("tu cambio es: " + sobra + "$");
        return (`${n}: helado de heladovich`);
    }
    if (money >= 2.9 ) {
        let sobra = money - 2.9;
        alert("tu cambio es: " + sobra + "$");
        return (`${n}: helado de confites o bote de 1/4 Kg`);
    }
    else return (`${n}: No te alcanza para ningun helado`);
}

console.log(definirCompra("Junior"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));