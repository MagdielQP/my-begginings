// El patrón de diseño Singleton es un patrón creacional que garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.

//se usa para guardar estados globalmente


let contar = 0;

const contador = {

    getInstancia(){
        return this;
    },

    getContar(){
        return contar;
    },

    incrementar(){
        return ++contar;
    },
}

Object.freeze(contador);

export { contador };
