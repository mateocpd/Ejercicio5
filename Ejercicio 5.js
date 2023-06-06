// Clase Persona
class Persona {
    constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  
    getDetalles() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Apellido: ${this.apellido}`);
      console.log(`Edad: ${this.edad}`);
    }
  }
  
  // Clase Jugador que hereda de Persona
  class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion) {
      super(nombre, apellido, edad);
      this.posicion = posicion;
    }
  
    getDetalles() {
      super.getDetalles();
      console.log(`Posición: ${this.posicion}`);
    }
  }
  
  // Clase Entrenador que hereda de Persona
  class Entrenador extends Persona {
    constructor(nombre, apellido, edad, experiencia, idFederacion) {
      super(nombre, apellido, edad);
      this.experiencia = experiencia;
      this.idFederacion = idFederacion || Math.floor(Math.random() * 90000) + 10000;
    }
  
    getDetalles() {
      super.getDetalles();
      console.log(`Experiencia: ${this.experiencia} años`);
      console.log(`ID de Federación: ${this.idFederacion}`);
    }
  }
  
  // Clase Equipo
  class Equipo {
    constructor(entrenador, jugadores) {
      this.entrenador = entrenador;
      this.jugadores = jugadores;
    }
  
    getDetalles() {
      console.log("Detalles del Entrenador:");
      this.entrenador.getDetalles();
      console.log("Detalles de los Jugadores:");
      console.log("-----------------------------");

      this.jugadores.forEach((jugador) => {
        jugador.getDetalles();
        console.log("-----------------------------");
      });
    }
  }
  
  // Crear jugadores
  const jugadores = [
    new Jugador("Emiliano", "Martinez", 30, "Portero"),
    new Jugador("Cristian", "Romero", 25, "Defensa"),
    new Jugador("Rodrigo", "De Paul", 29, "Medio"),
    new Jugador("Leonel", "Messi", 35, "Delantero"),
  ];
  
  // Crear entrenador
  const entrenador = new Entrenador("Lionel", "Scaloni", 45, 15);
  
  // Crear equipo
  const equipo = new Equipo(entrenador, jugadores);
  
  // Mostrar detalles del equipo
  equipo.getDetalles();