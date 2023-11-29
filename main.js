
import distrito from "./Distrito";

const distritos = [
    {
      nombre: 'azul',
      poblacion: 75324,
      votantes: 41311,
      inscriptos: 58665,
    },
    {
      nombre: 'bolivar',
      poblacion: 26242,
      votantes: 23234,
      inscriptos: 31302,
    },
    {
      nombre: 'generalAlvear',
      poblacion: 9812,
      votantes: 6796,
      inscriptos: 8906,
    },
    {
      nombre: 'olavarria',
      poblacion: 126328,
      votantes: 70819,
      inscriptos: 98577,
    },
    {
      nombre: 'roquePerez',
      poblacion: 12513,
      votantes: 8666,
      inscriptos: 11233,
    },
    {
      nombre: 'saladillo',
      poblacion: 23313,
      votantes: 21079,
      inscriptos: 22577,
    },
    {
      nombre: 'tapalque',
      poblacion: 9178,
      votantes: 6782,
      inscriptos: 8724,
    },
    {
      nombre: 'veinticincodeMayo',
      poblacion: 35842,
      votantes: 23609,
      inscriptos: 31527,
    },
  ];
  
  // DECLARANDO ARRAYS PARA PARTIDOS

partidosPoliticos = ["UxP", "Cambiemos", "Fit", "LLA", "Hacemos"];



  // DECLARO ARRAYS PARA CATEGORIAS
categoriasElecciones = ["Presidente", "Gobernador", "Intendente"];


//AGREGO OTRAS CATEGORIAS AL ARRAY

categoriasElecciones.push("Senador Provincial");
categoriasElecciones.push("Concejales");

  

// DECLARANDO FUNCIONES
  function mostrarPartidos(){
  console.log ("Estos son los partidos politicos de la ultima eleccion electoral: ${partidosPoliticos}")
  }

  // INVOCANDO FUNCION

  mostrarPartidos();


// METODO DE FILTRADO PARA BUSCAR DISTRITOS CON MAS DE 70000 VOTANTES
const distritoBuscado = distritos.filter((el) => (el.votantes > 70000));
  
console.log(distritoBuscado);


//interaciones con el usuario
do {
  entrada = prompt('Bienvenido a la consulta sobre la septima seccion electoral' + '\n'
  + "ingresar" + '\n'
  + "salir" + '\n');
  if (entrada !== INGRESAR && entrada !== SALIR) {
      alert('Usted ha ingresado una operacion incorrecta');
  } else {
      if (entrada !== "salir"){

          let consulta = prompt("¿desea conocer los distritos de la septima seccion?")
              if (consulta === "si") {
                for (const distrito of distritos) {
                  alert (`distrito ${distrito.nombre}`)
                }          
          }
              else {
              alert("Hasta luego");}
        }      
      }
      consultaDistrito = prompt("¿desea saber cuales son los distritos con mas de 70000 votantes?")
      if (consultaPorcentaje === "si"){
        const distritoBuscado = distritos.filter((el) => (el.votantes > 70000));
        alert('Distritos con mas de 70000 votantes: ' +distritoBuscado.map(distrito => distrito.nombre).join (', ')); 
      }
      else if (consultaPorcentaje === "no") {
          alert ("Gracias por visitar nuestra web")
      } 
        
         
} while (entrada !== "salir");

alert("Gracias por usar visitar nuestra web!");
