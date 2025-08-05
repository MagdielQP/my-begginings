let form = document.createElement('form');
form.id = "mi-formulario";
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input);
form.append(btn);

document.body.append(form);

// evento q se gatilla cuando el usuario pasa el mouse encima del formulario
form.onmouseenter = e => {
    console.log('entra el mouse', e);
}

form.onmouseleave = e => {
    console.log('sale el mouse', e);
}

input.onfocus = e => {
    console.log('foco en el input', e);
}

input.onblur = e => {
    console.log('input perdio el foco', e);
}

input.onchange = e => {
    console.log('valor cambia', e.target.value);
}

btn.onclick = e => {
    e.preventDefault();// esto detiene el comportamiento por defecto del formulario que es q la pagina se refresque
    console.log('boton clickeado');
}
// los iguiente es lo mismo que el .onclick
btn.addEventListener('click', e =>{
    e.preventDefault();
    console.log('boton clickeado2');
})