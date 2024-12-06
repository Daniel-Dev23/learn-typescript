# 🔵 **TypeScript**

Anotaciones sobre el aprendizaje de TypeScript para JavaScript.

## ✅ **Sección 01: Introducción a TypeScript**

### ✨ **¿Qué es TypeScript?**

TypeScript es un superconjunto de JavaScript que añade tipado estático opcional y funciones avanzadas a JavaScript. Ha sido desarrollado por Microsoft y se publicó por primera vez en octubre de 2012. Desde su lanzamiento en 2012, se ha extendido rápidamente entre la comunidad de desarrolladores web.

> Referencia: https://kinsta.com/es/base-de-conocimiento/que-es-typescript/

La idea de TypeScript es la siguiente, veamos esta función:

```js
const calculateAge = (birthday) => {

    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);

}
```

La función `calculateAge`, a simple vista calcula cual es la edad de una persona, a partir de su fecha de cumpleaños. Esto funcionaría sin ningún problema, sin embargo, hay diferentes elementos de la función, que el desarrollador debe inferir por si mismo.

Esto aunmenta la curva de aprendizaje, haciendo que se invierta más esfuerzo de lo esperado, para resolver o interpretar, lo que inicial podría ser algo sencillo.

Otra razón de ser de TypeScript, es porque a JavaScript se hacen falta varíos complementos, tales como:

- Tipado de variables.
- Errores en tiempo de escritura (linter).
- Auto completado dependiendo de variables.
- Clases y módulos (ES6).
- Validación de objetos dentro de objetos.
- Tipado de respuestas HTTP.
- Entre otros.

TypeScript, no se puede ejecutar de lado del navegador. Lo que hace, es transpilar el código de JavaScript, que será compatible con el navegador. Además, de que TS puede incorporar mécanicas más recientes del estándar de JavaScripts.

### ✨ **Instalaciones Recomendadas**

Para seguir el curso al pie de la letra, podemos basarnos de las configuraciones del instructor para tener algo cercano a el.

> Instalaciones: https://gist.github.com/Klerith/384b707f9b08698655280a3d4cc4da12

## ✅ **Sección 02: Iniciando con TypeScript**

### ✨ **Instalación de TypeScript**

Para poder instalar TS, debemos dirigirnos a la página oficial de TypeScript:

- https://www.typescriptlang.org/

Después, en la sección de `download`, tendremos las opciones de descarga. En este caso, haremos la instalación por medio de la NPM. Además, en cuanto a las formas de instalación, tendremos dos opciones:

- Instalar TS por proyecto:

    ```bash
    npm install typescript --save-dev
    ```

- Instalar TS globalmente:

    ```bash
    npm install -g typescript
    ```

Elija la opción que más se adapte a sus necesidades. Cabe decir, que este paso se hará en casos específicos. Si utilizas frameworks como Nest JS, Vue, React, Angular, etc, puede que TS ya venga con todos los complementos configurados.

Si queremos conocer la versión de TS con la que contamos, se ejecuta el siguiente comando:

```bash
tsc --version
```

> La versión reconocida a este día del curso, es la `5.4.5`.

A continuación, se anexará la documentación oficial de TS con ejercicios y ejemplos:

- https://www.typescriptlang.org/docs/handbook/intro.html

### ✨ **Hola Mundo 💙**

El funcionamiento básico de TypeScript consta de lo siguiente:

- Para trabajar con TS, hay que manejar archivos con extensión `.ts`.
- No podemos cargar elementos `.ts` en el HTML del navegador.
- Nosotros podemos estipular lo siguiente:

    ```ts
    let message = 'Hola Mundo 💙';
    ```

    Después, si nosotros redefinimos su valor, no habría ningún problema:

    ```ts
    message = 'Daniel 👦🏻';
    ```

    Sin embargo, si redefinimos el valor a otro diferente a un string, eso dará un error:

    ```ts
    message = 23; // ❌ Esto da un error de tipado
    ```

    Con TS la idea es que podamos utilizar lo siguiente:

    ```ts
    const message: string = 'Hola Mundo 💙';
    ```

- Si queremos transpilar código de TS a JS manualmente, podemos usar el siguiente comando:

    ```bash
    tsc <name_file>.ts
    ```

### ✨ **TSConfig**

El archivo `tsconfig.json`, es la estructura responsable de configurar los complementos necesarios para trabajar con TypeScript. En el podemos añadir o remover las reglas que necesitemos, según la adecuación de nuestro proyecto.

Para generar el archivo, debemos usar el siguiente comando:

    ```bash
    tsc --init
    ```

> Nota: Procure dejar la configuración de TS, lo más estricto que se pueda. Modifique las reglas, siempre y cuando, sepa lo que este haciendo.

### ✨ **Modo Observador**

TypeScript, tiene una configuración especial para poder detectar en tiempo real la transpilación de código de TS a JS.

Para ejecutarlo, debemos usar el siguiente comando:

```bash
tsc --watch
```

## ✅ **Sección 03: Tipos Básicos**

### ✨ **Introducción a los Tipos de Datos**

Una cosa que debemos entender, es que todo lo que se puede hacer en JS, es posible hacerlo en TS. TS, al ser un `super set`, extiende las funcionales de JS, de manera que podamos optimizar nuestros procesos.

En JS, tenemos los siguientes tipos de dato básicos:

- **Primitivos**

    - `String`
    - `Number`
    - `Boolean`
    - `Symbol`

