"use strict";
console.log('Ejercicio...');
// Crear interfaces
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(edad, estadoCivil, nombre, sexo) {
        this.edad = edad;
        this.estadoCivil = estadoCivil;
        this.nombre = nombre;
        this.sexo = sexo;
    }
    imprimirBio() { }
    ;
}
//? Función anónima auto invocada
(() => {
    console.log('✅ Interfaces avanzadas...');
    const client = {
        name: 'Daniel',
        age: 25,
        address: {
            id: 125,
            zip_code: '1525A',
            city: 'Tijuana'
        }
    };
    const client2 = {
        name: 'Esmeralda',
        age: 26,
        address: {
            city: 'Tijuana',
            id: 126,
            zip_code: '22245'
        }
    };
    // console.log('ESMERALDA: ', client2);
})();
//? Función anónima auto invocada
(() => {
    console.log('✅ Interfaces básicas');
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    };
    let ironman = {
        name: 'Tony Stark',
        age: 51,
        powers: ['Volar', 'Rayos Laser', 'Mega Impacto']
    };
    let sayaman = {
        name: 'Gohan',
        age: 25,
        powers: ['Kame-Kame-Ha', 'Volar', 'Super Fuerza', 'Super Sayagin 2'],
        getName() { return this.name; }
    };
    // console.log(sayaman);
    // console.log(sayaman.getName?.());
})();
//? Función anónima auto invocada
(() => {
    console.log('✅ Clases con interfaz...');
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + '' + this.realName;
        }
    }
})();
//? Función anónima auto invocada
(() => {
    console.log('✅ Interfaces a funciones...');
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//? Función anónima auto invocada
(() => {
    console.log('✅ Métodos en las interfaces...');
    const client = {
        name: 'Daniel',
        age: 25,
        address: {
            id: 125,
            zip_code: '1525A',
            city: 'Tijuana'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Esmeralda',
        age: 26,
        address: {
            city: 'Tijuana',
            id: 126,
            zip_code: '22245'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    // console.log('ESMERALDA: ', client2);
})();
