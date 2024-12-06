"use strict";
//? Función anónima auto invocada
(() => {
    console.log('✅ Parámetros por Defecto en Funciones');
    //? Asignación de argumentos en una función
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No Lastname'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No Lastname'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log('NAME: ', name);
})();
