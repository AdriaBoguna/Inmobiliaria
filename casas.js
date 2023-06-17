// Definición de la clase Casa que hereda de Inmueble
class Casa extends Inmueble {
  tipo = "";
  numHabitaciones = 0;
  numBanyos = 0;
  tieneJardin = false;
  metrosJardin = 0;
  tienePiscina = false;

  constructor(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadas, tipo, numHabitaciones, numBanyos, tieneJardin, metrosJardin, tienePiscina ) {
    super(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadas);
    this.tipo = tipo;
    this.numHabitaciones = numHabitaciones;
    this.numBanyos = numBanyos;
    this.tieneJardin = tieneJardin;
    this.metrosJardin = metrosJardin;
    this.tienePiscina = tienePiscina;
  }
  
  getCasaInfo() {
    return "Dirección: " + this.direccion + " | m2: " + this.metrosCuadrados + " | Ref. Catastral: " + this.referenciaCatastral + " | Precio base: " + this.precioBase + " | Foto: " + this.foto + " | Estado: " + this.estado + " | Coordenadas geográficas: " + this.coordenadas + " | Antiguedad: " + this.antiguedad + " | Tipo: " + this.tipo + " | Número habitaciones: " + this.numHabitaciones + " | Número baños: " + this.numBanyos + " | Jardín: " + this.tieneJardin + " | m2 Jardin " + this.metrosJardin + " | Piscina: " + this.tienePiscina;    
  }
  getTipo() {
    return "Casa";
  }
  
  // Método para calcular el precio final de la casa
  calcularPrecioFinalCasa() {
    let precioFinal = super.calcularPrecioFinal();

    if (this.tieneJardin) {
      if (this.metrosJardin > 250) {
        precioFinal *= 1.09;
      } else if (this.metrosJardin > 100) {
        precioFinal *= 1.05;
      }
      if (this.piscina) {
        precioFinal *=1.04;
      }
      return precioFinal;
    }
  }
}