- **Compuestos**

    - `Objetos Literales`
    - `Funciones`
    - `Clases`
    - `Arreglos`

Pero, con TS podemos crear elementos como:

- `Crear Tipos`
- `Interfaces`
- `Genericos`
- `Tuplas`

> Si deseamos aprender más sobre el manejo de tipos de dato en TypeScript, podemos acudir a su documentación oficial: **[TypeScript Docs - Tipos de Dato](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)**.

### ✨ **Inferir Tipos y Modo Estricto** 

En TS, existe la mecánica de *inferir* tipos, ¿De qué se trata? de lo siguiente. Supongamos que tenemos las siguientes variables:

```ts
let fullname = 0;
const age = '';
```

Aparentemente, son dos variables comúnes que nos ayudan a registrar el nombre completo y la edad de un usuario. Sin embargo, si lo dejamos así, estamos haciendo que TS infiera por si mismo el tipo de dato que maneja.

La buena practica, sería que el desarrollador sea quien asigne esa inferencia:

```ts
let fullname: string = '';
const age: number = 0;
```

Incluso, cuando se trate de funciones, también deberiamos establecer las reglas, desde el inicio:

```ts
function ( name: string ) {
    return `Hola mundo ${name}`
}
```

Entre los tipos, existe también la distinción `any`, que sirve para indicar que un valor, puede ser *cualquier cosa*. El uso de este tipo, debe ser usado sabiamente, pues aunque ofrece flexibilidad, también resta control de lo que uno codifica.

También, en JS si queremos hacer que todas nuestras sentencias sean estrictas, podemos utilizar `use strict`.

### ✨ **Booleans**

Para declarar y asignar variables booleanas en TS, se implementa lo siguiente:

```ts
//? Función anoníma auto invocada
(() => {

    let isSuperman: boolean = true; // 👈🏻 Almacena verdadero o falso
    let isBatman: boolean = false;

    console.log('SUPERMAN: ', { isSuperman });
    console.log('BATMAN: ', { isBatman });
    
})();
```

### ✨ **Numbers**

Para declarar y asignar variables numéricos en TS, se implementa lo siguiente:

```ts
//? Función anoníma auto invocada
(() => {

    let avengers: number = 10;
    const villians: number = 20; // 👈🏻 Almacena enteros o decimales

    if ( avengers < villians ) {
        console.log('Estamos en problemas!!! 🥹');
    } else {
        console.log('Todo bajo control 😎');
    }

    console.log('NÚMERO DE AVENGERS: ', { avengers });
    console.log('NÚMERO DE VILLANOS: ', { villians });
    
})();
```

### ✨ **Strings**

Para declarar y asignar variables cadena de texto en TS, se implementa lo siguiente:

```ts
//? Función anoníma auto invocada
(() => {

    //? Formas de definir strings
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(`I'm ${ batman }`);
    console.log( batman.toUpperCase() );

    //? Null check 👇🏻
    console.log( batman[10]?.toUpperCase() );
    
})();
```

### ✨ **Any**

Para declarar y asignar variables "cualquier cosa" en TS, se implementa lo siguiente:

```ts
//? Función anoníma auto invocada
(() => {

    let avenger: any = 123; // 👈🏻 Reprensenta cualquier tipo de dato
    let exists;
    let power;

    avenger = 'Dr. Strange';
    console.log( avenger.charAt(0) ); // 👈🏻 TS omite el intellicense al ser desconocido

    avenger = 150.23546698;
    console.log( avenger.toFixed(2) ); // 👈🏻 TS omite el intellicense al ser desconocido

    console.log( exists );
    console.log( power );
    
})();
```

Existe un técnica en TS, llamado `casting` la cual nos sirve para realizar la conversión de un valor a otro:

```ts
let avenger: any = 123; // 👈🏻 Reprensenta cualquier tipo de dato
avenger = 'Dr. Strange';

//? Casting
console.log('CASTING STRING: ', (avenger as string).charAt(0) );
```

Otra manera de hacerlo, es de la siguiente forma:

```ts
let avenger: any = 123; // 👈🏻 Reprensenta cualquier tipo de dato
avenger = 150.23546698;

