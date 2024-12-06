"use strict";
//? Función anónima auto invocada
(() => {
    console.log('✅ Tipo Función');
    //? Definición de diferentes tipos de funciones
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hi ${name}! 💙`;
    const saveTheWorld = () => `Nos has salvado, estamos agradecidos!!! 👽`;
    //? Definición de 'myFunction' como 'any'
    // let myFunction;
    //? Definición de 'myFunction' como 'Function'
    // let myFunction: Function;
    //? Definición de 'myFunction' como un tipo en específico
    // let myFunction: ( a: number, b: number ) => number;
    // let myFunction: ( name: string ) => string;
    let myFunction;
    // myFunction = 10; // ❌ Esto dará un error pues el '10' no es una función
    // console.log( myFunction ); // 10
    // myFunction = addNumbers;
    // console.log( myFunction(2, 3) ); // 5
    // myFunction = greet;
    // console.log( myFunction('Daniel') ); // Hi Daniel! 💙
    // myFunction = saveTheWorld;
    // console.log( myFunction() ); // Nos has salvado, estamos agradecidos!!! 👽
})();
