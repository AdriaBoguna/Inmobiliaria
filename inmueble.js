class Inmueble {
    activo;
    direccion;
    metrosCuadrados;
    #referenciaCatastral;
    precioBase;
    foto;
    estado;
    #coordenadasGeograficas;
    antiguedad;

    get referenciaCatastral() {
        return this.#referenciaCatastral;
    }

    get coordenadasGeograficas() {
        return this.#coordenadasGeograficas;
    }

    activo = true;

    constructor(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadasGeograficas, antiguedad, activo) {
        this.direccion = direccion;
        this.metrosCuadrados = metrosCuadrados;
        this.#referenciaCatastral = referenciaCatastral;
        this.precioBase = precioBase;
        this.foto = foto;
        this.estado = estado;
        this.#coordenadasGeograficas = coordenadasGeograficas;
        this.antiguedad = antiguedad;
        this.activo = activo;
      }

    getInfo() {
        return "Activo: " + this.activo + " | Dirección: " + this.direccion + " | MetrosCuadrados: " + this.metrosCuadrados + " | Referencia Catastral: " + this.referenciaCatastral + " | Precio base: " + this.precioBase + " | Foto: " + this.foto + " | Estado: " + this.estado + " | Coordenadas geográficas: " + this.#coordenadasGeograficas + " | Antiguedad: " + this.antiguedad;
    }

    getTipo() {
        return "Inmueble";
      }

  // Método para calcular el precio final del inmueble
    calcularPrecioFinalInmueble() {
        let precioFinal = this.precioBase;
        if (this.antiguedad > 10 && this.antiguedad < 20) {
          let descuento = Math.min(this.antiguedad - 10, 10) * 0.01;
          precioFinal *= (1 - descuento);
        }
        return precioFinal;
      }


}