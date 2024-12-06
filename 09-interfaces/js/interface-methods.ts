//? Función anónima auto invocada
(() => {

    console.log('✅ Métodos en las interfaces...');

    interface Address {
        id: number,
        zip_code: string,
        city: string,
    }

    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress ( id: string ): string
    }

    const client: Client = {
        name: 'Daniel',
        age: 25,
        address: {
            id: 125,
            zip_code: '1525A',
            city: 'Tijuana'
        },
        getFullAddress( id: string ) {
            return this.address.city
        }
    }

    const client2: Client = {
        name: 'Esmeralda',
        age: 26,
        address: {
            city: 'Tijuana',
            id: 126,
            zip_code: '22245'
        },
        getFullAddress( id: string ) {
            return this.address.city
        }
    }

    // console.log('ESMERALDA: ', client2);

})();