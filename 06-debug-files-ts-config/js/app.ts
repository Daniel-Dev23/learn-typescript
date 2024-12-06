//? Función anónima auto invocada
(() => {

    console.log('✅ Depuración y configuraciones de TS...');

    try {
        
        //? Fecha Actual
        const currentDate = new Date().getTime();
        //? Fecha Inicial
        const startDate = new Date('2024-06-08').getTime();
        //? Fecha Final
        const endDate = new Date('2024-06-06').getTime();

        //* Valida que la fecha inicial sea mayor a la fecha actual
        if ( startDate > currentDate ) throw new Error('La fecha inicial, no puede ser mayor a la fecha actual');

    } catch (error) {
        console.error('❌ ERROR: ', error);
    }

})();