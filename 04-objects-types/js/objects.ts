//? Función anónima auto invocada
(() => {

    console.log('✅ Objetos básicos');

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    let ironman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Tony Stark',
        age: 51,
        powers: ['Volar', 'Rayos Laser', 'Mega Impacto']
    }

    

    console.log(flash);


})();