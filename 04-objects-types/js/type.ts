//? Función anónima auto invocada
(() => {

    console.log('✅ Tipos');

    //? Centralización de Tipos
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    let ironman: Hero = {
        name: 'Tony Stark',
        age: 51,
        powers: ['Volar', 'Rayos Laser', 'Mega Impacto']
    }

    let sayaman: Hero = {
        name: 'Gohan',
        age: 25,
        powers: ['Kame-Kame-Ha', 'Volar', 'Super Fuerza', 'Super Sayagin 2'],
        getName () { return this.name }
    }

    console.log(sayaman);
    console.log(sayaman.getName?.());

})();