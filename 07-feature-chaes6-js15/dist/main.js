"use strict";
//? Función anónima auto invocada
(() => {
    console.log('✅ Desestructuración de Objetos...');
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        power: 10500
    };
    //? Desestructuración
    // const { power, vision } = avengers;
    // console.log(power, vision.toUpperCase());
    const printAvenger = (avengers) => {
        console.log(avengers.vision);
    };
    //? Otro tipo de desestructuración
    // const printAvenger = ( { vision }: Avenger ) => {
    //     console.log(vision);
    // }
    //? Otro tipo de desestructuración con REST
    // const printAvenger = ( { vision, ...avengerREST }: Avenger ) => {
    //     console.log(vision);
    //     console.log(avengerREST);
    // }
    printAvenger(avengers);
    //* ---------------------
    console.log('✅ Desestructuración de Arreglos...');
    const listAvengers = ['Capitan América', 'IronMan', 'Hulk', 'Thor'];
    const [cap, ironman,] = listAvengers; //? El orden da igual
    console.log({ cap, ironman });
})();
//? Función anónima auto invocada
(() => {
    console.log('✅ Ciclo For Of...');
    const ironman = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    };
    const captainAmerica = {
        name: 'Steve Rogers',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Hammer'
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log('AVENGER: ', avenger);
    }
})();
//? Función anónima auto invocada
(() => {
    console.log('✅ Variables LET');
    let fullname = 'Daniel Gonzalez';
    const age = 23;
    console.log({ fullname, age });
})();
