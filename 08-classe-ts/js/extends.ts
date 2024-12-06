//? Función anónima auto invocada
(() => {

    console.log('✅ Herencia, super y extends...');

    class Avenger {

        constructor (
            public name: string,
            public realName: string
        ) {
            // console.log('Constructor avenger llamado...');
        }

        protected getFullname () {
            return `${this.name} ${this.realName}`;
        }

    }

    class Xmen extends Avenger {

        constructor (  
            name: string,
            realName: string,
            public isMutant: boolean,
        ) {
            super(name, realName);
            // console.log('Constructor Xmen llamado...');
        }

        //? Getter
        get fullname () {
            return `${ this.name } - ${ this.realName }`;
        }

        //? Setter
        set fullname ( name: string ) {
            this.name = name;
        }

        getFullnameFromXmen () {
            console.log(super.getFullname());
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log('XMEN: ', wolverine);

    wolverine.fullname = 'Daniel';
    // console.log(wolverine.fullname);

})();