"use strict";
//? Función anoníma auto invocada
(() => {
    let avengers = 10;
    const villians = 20; // 👈🏻 Almacena enteros o decimales
    if (avengers < villians) {
        console.log('Estamos en problemas!!! 🥹');
    }
    else {
        console.log('Todo bajo control 😎');
    }
    console.log('NÚMERO DE AVENGERS: ', { avengers });
    console.log('NÚMERO DE VILLANOS: ', { villians });
})();
