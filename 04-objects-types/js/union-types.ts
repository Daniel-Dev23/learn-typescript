//? Función anónima auto invocada
(() => {

    console.log('✅ Multiples Tipos Permitidos...');
    
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Default Hero'

    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

    //? Definición en string
    myCustomVariable = 'Daniel Gonzalez';
    console.log('STRING: ', myCustomVariable);

    //? Definición en número
    myCustomVariable = 23;
    console.log('NUMBER: ', myCustomVariable);

    //? Definición en héroe
    myCustomVariable = {
        name: 'Danny',
        powers: ['Volar'],
        age: 23
    }
    console.log('HERO: ', myCustomVariable);


})();