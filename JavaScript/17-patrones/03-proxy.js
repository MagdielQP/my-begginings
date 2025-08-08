// El patrón de diseño Proxy es un patrón estructural que proporciona un sustituto o intermediario para otro objeto, controlando su acceso.
//  Su propósito principal es actuar como una interfaz para un objeto real, permitiendo realizar operaciones adicionales antes o después de que una solicitud llegue al objeto original.

const persona = {
    nombre: "isai quispe",
    edad: 25,
};

const mensajero = new Proxy(persona,{
    get: (objeto, propiedad) => {
        console.log(`El valor es ${Reflect.get(objeto, propiedad)}`);
    },
    set: (objeto, propiedad, valor) => {
        if (!valor) {throw new Error('Necesita un valor');}
        console.log(`Cambiado de ${Reflect.get(objeto, propiedad)} a ${valor}`);
        Reflect.set(objeto, propiedad, valor);
    },
});

mensajero.nombre;
mensajero.nombre = "Magdiel Perez"
mensajero.nombre = "";