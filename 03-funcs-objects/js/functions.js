"use strict";
//? Función anónima auto invocada
(() => {
    const hero = 'Flash';
    //? Definición de función tradicional
    function returnName() {
        return hero;
    }
    //? Definición de función flecha
    const activateBatiSignal = () => {
        return 'Batiseñal!!!';
    };
    const heroName = returnName();
    console.log('HERO NAME: ', heroName);
})();
