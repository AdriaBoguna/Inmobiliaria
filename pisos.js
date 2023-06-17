class Piso extends Inmueble {
    planta;
    tieneAscensor;
    numBanyos;
    numHabitaciones;
    tieneTerraza;
    metrosTerraza;

    constructor(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadas, planta, tieneAscensor, numBanyos, numHabitaciones, tieneTerraza, metrosTerraza) {
      super(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadas);
      this.planta = planta;
      this.tieneAscensor = tieneAscensor;
      this.numBanyos = numBanyos;
      this.numHabitaciones = numHabitaciones;
      this.tieneTerraza = tieneTerraza;
      this.metrosTerraza = metrosTerraza;
    }

    getPisoInfo() {
      return "Dirección: " + this.direccion + " | m2: " + this.metrosCuadrados + " | Referencia Catastral: " + this.referenciaCatastral + " | Precio base: " + this.precioBase + " | Foto: " + this.foto + " | Estado: " + this.estado + " | Coordenadas geográficas: " + this.coordenadasGeograficas + " | Antiguedad: " + this.antiguedad + " | Plantas: " + this.planta + " | Número habitaciones: " + this.numHabitaciones + " | Número baños: " + this.numBanyos + " | Ascensor: " + this.tieneAscensor + " | Tiene Terraza: " + this.tieneTerraza + " | m2 Terraza: " + this.metrosTerraza;
    }

    getTipo() {
      return "Piso";
    }

  // Método para calcular el precio final del piso
  calcularPrecioFinalPiso() {
    let precioFinal = super.calcularPrecioFinalInmueble();

    if (this.ascensor && this.planta >= 3) {
      precioFinal *= 1.03;
    }
    if (this.tieneTerraza) {
      precioFinal += this.metrosTerraza * 300;
    }
    return precioFinal;
  }
  

}