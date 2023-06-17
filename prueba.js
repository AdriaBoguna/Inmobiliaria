/* AGREGAR INMUEBLES */
let inmob = new Inmobiliaria();

//////////////////  Casa  ////////////////////////////////////
/**direccion || metrosCuadrados || referenciaCatastral || precioBase || foto || estado || coordenadasGeograficas || antiguedad || tipo || número habitaciones || número baños || tiene jardín || metros jardín || tiene piscina**/
const casa1= new Casa("Calle de la Amargor", 350, "0001", 42000, "foto.jpg", "segunda mano", [1.2, 1.3], 10, "pareada", 3, 3, true, 200, true);
const casa2 = new Casa("Calle de la Alegría", 330, "0002", 54300, "foto.jpg", "nuevo", [1.2324, 1.233], 6, "unifamiliar", 6, 2, true, 200, true);
const casa3 = new Casa("Calle de la vida loca", 350, "0003", 92000, "foto.jpg", "a reformar", [2341.2, 1434.3], 3, "comercial", 1, 1, false, 0, true);

// Pruebas de Casa
console.log("casa 1: " + casa1.getCasaInfo());
console.log("casa 2: " + casa2.getCasaInfo());
console.log("casa 3: " + casa3.getCasaInfo());

console.log("Precio final Casa 1:", casa1.calcularPrecioFinalInmueble());
console.log("Precio final Casa 2:", casa2.calcularPrecioFinalInmueble());
console.log("Precio final Casa 3:", casa3.calcularPrecioFinalInmueble());

inmob.altaInmueble(casa1);
inmob.altaInmueble(casa2);
inmob.altaInmueble(casa3);

// Pruebas de Piso
//////////////////  Piso  ////////////////////////////////////
/**direccion || metrosCuadrados || referenciaCatastral || precioBase || foto || estado || coordenadasGeograficas || antiguedad || planta || tieneAscensor || numBanyos || numHabitaciones || tieneTerraza || metrosTerraza**/
const piso1 = new Piso("Calle del Río", 80, "0004", 120000, "foto2.jpg", "segunda mano", [1.2, 1.3], 2, true, 1, 2, true, 10);
console.log("Piso 1:", piso1.getPisoInfo());
console.log("Precio final Piso 1:", piso1.calcularPrecioFinalPiso());

inmob.altaInmueble(piso1);

// Pruebas de Local

//////////////////  Local Comercial  ////////////////////////////////////
const localComercial = new Comercial(true);
/** adaptado **/
localComercial.comercialProperties(true);
/**direccion || metrosCuadrados || referenciaCatastral || precioBase || foto || estado || coordenadasGeograficas || antiguedad || numVentanas || tienePersianaMetalica || numVentanales || tipoLocal**/
const local1 = new Local("Calle del Centro", 150, "0005", 250000, "foto3.jpg", "segunda mano", [1.2, 1.3], 2, 4, true, 5, "comercial");
console.log("Local Comercial: ", local1.getLocalInfo(), localComercial.getComercialesInfo())
console.log("Precio final Local 1:", local1.calcularPrecioLocal());

inmob.altaInmueble(local1);


//////////////////  Local Industrial Suelo Urbano  ////////////////////////////////////
const localIndustrialSueloUrbano = new Industrial("Calle del Coseno", 250, "0006", 150000, "foto4.jpg", "nuevo", [9.6, 2.3], 1, 6, true, 5, "industrial");
/** tienePuertos || tipoSuelo **/
localIndustrialSueloUrbano .industrialProperties(true, "urbano");

/**direccion || metrosCuadrados || referenciaCatastral || precioBase || foto || estado || coordenadasGeograficas || antiguedad || numVentanas || tienePersianaMetalica || numVentanales || tipoLocal**/
const local2 = new Local("Calle del Coseno", 250, "0006", 150000, "foto4.jpg", "nuevo", [9.6, 2.3], 1, 6, true, 5, "industrial");
console.log("Local Industrial: ", local2.getLocalInfo(), localIndustrialSueloUrbano .getIndustrialInfo())
console.log("Precio final Local 2:", localIndustrialSueloUrbano .calcularPrecioLocalIndustrial());

inmob.altaInmueble(local2);


//////////////////  Local Industrial Suelo Industrial  ////////////////////////////////////
const localIndustrialSueloIndustrial = new Industrial("Calle de la Trigonometria", 250, "0007", 150000, "foto5.jpg", "nuevo", [7.3, 0.3], 1, 6, true, 5, "industrial");
/** tienePuertos || tipoSuelo **/
localIndustrialSueloIndustrial.industrialProperties(true, "industrial");

/**direccion || metrosCuadrados || referenciaCatastral || precioBase || foto || estado || coordenadasGeograficas || antiguedad || numVentanas || tienePersianaMetalica || numVentanales || tipoLocal**/
const local3 = new Local("Calle del Coseno", 250, "0006", 150000, "foto4.jpg", "nuevo", [9.6, 2.3], 1, 6, true, 5, "industrial");
console.log("Local Industrial: ", local3.getLocalInfo(), localIndustrialSueloIndustrial.getIndustrialInfo())
console.log("Precio final Local 3:", localIndustrialSueloIndustrial.calcularPrecioLocalIndustrial());

inmob.altaInmueble(local3);


//////////////////  Local Restauracion  ////////////////////////////////////
const localRestauracion = new Restauracion();
/** tieneExtractoraHumo || tieneCafetera || tieneMobiliario **/
localRestauracion.restauracionProperties(true, true, true);

/**direccion || metrosCuadrados || referenciaCatastral || precioBase || foto || estado || coordenadasGeograficas || antiguedad || numVentanas || tienePersianaMetalica || numVentanales || tipoLocal**/
const local4 = new Local("Calle del Seno", 250, "0008", 180000, "foto6.jpg", "nuevo", [5.2, 4.7], 1, 7, true, 6, "restauración");
console.log("Local Restauración: ", local4.getLocalInfo(), localRestauracion.getRestauracionInfo())
console.log("Precio final Local 4:", local4.calcularPrecioLocal());

inmob.altaInmueble(local4);

// DAR DE BAJA INMUEBLES
console.log("Inmuebles antes de baja:", inmob.listarInmuebles());
inmob.bajaInmueble("0001");
console.log("Inmuebles después de baja:", inmob.listarInmuebles());

// MODIFICAR INMUEBLES
console.log("Casa 2 antes de modificar:", casa2);
inmob.modificarInmueble("0002", {precioBase: 60000, numHabitaciones: 5});
console.log("Casa 2 después de modificar:", casa2);

// Listar todos los inmuebles
console.log("Todos los inmuebles:");
console.log(inmob.listarInmuebles());

// Filtrar inmuebles por tipo
console.log("Casas:");
console.log(inmob.listarInmueblesPorTipo("Casa"));

console.log("Pisos:");
console.log(inmob.listarInmueblesPorTipo("Piso"));

console.log("Locales:");
console.log(inmob.listarInmueblesPorTipo("Local"));

// Desactivar un inmueble
console.log("Desactivando casa1...");
inmob.desactivarInmueble("0001");

// Verificar que la casa1 está desactivada
console.log("Casa1 después de desactivar:");
console.log(casa1);
