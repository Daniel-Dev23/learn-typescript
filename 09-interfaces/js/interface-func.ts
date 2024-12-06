//? Función anónima auto invocada
(() => {

    console.log('✅ Interfaces a funciones...');

    interface AddTwoNumbers {
        ( a: number, b: number ): number;
    }

    let addNumbersFunction: AddTwoNumbers;

    addNumbersFunction = ( a: number, b: number ) => {
        return 10;
    }

})();