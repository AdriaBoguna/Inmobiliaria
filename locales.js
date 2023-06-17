class Local extends Inmueble {
    numVentanas;
    tienePersianaMetalica;
    numVentanales;
    tipoLocal;

    constructor(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadasGeograficas, antiguedad, numVentanas, tienePersianaMetalica, numVentanales, tipoLocal) {
        super(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadasGeograficas, antiguedad);
        this.numVentanas = numVentanas;
        this.tienePersianaMetalica = tienePersianaMetalica;
        this.numVentanales = numVentanales;
        this.tipoLocal = tipoLocal;
    }

    getLocalInfo() {
        return "Dirección: " + this.direccion + " | MetrosCuadrados: " + this.metrosCuadrados + " | Referencia Catastral: " + this.referenciaCatastral + " | Precio base: " + this.precioBase + " | Foto: " + this.foto + " | Estado: " + this.estado + " | Coordenadas geográficas: " + this.coordenadasGeograficas + " | Antiguedad: " + this.antiguedad + " | Número ventanas: " + this.numVentanas + " | Persiana metálica: " + this.tienePersianaMetalica + " | Número ventanales: " + this.numVentanales + " | Tipo local: " + this.tipoLocal;
    }

    getTipo() {
        return "Local";
    }

    calcularPrecioLocal() {
        let precioFinal = super.calcularPrecioFinalInmueble();

        // Incrementar precio por características
        if (this.metrosCuadrados > 50) {
            precioFinal *= 1.01;
        }

        if (this.ventanas <= 1) {
            precioFinal *= 0.98;
        } else if (this.ventanas > 4) {
            precioFinal *= 1.02;
        }
        return precioFinal;
    }

}

class Comercial extends Local {
    adaptados;

    constructor(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadasGeograficas, antiguedad, numVentanas, tienePersianaMetalica, numVentanales, tipoLocal, adaptados) {
        super(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadasGeograficas, antiguedad, numVentanas, tienePersianaMetalica, numVentanales, tipoLocal);
        this.adaptados = false;
    }
    comercialProperties(adaptados) {
        this.adaptados = adaptados;
    }

    getComercialesInfo() {
        return " | Adaptados: " + this.adaptados;
    }

}

class Industrial extends Local {
    tienePuertos;
    tipoSuelo;

    constructor(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadasGeograficas, antiguedad, numVentanas, tienePersianaMetalica, numVentanales, tienePuertos, tipoSuelo) {
        super(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadasGeograficas, antiguedad, numVentanas, tienePersianaMetalica, numVentanales);
        this.tienePuertos = false;
        this.tipoSuelo = "";
    }

    industrialProperties(tienePuertos, tipoSuelo) {
        this.tienePuertos = tienePuertos;
        this.tipoSuelo = tipoSuelo;
    }

    getIndustrialInfo() {
        return "| Tiene puertos: " + this.tienePuertos + " | Tipo suelo: " + this.tipoSuelo;
    }

    //Calcula el precio del local dependiendo del suelo
    calcularPrecioLocalIndustrial() {
        let precioFinal = super.calcularPrecioLocal();

        if (this.tipoSuelo == "urbano") {
            precioFinal *= 1.25;
        }

        return precioFinal;
    }

}

class Restauracion extends Local {
    tieneExtractoraHumo;
    tieneCafetera;
    tieneMobiliario;

    constructor(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadasGeograficas, antiguedad, numVentanas, tienePersianaMetalica, numVentanales, tieneExtractoraHumo, tieneCafetera, tieneMobiliario) {
        super(direccion, metrosCuadrados, referenciaCatastral, precioBase, foto, estado, coordenadasGeograficas, antiguedad, numVentanas, tienePersianaMetalica, numVentanales);
        this.tieneExtractoraHumo = false;
        this.tieneCafetera = false;
        this.tieneMobiliario = false;
    }

    restauracionProperties(tieneExtractoraHumo, tieneCafetera, tieneMobiliario) {
        this.tieneExtractoraHumo = tieneExtractoraHumo;
        this.tieneCafetera = tieneCafetera;
        this.tieneMobiliario = tieneMobiliario;
    }

    getRestauracionInfo() {
        return "| Tiene extractora humo: " + this.tieneExtractoraHumo + " | Tiene cafetera: " + this.tieneCafetera + " | Tiene mobiliario: " + this.tieneMobiliario;
    }

}