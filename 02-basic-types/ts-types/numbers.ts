//? Función anoníma auto invocada
(() => {

    let avengers: number = 10;
    const villians: number = 20; // 👈🏻 Almacena enteros o decimales

    if ( avengers < villians ) {
        console.log('Estamos en problemas!!! 🥹');
    } else {
        console.log('Todo bajo control 😎');
    }

    console.log('NÚMERO DE AVENGERS: ', { avengers });
    console.log('NÚMERO DE VILLANOS: ', { villians });
    
})();