//? Función anoníma auto invocada
(() => {

    let isSuperman: boolean = true; // 👈🏻 Almacena verdadero o falso
    let isBatman: boolean = false;

    console.log('SUPERMAN: ', { isSuperman });
    console.log('BATMAN: ', { isBatman });
    
})();