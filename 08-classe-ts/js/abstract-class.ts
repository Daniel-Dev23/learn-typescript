//? Función anónima auto invocada
(() => {

    console.log('✅ Clases abstractas...');

    abstract class Mutante {

        constructor (
            public name: string,
            public realName: string
        ) {}
        
    }

    class Xmen extends Mutante {

        salvarMundo () {
            return 'Mundo a salvo!';
        }

    }

    class Villian extends Mutante {

        conquistarMundo () {
            return 'Mundo conquistado...';
        }

    }
    
    // const wolwerine = new Mutante('Wolverine', 'Logan');
    
    const wolverine = new Xmen('Wolverine', 'Logan');
    // console.log(wolverine);
    // console.log(wolverine.salvarMundo());

    const magneto = new Villian('Magneto', 'Magnus');
    // console.log(magneto);
    // console.log(magneto.conquistarMundo());

    const printName = ( character: Mutante ) => {
        console.log(character.name);
    }

    // printName(wolverine)

})();