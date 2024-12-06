function printToConsole ( constructor: Function ) {
    console.log(constructor);
}

const printToConsoleCondition = ( print: boolean = false ): Function => {

    if ( print ) {
        return printToConsole;
    } else {
        return () => {}
    }

}

const blockPrototype = function ( constructor: Function ) {

    Object.seal(constructor);
    Object.seal(constructor.prototype);

}

function CheckValidPokemonId () {

    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        
        // console.log({ target, propertyKey, descriptor });
        const originalMethod = descriptor.value;

        descriptor.value = ( id: number ) => {

            if ( id < 1 || id > 800 ) {
                return console.log('El ID del pokemon debe estar entre 1 y 800');
            } else {
                return originalMethod(id);
            }

        }

    }

}

function readonly ( isWritable: boolean = true ): Function {

    return function( target: any, propertyKey: string ) {
        // console.log({ target, propertyKey });
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Daniel'
            },
            set( this, val) {
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }

}


@blockPrototype
@printToConsoleCondition(true)
export class Pokemon {

    @readonly()
    public publicApi: string = 'https://pokeapi.co';

    constructor (
        public name: string

    ) {}

    @CheckValidPokemonId()
    savePokemonToDB ( id: number ) {
        console.log('Save pokemon...', id);
    }
 
}