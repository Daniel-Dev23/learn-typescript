"use strict";
(() => {
    console.log('✅ Depuración y configuraciones de TS...');
    try {
        const currentDate = new Date().getTime();
        const startDate = new Date('2024-06-08').getTime();
        const endDate = new Date('2024-06-06').getTime();
        if (startDate > currentDate)
            throw new Error('La fecha inicial, no puede ser mayor a la fecha actual');
    }
    catch (error) {
        console.error('❌ ERROR: ', error);
    }
})();
//# sourceMappingURL=main.js.map