//? Casting
console.log('CASTING NUMBER: ', (<number>avenger).toFixed(3) );
```

Estas técnicas de casteo, sirve mucho para complementar o refozar el uso de un `any`.

### ✨ **Arrays**

Para declarar y asignar variables de arreglos en TS, se implementa lo siguiente:

```ts
//? Función anoníma auto invocada
(() => {

    const numbersJS = [1,2,3,4,5,6,7,8,9,10]; // 👈🏻 Definición en JS
    const numbersTS: number[] = [1,2,3,4,5,6,7,8,9,10]; // 👈🏻 Definición en TS

    console.log('NUMBERS_TS: ', numbersTS);

    // numbersTS.push(true) // ❌ Esto dará un error

    //? Arreglos con múltiples tipo de datos
    const arrayTest: (string | number | boolean)[] = [23, 'Daniel', true];

    //? Arreglos de un solo tipo de dato
    const villians: string[] = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(villian => console.log(villian.toUpperCase()));
    
})();
```

### ✨ **Tuplas**

Para declarar y asignar variables de tuplas en TS, se implementa lo siguiente:

```ts
//? Función anoníma auto invocada
(() => {

    //? Definición de una tubla
    const hero: [string, number] = ['Dr. Strange', 100];
    console.log('HERO: ', hero);

    // hero[0] = 50; // ❌ Esto dará un error

})();
```

La diferencia entre un arreglo común de JS y una tupla, es que la tupla específica de manera directa, el orden de los tipos de dato, cosa que en los arreglos el orden de los tipos, es indiferente.

### ✨ **Enumeraciones**

Para declarar y asignar enumeraciones en TS, se implementa lo siguiente:

```ts
//? Función anoníma auto invocada
(() => {

    //? Definición
    enum AudioLevel {
        min    = 1,
        medium = 5,
        max    = 10
    }

    //? Uso del enum
    let currentAudio = AudioLevel.medium;
    console.log('AUDIO: ', currentAudio);
    console.log('AUDIO LEVEL: ', AudioLevel);

})();
```

El rasgo principal de las enumeraciones, es el de poder identificar o interpretar semánticamente, un conjunto de valores que podrían expresar algo en si.

### ✨ **Void (Vacío)**

Para declarar vacíos en TS, se implementa lo siguiente:

```ts
//? Función anoníma auto invocada
(() => {

    //? Definición de función tradicional
    function callBatman (): void {}

    const a = callBatman();
    console.log(a);

    //? Definición de función flecha
    const callSuperman = (): void => {
        // return true; // ❌ Esto dará un error
    }
    callSuperman();

})();
```

La palabra `void`, significa *vacío* y nos sirve para indicar que una función no tiene un retorno en específico. Al asignarlo como `void`, no podemos utilizar un `return`;

### ✨ **Never (Nunca)**

Para declarar *nunca* en TS, se implementa lo siguiente:

```ts
//? Función anoníma auto invocada
(() => {

    const displayError = ( message: string ): never => {

        throw new Error(message);

    }

    displayError('Auxilio 🥹');

})();
```

El tipo `never`, indica que un función NO DEBE finalizar exitosamente.

### ✨ **Null & Undefined**

Para las asignaciones de *null* o *undefined* en TS, se implementa lo siguiente:

```ts
//? Función anoníma auto invocada
(() => {

    //? Asignación de un indefinido
    let nothing: undefined = undefined;
    console.log('INDEFINIDO: ', nothing);

    //? Asignación de un nulo
    let age: (number | null) = null;
    console.log('AGE: ', age);

})();
```

En el `tsconfig.json`, existe la propiedad `strictNullChecks` que permite los valores nulos.

## ✅ **Sección 04: Funciones y Objetos**

### ✨ **Funciones Básicas**

En TS, podemos definir el tipo de retorno que tendrá una función:

```ts
//? Función anónima auto invocada
(() => {

    const hero: string = 'Flash';

    //? Definición de función tradicional
    function returnName (): string {
        return hero;
    }

    //? Definición de función flecha
    const activateBatiSignal = (): string => {
        return 'Batiseñal!!!';
    }

    const heroName = returnName();
    console.log('HERO NAME: ', heroName);

})();
```

### ✨ **Parámetros Obligatorios en Funciones**

En el caso de los argumentos en las funciones, es importante mantener el tipado en esos parámetros, además del tipo de retorno de la función.

```ts
//? Función anónima auto invocada
(() => {

    //? Asignación de argumentos en una función
    const fullName = ( firstName: string, lastName: string ): string => {

        return `${ firstName } ${ lastName }`;

    }

    // const name = fullName('Tony'); // ❌ Esto dará un error pues falta un parámetro
    const name = fullName('Tony', 'Stark');
    console.log('NAME: ', name);

})();
```

Sin embargo, TS no hace infalible al desarrollador ante los errores. TS, lo que hace es validar que el valor sea de cieta forma, desde su definición, pero en ejecución, si debería seguir validandose, para normalizar la información.

### ✨ **Parámetros Opcionales en Funciones**

En el caso de los argumentos en las funciones, si queremos indicar que algún parámetro es opcional, solo debemos usar el signo `?`.

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Parámetros Opcionales en Funciones');

    //? Asignación de argumentos en una función
    const fullName = ( firstName: string, lastName?: string ): string => {

        return `${ firstName } ${ lastName || 'No Lastname' }`;

    }

    // const name = fullName('Tony'); // ✅ Esto NO dará un error pues el parámetro es opcional
    const name = fullName('Tony');
    console.log('NAME: ', name);

})();
```

> **NOTA**: Considere que todos los parámetros opcionales, se definen al final, primero van los requeridos y por defecto.

### ✨ **Parámetros por Defecto**

En el caso de los argumentos por defecto en las funciones, se debe cuidar el orden en que son definidas. Antes, hay que cuestionarse, cuales serán los parámetros requeridos y opcionales.

