//? Función anónima auto invocada
(() => {

    const hero: string = 'Flash';

    //? Definición de función tradicional
    function returnName (): string {
        return hero;
    }

    //? Definición de función flecha
    const activateBatiSignal = (): string => {
        return 'Batiseñal!!!';
    }

    const heroName = returnName();
    console.log('HERO NAME: ', heroName);

})();