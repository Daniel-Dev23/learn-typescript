//? Función anónima auto invocada
(() => {

    console.log('✅ Parámetros Opcionales en Funciones');

    //? Asignación de argumentos en una función
    const fullName = ( firstName: string, lastName?: string ): string => {

        return `${ firstName } ${ lastName || 'No Lastname' }`;

    }

    // const name = fullName('Tony'); // ✅ Esto NO dará un error pues el parámetro es opcional
    const name = fullName('Tony');
    console.log('NAME: ', name);

})();