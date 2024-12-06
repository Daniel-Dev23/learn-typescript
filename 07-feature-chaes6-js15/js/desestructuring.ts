//? Función anónima auto invocada
(() => {

    console.log('✅ Desestructuración de Objetos...');

    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    const avengers: Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        power: 10500
    }

    //? Desestructuración
    // const { power, vision } = avengers;
    // console.log(power, vision.toUpperCase());

    const printAvenger = ( avengers: Avenger ) => {
        console.log(avengers.vision);
    }

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

    const listAvengers: string[] = ['Capitan América', 'IronMan', 'Hulk', 'Thor'];
    const [ cap, ironman, ] = listAvengers; //? El orden da igual
    
    console.log({ cap, ironman });

})();