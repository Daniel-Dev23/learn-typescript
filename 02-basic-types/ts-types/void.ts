//? Función anoníma auto invocada
(() => {

    //? Definición de función tradicional
    function callBatman (): void {}

    const a = callBatman();
    console.log(a);

    //? Definición de función flecha
    const callSuperman = (): void => {
        // return true; // ❌ Esto dará un error
    }
    callSuperman();

})();