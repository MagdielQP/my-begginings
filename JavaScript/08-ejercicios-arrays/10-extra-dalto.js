const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["juan", "pedro", "maria", "luis", "sebastian"],
        programacion: ["isai", "pedro", "luis", "sebastian"],
        logica: ["magdiel", "pedro", "maria", "sebastian"],
        quimica: ["andres", "pedro", "maria", "luis"],
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia];
    }else{
        return materias;
    }
}

const mostrarInformacion = materia => {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b>${profesor}</b><br>, y sus alumnos son:<b>${alumnos}</b><br><br>`);
    }
}

const cantidadDeClases = alumno => {
    let informacion = obtenerInformacion();
    let cantidad = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)) {
            cantidad++;
        }
    }
    return `<b>${alumno}</b> esta en: <b>${cantidad}</b> clases <br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("pedro"));
document.write(cantidadDeClases("maria"));
document.write(cantidadDeClases("luis"));
document.write(cantidadDeClases("sebastian"));