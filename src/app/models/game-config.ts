export class GameConfig {
    nombre: string;
    apellidos: string;
    rango: number;
    intentos: number;
  
    constructor(nombre: string, apellidos: string, rango: number, intentos: number) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.rango = rango;
      this.intentos = intentos;
    }
  }

/*
typescript es el lenguaje que utiliza Angular. Es javascript tipado,
es decir, a los datos se les pone un tipo: 

tipos: 
number,
string, 
boolean,
any (cualquiera),
objetos (persona, animal, GameConfig)




*/