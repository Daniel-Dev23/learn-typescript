"use strict";
//? Función anónima auto invocada
(() => {
    var _a;
    console.log('✅ Tipos');
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    };
    let ironman = {
        name: 'Tony Stark',
        age: 51,
        powers: ['Volar', 'Rayos Laser', 'Mega Impacto']
    };
    let sayaman = {
        name: 'Gohan',
        age: 25,
        powers: ['Kame-Kame-Ha', 'Volar', 'Super Fuerza', 'Super Sayagin 2'],
        getName() { return this.name; }
    };
    console.log(sayaman);
    console.log((_a = sayaman.getName) === null || _a === void 0 ? void 0 : _a.call(sayaman));
})();
