"use strict";
//? Función anoníma auto invocada
(() => {
    //? Definición
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    //? Uso del enum
    let currentAudio = AudioLevel.medium;
    console.log('AUDIO: ', currentAudio);
    console.log('AUDIO LEVEL: ', AudioLevel);
})();
