//? Función anoníma auto invocada
(() => {

    //? Definición
    enum AudioLevel {
        min    = 1,
        medium = 5,
        max    = 10
    }

    //? Uso del enum
    let currentAudio = AudioLevel.medium;
    console.log('AUDIO: ', currentAudio);
    console.log('AUDIO LEVEL: ', AudioLevel);

})();