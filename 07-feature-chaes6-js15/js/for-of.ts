//? Función anónima auto invocada
(() => {

    console.log('✅ Ciclo For Of...');

    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Steve Rogers',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Hammer'
    }

    const avengers: Avenger[] = [ironman, captainAmerica, thor];

    for (const avenger of avengers) {
        console.log('AVENGER: ', avenger);
    }

})();