class distrito {
    id;
    nombre;
    poblacion;
    votantes;
    inscriptos;
    resultados;


    constructor(id, nombre, poblacion, votantes, inscriptos) {
        this.id = id;
        this.nombre = nombre;
        this.poblacion= poblacion;
        this.votantes = votantes;
        this.inscriptos = inscriptos;
        this.resultados = resultados;
    }
}

// Exportar clase para usarla en otros archivos
export default distrito;