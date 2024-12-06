console.log('Ejercicio...');

// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Batimovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

interface Batimovil {
  encender: boolean;
  velocidadMaxima: number;
  acelear (): void
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason{
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGotica {
  ( ciudadanos: string[] ): number
}

const ciudadGotica: CiudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface IPersona {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements IPersona {

  public edad: number;
  public estadoCivil: string;
  public nombre: string;
  public sexo: string;

  constructor ( edad: number, estadoCivil: string, nombre: string, sexo: string ) {
    this.edad = edad;
    this.estadoCivil = estadoCivil;
    this.nombre = nombre;
    this.sexo = sexo;
  }

  imprimirBio() {};

}