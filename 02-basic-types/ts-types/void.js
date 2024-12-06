"use strict";
//? Función anoníma auto invocada
(() => {
    //? Definición de función tradicional
    function callBatman() { }
    const a = callBatman();
    console.log(a);
    //? Definición de función flecha
    const callSuperman = () => {
        // return true; // ❌ Esto dará un error
    };
    callSuperman();
})();
