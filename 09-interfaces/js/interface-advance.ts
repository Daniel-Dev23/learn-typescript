//? Función anónima auto invocada
(() => {

    console.log('✅ Interfaces avanzadas...');

    interface Address {
        id: number,
        zip_code: string,
        city: string,
    }

    interface Client {
        name: string,
        age?: number,
        address: Address
    }

    const client: Client = {
        name: 'Daniel',
        age: 25,
        address: {
            id: 125,
            zip_code: '1525A',
            city: 'Tijuana'
        }
    }

    const client2: Client = {
        name: 'Esmeralda',
        age: 26,
        address: {
            city: 'Tijuana',
            id: 126,
            zip_code: '22245'
        }
    }

    // console.log('ESMERALDA: ', client2);

})();