//? Función anoníma auto invocada
(() => {

    const displayError = ( message: string ): never => {

        throw new Error(message);

    }

    displayError('Auxilio 🥹');

})();