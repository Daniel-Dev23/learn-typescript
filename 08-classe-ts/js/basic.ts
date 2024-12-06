//? Función anónima auto invocada
(() => {

    console.log('✅ Clases básicas...');

    class Avanger {

        // private name: string;
        // public team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge () {
            return this.name;
        }

        constructor ( 
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

        public bio () {
            return `${ this.name } (${ this.team })`;
        }

    }

    const antman: Avanger = new Avanger('Antman', 'Captain', 'Scott Lang');
    // console.log('ANTMAN: ', antman);
    // console.log('AVG: ', Avanger.avgAge);

    // console.log('BIO: ', antman.bio());
    // console.log('AVG NAME: ', Avanger.getAvgAge());
    // console.log(Avanger.avgAge); // Es accesible de manera global

})();