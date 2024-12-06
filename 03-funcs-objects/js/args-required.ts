//? Función anónima auto invocada
(() => {

    //? Asignación de argumentos en una función
    const fullName = ( firstName: string, lastName: string ): string => {

        return `${ firstName } ${ lastName }`;

    }

    // const name = fullName('Tony'); // ❌ Esto dará un error pues falta un parámetro
    const name = fullName('Tony', 'Stark');
    console.log('NAME: ', name);

})();