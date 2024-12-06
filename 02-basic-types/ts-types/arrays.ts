//? Función anoníma auto invocada
(() => {

    const numbersJS = [1,2,3,4,5,6,7,8,9,10]; // 👈🏻 Definición en JS
    const numbersTS: number[] = [1,2,3,4,5,6,7,8,9,10]; // 👈🏻 Definición en TS

    console.log('NUMBERS_TS: ', numbersTS);

    // numbersTS.push(true) // ❌ Esto dará un error

    //? Arreglos con múltiples tipo de datos
    const arrayTest: (string | number | boolean)[] = [23, 'Daniel', true];

    //? Arreglos de un solo tipo de dato
    const villians: string[] = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(villian => console.log(villian.toUpperCase()));
    
})();