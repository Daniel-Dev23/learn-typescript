//? Función anónima auto invocada
(() => {

    console.log('✅ Parámetros REST');
    
    //* Solo el primer valor es obligatorio, todos los demás son opcionales
    const fullName = ( firstName: string, ...restArgs: string[] ): string => {
        return `${ firstName } ${ restArgs.join(' ') }`;
    }

    // const superman = fullName('Clark', 'Joseph', 'Kent');
    // const superman = fullName('Clark', 'Kent');
    const superman = fullName('Clark');
    console.log({ superman });

})();