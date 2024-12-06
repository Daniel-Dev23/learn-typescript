//? Función anónima auto invocada
(() => {

    console.log('✅ Consutructores privados...');

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor ( public name: string ) {}

        static callApocalipsis (): Apocalipsis {
            if ( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis, el único...');
            }

            return Apocalipsis.instance;
        }

    }

    // const apocalipsis = new Apocalipsis('Soy apocalipsis... el único');
    // const apocalipsis2 = new Apocalipsis('Soy apocalipsis2... el único');
    // const apocalipsis3 = new Apocalipsis('Soy apocalipsis3... el único');

    const apocalipsis1 = Apocalipsis.callApocalipsis();

})();