Imaginemos que tenemos la siguiente función:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Parámetros por Defecto en Funciones');

    //? Asignación de argumentos en una función
    const fullName = ( firstName: string, lastName?: string, upper: boolean ): string => {

        if ( upper ) {
            return `${ firstName } ${ lastName || 'No Lastname' }`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName || 'No Lastname' }`;
        }

    }

    const name = fullName('Tony', 'Stark', true);
    console.log('NAME: ', name);

})();
```

La línea `firstName: string, lastName?: string, upper: boolean`, dará un error, pues `upper` esta siendo marcado como un argumento requedo y no puedes colocar argumentos requeridos, después de un argumento opcional, tendría que colocarse antes:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Parámetros por Defecto en Funciones');

    //? Asignación de argumentos en una función
    const fullName = ( firstName: string, upper: boolean, lastName?: string ): string => {

        if ( upper ) {
            return `${ firstName } ${ lastName || 'No Lastname' }`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName || 'No Lastname' }`;
        }

    }

    const name = fullName('Tony', 'Stark', true);
    console.log('NAME: ', name);

})();
```

Ahora bien, si queremos que `upper`, este enfrente de un parámetros opcional, entonces, tenemos que definirle algo por defecto, solo así funcionaría:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Parámetros por Defecto en Funciones');

    //? Asignación de argumentos en una función
    const fullName = ( firstName: string, lastName?: string,  upper: boolean = false ): string => {

        if ( upper ) {
            return `${ firstName } ${ lastName || 'No Lastname' }`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName || 'No Lastname' }`;
        }

    }

    const name = fullName('Tony', 'Stark', true);
    console.log('NAME: ', name);

})();
```

### ✨ **Parámetros REST**

Los parámetros REST, pueden ayudar a que una función reciba `n` número argumentos para su tratamiento:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Parámetros REST');
    
    //* Solo el primer valor es obligatorio, todos los demás son opcionales
    const fullName = ( firstName: string, ...restArgs: string[] ): string => {
        return `${ firstName } ${ restArgs.join(' ') }`;
    }

    // const superman = fullName('Clark', 'Joseph', 'Kent');
    // const superman = fullName('Clark', 'Kent');
    const superman = fullName('Clark');
    console.log({ superman });

})();
```

### ✨ **Tipo Función**

En TS, existe una técnica para poder definir el tipo de una función, no el tipo de retorno, sino el tipo de origen de la función.

Supongamos que tenemos este código:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Tipo Función');
    
    //? Definición de diferentes tipos de funciones
    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hi ${ name }! 💙`;
    const saveTheWorld = () => `Nos has salvado, estamos agradecidos!!! 👽`;

})();
```

Se han definido un par de funciones con contextos y fines diferentes. Si nosotros definimos algo como `myFunction` es igual a 10, al ejecutarlo, nos dará un 10:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Tipo Función');
    
    //? Definición de diferentes tipos de funciones
    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hi ${ name }! 💙`;
    const saveTheWorld = () => `Nos has salvado, estamos agradecidos!!! 👽`;

    //? Definición de 'myFunction' como 'any'
    let myFunction;

    myFunction = 10; 
    console.log( myFunction ); // 10

})();
```

Esto es normal, sabemos que puede hacerse. Ahora, si a `myFunction` le asignamos `addNumbers` o `greet` o `saveTheWorld`, conseguiremos resultados diferentes:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Tipo Función');
    
    //? Definición de diferentes tipos de funciones
    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hi ${ name }! 💙`;
    const saveTheWorld = () => `Nos has salvado, estamos agradecidos!!! 👽`;

    //? Definición de 'myFunction' como 'any'
    let myFunction;

    myFunction = addNumbers;
    console.log( myFunction(2, 3) ); // 5

    myFunction = greet;
    console.log( myFunction('Daniel') ); // Hi Daniel! 💙

    myFunction = saveTheWorld;
    console.log( myFunction() ); // Nos has salvado, estamos agradecidos!!! 👽

})();
```

Todo esto es gracias a que `myFunction` es un `any`. Sin embargo, en TS podemos especifícar y refinar aún más la función, por ejemplo, colocando el tipo `Function`:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Tipo Función');
    
    //? Definición de diferentes tipos de funciones
    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hi ${ name }! 💙`;
    const saveTheWorld = () => `Nos has salvado, estamos agradecidos!!! 👽`;

    //? Definición de 'myFunction' como 'Function'
    let myFunction: Function;

    myFunction = 10; // ❌ Esto dará un error pues el '10' no es una función

    myFunction = addNumbers;
    console.log( myFunction(2, 3) ); // 5

    myFunction = greet;
    console.log( myFunction('Daniel') ); // Hi Daniel! 💙

    myFunction = saveTheWorld;
    console.log( myFunction() ); // Nos has salvado, estamos agradecidos!!! 👽

})();
```

Ahora, la definición de `Function` es una opción aunque de lo más genérico. Si queremos definir un tipo diferente a `Function`, lo podemos lograr de esta manera:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Tipo Función');
    
    //? Definición de diferentes tipos de funciones
    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hi ${ name }! 💙`;
    const saveTheWorld = () => `Nos has salvado, estamos agradecidos!!! 👽`;

    //? Definición de 'myFunction' como un tipo en específico
    let myFunction: ( a: number, b: number ) => number;

    myFunction = addNumbers;
    console.log( myFunction(2, 3) ); // 5

})();
```

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Tipo Función');
    
    //? Definición de diferentes tipos de funciones
    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hi ${ name }! 💙`;
    const saveTheWorld = () => `Nos has salvado, estamos agradecidos!!! 👽`;

    //? Definición de 'myFunction' como un tipo en específico
    let myFunction: ( name: string ) => string;

    myFunction = greet;
    console.log( myFunction('Daniel') ); // Hi Daniel! 💙

})();
```

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Tipo Función');
    
    //? Definición de diferentes tipos de funciones
    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hi ${ name }! 💙`;
    const saveTheWorld = () => `Nos has salvado, estamos agradecidos!!! 👽`;

    //? Definición de 'myFunction' como un tipo en específico
    let myFunction: () => void;

    myFunction = saveTheWorld;
    console.log( myFunction() ); // Nos has salvado, estamos agradecidos!!! 👽

})();
```

## ✅ **Sección 05: Objetos y Tipos Personalizados**

### ✨ **Objetos Básicos**

En TS los objetos se crean de la misma forma que en JS, pero con TS debemos siempre asegurarnos de definir el tipo de ese objeto y sus propiedades:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Objetos básicos');

    //? Objeto normal
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    //? Manipulación del objeto
    flash = {
        fullname: 'Clark Kent', // ❌ Esto daría un error, debido que `fullname` no existe en el objeto `flash`
    }

})();
```

