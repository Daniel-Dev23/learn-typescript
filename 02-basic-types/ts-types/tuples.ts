//? Función anoníma auto invocada
(() => {

    //? Definición de una tubla
    const hero: [string, number] = ['Dr. Strange', 100];
    console.log('HERO: ', hero);

    // hero[0] = 50; // ❌ Esto dará un error

})();