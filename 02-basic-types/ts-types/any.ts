//? Función anoníma auto invocada
(() => {

    let avenger: any = 123; // 👈🏻 Reprensenta cualquier tipo de dato
    let exists;
    let power;

    avenger = 'Dr. Strange';
    console.log( avenger.charAt(0) ); // 👈🏻 TS omite el intellicense al ser desconocido
    
    //? Casting
    console.log('CASTING STRING: ', (avenger as string).charAt(0) );
    
    avenger = 150.23546698;
    console.log( avenger.toFixed(2) ); // 👈🏻 TS omite el intellicense al ser desconocido
    console.log('CASTING NUMBER: ', (<number>avenger).toFixed(3) );

    console.log( exists );
    console.log( power );

    
})();