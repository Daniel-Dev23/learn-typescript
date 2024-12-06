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