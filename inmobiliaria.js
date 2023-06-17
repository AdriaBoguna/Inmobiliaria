class Inmobiliaria{
    inmuebles = [];

    constructor(){
        this.inmuebles=[];
    }

    altaInmueble(inmueble) {
        this.inmuebles.push(inmueble);
    }

    bajaInmueble(referenciaCatastral) {
        const indice = this.inmuebles.findIndex(inmueble => inmueble.referenciaCatastral === referenciaCatastral);
        if (indice !== -1) {
            this.inmuebles.splice(indice, 1);
        }
    }

    modificarInmueble(referenciaCatastral, campos) {
        const inmueble = this.inmuebles.find(inm => inm.referenciaCatastral === referenciaCatastral);
        if (inmueble) {
            Object.assign(inmueble, campos);
        }
    }
    listarInmuebles() {
        return this.inmuebles;
    }
    
    listarInmueblesPorTipo(tipo) {
        return this.inmuebles.filter((inmueble) => inmueble.getTipo() === tipo);
    }

    desactivarInmueble(referenciaCatastral) {
        const inmueble = this.inmuebles.find(
            (inm) => inm.referenciaCatastral === referenciaCatastral
        );
        if (inmueble) {
            inmueble.activo = false;
        }
    }
}