"use strict";
//? Función anónima auto invocada
(() => {
    console.log('✅ Clases abstractas...');
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
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
    const printName = (character) => {
        console.log(character.name);
    };
    // printName(wolverine)
})();
//? Función anónima auto invocada
(() => {
    console.log('✅ Clases básicas...');
    class Avanger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    // private name: string;
    // public team: string;
    // public realName?: string;
    Avanger.avgAge = 35;
    const antman = new Avanger('Antman', 'Captain', 'Scott Lang');
    // console.log('ANTMAN: ', antman);
    // console.log('AVG: ', Avanger.avgAge);
    // console.log('BIO: ', antman.bio());
    // console.log('AVG NAME: ', Avanger.getAvgAge());
    // console.log(Avanger.avgAge); // Es accesible de manera global
})();
//? Función anónima auto invocada
(() => {
    console.log('✅ Herencia, super y extends...');
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            // console.log('Constructor avenger llamado...');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            // console.log('Constructor Xmen llamado...');
        }
        //? Getter
        get fullname() {
            return `${this.name} - ${this.realName}`;
        }
        //? Setter
        set fullname(name) {
            this.name = name;
        }
        getFullnameFromXmen() {
            console.log(super.getFullname());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log('XMEN: ', wolverine);
    wolverine.fullname = 'Daniel';
    // console.log(wolverine.fullname);
})();
//? Función anónima auto invocada
(() => {
    console.log('✅ Consutructores privados...');
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
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
