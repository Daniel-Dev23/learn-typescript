"use strict";
//? Función anoníma auto invocada
(() => {
    var _a;
    //? Formas de definir strings
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    //? Null check 👇🏻
    console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();
