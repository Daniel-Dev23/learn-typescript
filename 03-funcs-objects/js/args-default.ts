//? Función anónima auto invocada
(() => {

    console.log('✅ Parámetros por Defecto en Funciones');

    //? Asignación de argumentos en una función
    const fullName = ( firstName: string, lastName?: string, upper: boolean = false ): string => {

        if ( upper ) {
            return `${ firstName } ${ lastName || 'No Lastname' }`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName || 'No Lastname' }`;
        }

    }

    const name = fullName('Tony', 'Stark', true);
    console.log('NAME: ', name);

})();