### ✨ **Crear Tipos Específicos**

Para `tipar` un objeto, es recomendable usar `type` o `interface`, sin embargo, otra manera de hacerlo, es que al objeto le podamos definir las propiedades correspondientes de manera directa:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Objetos básicos');

    //? 👇🏻 Tipado del objeto, sin estas propiedades, `flash` daría error
    let flash: { name: string, age?: number, powers: string[] } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    //? Manipulación del objeto
    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Super Fuerza'],
        // showName () {
        //     return this.name;
        // }
    }

    console.log(flash);

})();
```

> **NOTA: ** Considere que en los objetos (a diferencia de las funciones), el orden de las propiedades, no influyen al ser opcionales.

### ✨ **Métodos Dentro de Objetos**

Si queremos definir funciones, dentro de los objetos, lo hariamos de la siguiente manera:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Objetos básicos');

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    //? Manipulación del objeto
    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Super Fuerza'],
        getName () {
            return this.name;
        }
    }

    console.log(flash);
    console.log(flash.getName?.());

})();
```

### ✨ **Tipos Personalizados**

Si queremos definir a otro héroe con la misma definición, probablemente nos veamos en la necesidad de duplicar el código:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Objetos básicos');

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    let ironman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Tony Stark',
        age: 51,
        powers: ['Volar', 'Rayos Laser', 'Mega Impacto']
    }

})();
```

Pero eso no es práctico, es por eso que resulta mejor, implementar un `type` y reemplazar la definición del objeto, por este `type`:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Objetos básicos');

    //? Centralización de Tipos
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    let ironman: Hero = {
        name: 'Tony Stark',
        age: 51,
        powers: ['Volar', 'Rayos Laser', 'Mega Impacto']
    }

})();
```

De esa manera, queda más limpio y mejor legible. Además de que lo podemos reutilizar, si queremos otro héroe más:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Objetos básicos');

    //? Centralización de Tipos
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    let ironman: Hero = {
        name: 'Tony Stark',
        age: 51,
        powers: ['Volar', 'Rayos Laser', 'Mega Impacto']
    }

    //? Nuevo héroe
    let sayaman: Hero = {
        name: 'Gohan',
        age: 25,
        powers: ['Kame-Kame-Ha', 'Volar', 'Super Fuerza', 'Super Sayagin 2'],
        getName () { return this.name }
    }

    console.log(sayaman);
    console.log(sayaman.getName?.());

})();
```

### ✨ **Multiples Tipos Permitidos**

En TS, le podemos específicar a un objeto que puede tener multiples tipos, de la siguiente manera:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Multiples Tipos Permitidos...');
    
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Default Hero'

    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

    //? Definición en string
    myCustomVariable = 'Daniel Gonzalez';
    console.log('STRING: ', myCustomVariable);

    //? Definición en número
    myCustomVariable = 23;
    console.log('NUMBER: ', myCustomVariable);

    //? Definición en héroe
    myCustomVariable = {
        name: 'Danny',
        powers: ['Volar'],
        age: 23
    }
    console.log('HERO: ', myCustomVariable);


})();
```

## ✅ **Sección 06: Depuración de Archivos y TS Config**

### ✨ **Más Acerca del Tsconfig.json**

Aspectos importantes sobre el `tsconfig.json`:

- Es un archivo raíz que contiene las reglas de configuración para trabajar TypeScript durante el proyecto.
- Las opciones comentadas, son opciones recomendadas para trabajar.
- Podemos realizar más elementos, como especificación del compilador, destino de archivos transpilados. 
- No se recomienda mover tanto en este archivo, a menos que sepan lo que se hace.

### ✨ **Depuración en TypeScript**

En TypeScript, podemos realizar un seguimiento más fino de los errores generados durante el proceso. Desde el navegador, podemos apreciar en donde es que ocurren ciertas fallas. Las depueraciones son posibles, gracias a una propiedad el `tsconfig.json`:

```json
{
    "compilerOptions": {
        "sourceMap": true, /* Create source map files for emitted JavaScript files. */
    }
}
```

Al transpilarlo, esto generará un archivo con extensión `.map` y esto podrá hacer la relación entre cliente y TS.

### ✨ **Remover Comentarios en Archivos de JS**

A la hora de transpilar los archivos, los comentarios también son tomados en cuenta, pero si queremos omitirlos, para que no sumen peso a la transpilación final, solo debemos ir al `tsconfig.json` y activar lo siguiente:

