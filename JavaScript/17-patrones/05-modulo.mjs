// Este patrón permite agrupar elementos relacionados, como clases, singletons y métodos, utilizados globalmente, en una entidad única, proporcionando una interfaz pública clara y manejable mientras mantiene el ámbito de las variables y funciones privadas dentro del módulo

// para esta parte necesitaremos usar  el .mjs

import * as modulo from './05-1-modulo1.mjs';

modulo.cuadrado(2);
modulo.removerDuplicados([1,2,3,4]);