let el = document.createElement('p');
el.innerText = 'Elemento Creado';

// el metodo de append recibe texto y nodos
document.body.append(el);

// quitar el elemento del dom
el.remove();

// para agregar al comienzo(igual recibe texto y nodos):
document.body.prepend(el);

let div = document.createElement('div');
div.innerHTML = 'Soy un texto';

// reemplazando un texto HTML
el.replaceWith(div);
//forma2 - usando un nodo padre

document.body.replaceChild(el,div); //primer arg: con lo q vamos a reemplazar, segundoa arg: lo q vamos a reemplazar
document.body.removeChild(el);
document.body.appendChild(el);

//colocar un elemento antes de otro elemento
document.body.insertBefore(div,el) //insertamos div antes de el

// insertar elemento de manera adyacente
// inserta antes, despues, etc de la ETIQUETA
document.body.insertAdjacentElement('beforebegin',div);
document.body.insertAdjacentElement('afterbegin',div);
document.body.insertAdjacentElement('beforeend',div);
document.body.insertAdjacentElement('afterend',div);

// otros:
document.body.insertAdjacentHTML();
document.body.insertAdjacentText();