Código que será depurado:
```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Depuración y configuraciones de TS...');

    try {
        
        //? Fecha Actual
        const currentDate = new Date().getTime();
        //? Fecha Inicial
        const startDate = new Date('2024-06-08').getTime();
        //? Fecha Final
        const endDate = new Date('2024-06-06').getTime();

        //* Valida que la fecha inicial sea mayor a la fecha actual
        if ( startDate > currentDate ) throw new Error('La fecha inicial, no puede ser mayor a la fecha actual');

    } catch (error) {
        console.log('❌ ERROR: ', error);
    }

})();
```

Configuración:
```json
{
    "compilerOptions": {
        "removeComments": true, /* Disable emitting comments. */
    }
}
```

### ✨ **Incluir y/o Excluir Archivos**

En la configuración de TS, podemos específicar directorios y archivos a los cuales, podamos incluir o excluir:

Para excluir:
```json
{
    "compilerOptions": {}
    "exclude": [
        "configs"
    ]
}
```

Para incluir:
```json
{
    "compilerOptions": {}
    "include": [
        "js"
    ]
}
```

> **NOTA: ** Esto se configura, después del objeto `compilerOptions`.

### ✨ **Archivos de Salida (Outfile)**

En TS, podemos específicar un archivo archivo de salida, que concentrará toda la transpilación de código de TS a JS:

```json
{
    "compilerOptions": {
        /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
        "outFile": "./main.js",                                  
    }
}
```

> **NOTA**: Cargar un archivo de JS, es más fácil que leer varios archivos separados. Es más lento acceder a esa información.

## ✅ **Sección 07: Carácteristicas de ES6 o JavaScript2015**

### ✨ **Variables LET**

Algo que proviene desde las bases de JS, es el uso de `let` y `var`. En TS, no hay gran diferencia, dado que también siguen usandose las mismas integraciones y restricciones, en el sentido, de que `var` no es recomendado utilizarlo y que `let` es más adecuado siempre.

Al igual que en el manejo de las constantes, no pueden ser reasignadas posteriormente.

### ✨ **Desestructuración de Objetos**

En TS, se puede seguir manejando la técnica para desestructurar propiedades de objetos:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Desestructuración...');

    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    const avengers: Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        active: true,
        power: 10500
    }

    //? Desestructuración
    // const { power, vision } = avengers;
    // console.log(power, vision.toUpperCase());

    // const printAvenger = ( avengers: Avenger ) => {
    //     console.log(avengers.vision);
    // }

    //? Otro tipo de desestructuración
    // const printAvenger = ( { vision }: Avenger ) => {
    //     console.log(vision);
    // }

    //? Otro tipo de desestructuración con REST
    const printAvenger = ( { vision, ...avengerREST }: Avenger ) => {
        console.log(vision);
        console.log(avengerREST);
    }
    printAvenger(avengers);

})();
```

### ✨ **Desestructuración de Arreglos**

En TS, también se puede manejar la desestructuración de arreglos:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Desestructuración de Arreglos...');

    const listAvengers: string[] = ['Capitan América', 'IronMan', 'Hulk', 'Thor'];
    const [ cap, ironman, ] = listAvengers; //? El orden da igual
    
    console.log({ cap, ironman });

})();
```

### ✨ **Ciclos (for-of)**

En TS, podemos también hacer uso de los ciclos y al combinarlo con el tipado a los elementos, logramos mantener el acceso a los elementos dinámicamente:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Ciclo For Of...');

    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Steve Rogers',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Hammer'
    }

    const avengers: Avenger[] = [ironman, captainAmerica, thor];

    for (const avenger of avengers) {
        console.log('AVENGER: ', avenger);
    }

})();
```

### ✨ **Clases en ES6**

El tema con las clases en JS, es que nativamente las clases suelen quedar bastante ambiguos, por ejemplo, esta definición:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Clases ES6...');

    //? Inicialización de clase
    class Avenger {

        //? Definición de propiedades en JS
        name;
        power;

        constructor ( name = 'No Name', power = 0 ) {
            this.name = name;
            this.power = power;
        }

    }

    //? Clase con herencia
    class FlyingAvenger extends Avenger {

        flying;

        constructor ( name, power ) {
            super(name, power);
            this.flying = true;
        }

    }

    //? Instancia
    const ironman = new Avenger('Tony Stark', 10000);
    console.log(ironman);

    const falcon = new FlyingAvenger('Falcon', 2500);
    console.log(falcon);

})();
```

Pero en TS, son un poco diferentes y es algo que se verá más adelante.

## ✅ **Sección 08: Clases en TypeSript**

### ✨ **Definición de Clase Básica en TypeScript**

Forma de definir una clase básica en ts:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Clases básicas...');

    class Avanger {

        private name: string;
        public team: string;
        public realName?: string;
        static avgAge: number = 35;

        constructor ( name: string, team: string, realName?: string ) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    }

    const antman: Avanger = new Avanger('Antman', 'Captain');
    console.log('ANTMAN: ', antman);

    // console.log(Avanger.avgAge); // Es accesible de manera global

})();
```

### ✨ **Forma Corta de Asignar Propiedades**

Forma más corta para definir una clase básica en ts, podría ser de la siguiente manera:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Clases básicas...');

    class Avanger {

        static avgAge: number = 35;

        constructor ( 
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

    }

    const antman: Avanger = new Avanger('Antman', 'Captain', 'Scott Lang');
    console.log('ANTMAN: ', antman);
    console.log('AVG: ', Avanger.avgAge);

    // console.log(Avanger.avgAge); // Es accesible de manera global

})();
```

El constructor, es quien puede servir como base para definir las propiedades que se necesiten.

