"use strict";
//? Función anoníma auto invocada
(() => {
    const displayError = (message) => {
        throw new Error(message);
    };
    displayError('Auxilio 🥹');
})();
