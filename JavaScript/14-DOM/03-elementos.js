let el = document.createElement('p');

//con este podemos colocar texto e incluso texto en html(<ul><li>Holaaaa</li></ul>)
el.innerHTML = "Elemento Creado";

//con el siguiente solo introducimos texto, no podemos ingresar html con este:
document.body.append(el);
el.innerText = "Esto solo es un texto";

// añadir estilos
el.style = 'background-color: red; font-weight: bold'
el.className = 'parrafo';
//lo siguiente no sirve
// el.id = 'mi-parrafo'


//como agregar una propiedad personalizada:
el.setAttribute('miPropiedad', 'mi propiedad');

//como obtener el valor de un atributo:
el.getAttribute('miPropiedad');
el.hasAttribute('miPropiedad');