### ✨ **Métodos Públicos y Privados**

En lo que respecta a métodos, nosotros podemos especificar métodos públicos y privados dentro de la clase, pero también podemos hacer métodos a los que pueden ser accedidos sin hacer una instancia como tal:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Clases básicas...');

    class Avanger {

        // private name: string;
        // public team: string;
        // public realName?: string;
        static avgAge: number = 35;

        //? 👇🏻 Método estático accesible sin instancia
        static getAvgAge () {
            return this.name;
        }

        constructor ( 
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

        //? 👇🏻 Método público dentro de la clase
        public bio () {
            return `${ this.name } (${ this.team })`;
        }

    }

    const antman: Avanger = new Avanger('Antman', 'Captain', 'Scott Lang');
    console.log('ANTMAN: ', antman);
    console.log('AVG: ', Avanger.avgAge);

    console.log('BIO: ', antman.bio());
    console.log('AVG NAME: ', Avanger.getAvgAge());

    // console.log(Avanger.avgAge); // Es accesible de manera global

})();
```

### ✨ **Herencia, Super y Extends**

- Para realizar una herencia, tenemos que utilizar la clausula `extends`.
- Entre los modificadores de acceso, existen lo siguientes:
    - `public`: Se puede acceder desde cualquier lado.
    - `private`: Solo se puede acceder entra la misma clase.
    - `protected`: Solo se puede acceder, siempre y cuando haya una herencia de por medio.
- Al integrar una herencia, la clase hija debe implementar el `super()` lo antes posible.
- Al `super()`, se le tiene que hacer llegar o específicar las propiedades que necesita la clase padre.
- Las propiedades de la clase padre, no necesitan colocarse un modificador de accesos.

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Herencia, super y extends...');

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor avenger llamado...');
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
            console.log('Constructor Xmen llamado...');
        }

        getFullnameFromXmen () {
            console.log(super.getFullname());
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log('XMEN: ', wolverine);
    wolverine.getFullnameFromXmen();

})();
```

### ✨ **Gets y Sets**

- Los getters son funciones de una clase interna que permiten retornar un resultado en particular, además de que son definidos con un `get` al iniciar.
- Los setters son funciones de una clase interna que permiten asignar un valor a algo en específico, además de que son definidos con un `set` al iniciar.
- En ambos casos (getters y setters) puedes aplicar cierta lógica para normalizar la información.

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Herencia, super y extends...');

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor avenger llamado...');
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
            console.log('Constructor Xmen llamado...');
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
    console.log('XMEN: ', wolverine);

    wolverine.fullname = 'Daniel';
    console.log(wolverine.fullname);

})();
```

### ✨ **Clases Abstractas**

Las clases abstractas no se puede instanciar, pero puede servir como base para extender otras clases. Es como un plantilla de métodos y propiedades que pueden delegarse en otros lados.

```ts
//? Función anónima auto invocada
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
    console.log(wolverine);
    console.log(wolverine.salvarMundo());

    const magneto = new Villian('Magneto', 'Magnus');
    console.log(magneto);
    console.log(magneto.conquistarMundo());

    const printName = ( character: Mutante ) => {
        console.log(character.name);
    }

    printName(wolverine)

})();
```

### ✨ **Constructores Privados**

Los constructores privados, ayudan a definir la manera en que otras clases pueden ser instanciadas, es decir, definir que pueden y que no pueden hacer.

```ts
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
```

## ✅ **Sección 09: Interfaces**

### ✨ **Interfaces Básicas**

Las interfaces, ayudan a interpretar las condiciones que un elemento debe cumplir. Es muy parecido a `type` o incluso a un clase, aunque difiere un poco de su sintaxis e intención:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Interfaces básicas');

    //? Centralización de Tipos
    interface Hero {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    let ironman: Hero = {
        name: 'Tony Stark',
        age: 51,
        powers: ['Volar', 'Rayos Laser', 'Mega Impacto']
    }

    let sayaman: Hero = {
        name: 'Gohan',
        age: 25,
        powers: ['Kame-Kame-Ha', 'Volar', 'Super Fuerza', 'Super Sayagin 2'],
        getName () { return this.name }
    }

    console.log(sayaman);
    console.log(sayaman.getName?.());

})();
```

> La diferencia entre una `interface` y `type`, es que las interfaces son extenibles, mientras que los tipos no.

### ✨ **Interfaces Avanzadas**

Si deseamos especificar un objeto, con nieveles aninados, lo recomendable es hacer otra interfaz para ese nivel.

```ts
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

    console.log('ESMERALDA: ', client2);

})();
```

### ✨ **Métodos en la Interfaz**

Para colocar métodos en las interfaces, se hace de las misma manera a como lo hemos visto antes, solo se debe colocar su definición y retorno:

```ts
interface Client {
    name: string,
    age?: number,
    address: Address,
    getFullAddress ( id: string ): string
}
```

### ✨ **Interfaces en Clases**

