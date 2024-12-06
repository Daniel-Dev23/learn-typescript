//? Función anoníma auto invocada
(() => {

    //? Formas de definir strings
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(`I'm ${ batman }`);
    console.log( batman.toUpperCase() );

    //? Null check 👇🏻
    console.log( batman[10]?.toUpperCase() );
    
})();