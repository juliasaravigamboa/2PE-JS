class distrito {
    nombre;
    poblacion;
    votantes;
    inscriptos;
    resultados;


    constructor(nombre,poblacion, votantes, inscriptos) {
        this.nombre = nombre;
        this.poblacion= poblacion;
        this.votantes = votantes;
        this.inscriptos = inscriptos;
        this.resultados = resultados;
    }
}

// Exportar clase para usarla en otros archivos
export default distrito;