Para integrar una interfaz en una clase, es necesario utilizar la palabra reservada `implements`:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Clases con interfaz...');

    interface Xmen {
        name: string;
        realName: string;
        mutantPower ( id: number ): string;
    }

    class Mutant implements Xmen {

        public name: string;
        public realName: string;

        constructor ( name: string, realName: string ) {
            this.name = name;
            this.realName = realName;
        }

        mutantPower( id: number ): string {
            return this.name + '' + this.realName;
        }

    }

})();
```

De cierta manera, es como si la interfaz definida, representará un contrato el cual hay que cumplirlo para que no nos de inconvenientes.

También, en una clase podemos implementar multiples interfaces:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Clases con interfaz...');

    interface Xmen {
        name: string;
        realName: string;
        mutantPower ( id: number ): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {

        public age: number;
        public name: string;
        public realName: string;

        constructor ( age: number, name: string, realName: string ) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }

        mutantPower( id: number ): string {
            return this.name + '' + this.realName;
        }

    }

})();
```

### ✨ **Interfaces a Funciones**

En el caso de las funciones, podemos emplearlas, aunque es muy raro:

```ts
//? Función anónima auto invocada
(() => {

    console.log('✅ Interfaces a funciones...');

    interface AddTwoNumbers {
        ( a: number, b: number ): number;
    }

    let addNumbersFunction: AddTwoNumbers;

    addNumbersFunction = ( a: number, b: number ) => {
        return 10;
    }

})();
```

## ✅ **Sección 10: Namespaces**

### ✨ **Crear Namespaces**

Es una característica, que se centra en organizar y estructurar el código, agrupando variables, funciones, clases e interfaces relacionadas bajo un mismo nombre, evitando colisiones de nombres en el ámbito global. Esto es particularmente útil en aplicaciones grandes o cuando se trabaja con bibliotecas que podrían tener nombres de variables o funciones similares.

```ts
namespace Validations {

    export const validateText = ( text: string ): boolean => {
        return ( text.length > 3 ) ? true : false;
    }

    export const validateDate = ( myDate: Date ): boolean => {
        return ( isNaN( myDate.valueOf() ) ) ? true : false;
    }

}

console.log('NAMESPACE: ', Validations.validateText('Daniel'));
```

### ✨ **Imports & Exports**

En TS podemos manejar módulos para crear exportaciones y solicitar importaciones:

```ts
//? Exportación
export class Hero {

    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) {}

}
```

```ts
//? Importaciones
import { Hero } from './classes/Hero';
const ironman = new Hero('Tony Stark', 23, 45);
```


### ✨ **Export Defaul & Export Alias**

En TS, también podemos hacer alias al momento de hacer importaciones:

```ts
import { Hero as SupeHero, Hero2 } from './classes/Hero';
```

El anterior ejemplo lo que hace, es renombrar a `Hero` como `SuperHero`. También podemos hacer algo como:

```ts
import { * as HeroClasses, Hero2 } from './classes/Hero';
```

Que hace que todos los elementos de `Hero`, sean accesibles bajo el nombre de HeroClases.

Si se realizan importaciones por defecto, sería así:

```ts
interface Powers {
    id: number;
    description: string;
}

const listPowers: Powers[] = [
    {
        id: 1,
        name: 'Money'
    },
    {
        id: 2,
        name: 'Drugs'
    }
]

export default listPowers;

import listPowers from './classes/Hero';
```

## ✅ **Sección 11: Genericos**

### ✨ **Acerca de Genericos**

Es una función que puede recibir cualquier tipo de argumento y establecer el tipo de dato que manejará:

```ts
export function genericFunction<T> ( argument: T ): T {
    return argument
}

//? Al momento de usarlo, se miraría así:
console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction('Hola Mundo'.toUpperCase()));
console.log(genericFunction(new Date().getTime()));
```

Según la entrada de la función, definirá el tipo de dato de retorno, con la diferencia de que TS podrá agregar o inferir el tipado de dicho elemento.

Si queremos crear un generic con arrow functions, sería así:

```ts
export const genericFunctionArrow = <T> ( argument: T ) => argument;
```

Otro ejemplo de genéricos, podría ser el siguiente:

```ts
//? Creamos nuestro genérico
export const genericFunctionArrow = <T> ( argument: T ) => argument;

//? Creamos nuestras interfaces
export interface Hero {
    name: string;
    realName: string;
}

export interface Villain {
    name: string;
    dangerLevel: number
}

//? Ahora, creamos un objeto para válidar su estructura
const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 150
}
```

Ahora, si utilizamos la función genérica podemos validar si `deadpool` es de tipo `Hero`:

```ts
console.log(genericFunctionArrow<Hero>(deadpool).name);
console.log(genericFunctionArrow<Hero>(deadpool).realName);
```

Notese que al momento de acceder a las propiedades de `deadpool`, solo visualizamos `name` y `realName` pero no `dangerLevel`, debido a que la interface de `Hero` no lo considerá en si.

Ahora, si usamos de vuelta el genérico para indicar que `deadpool` es un `Villain`:

```ts
console.log(genericFunctionArrow<Villain>(deadpool).name);
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
```

También ocurriría un efecto similar que con `Hero`, solo podremos visualizar las propiedades `name` y `dangerLevel`, pero no `realName`.

### ✨ **QuickType IO**

Es una herramienta que ayuda a generar estructuras como interfaces o tipos en cuestión de segundos:

- Sitio web: https://app.quicktype.io/
- Extensión en VS Code: https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype

## ✅ **Sección 12: Decoradores**

Se trata de una función que se ejecuta en el momento de compilación o transpilación para expandir la funcionalidad de un objeto.

- Documentación de Decoradores: https://www.typescriptlang.org/docs/handbook/decorators.html

### ✨ ****
### ✨ ****
### ✨ ****
