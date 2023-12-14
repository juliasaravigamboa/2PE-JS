
//import distrito from "./distrito";



const distritos = [
  {
    id: 1,
    nombre: 'Azul',
    poblacion: 75324,
    votantes: 41311,
    inscriptos: 58665,
  },
  {
    id: 2,
    nombre: 'Bolivar',
    poblacion: 26242,
    votantes: 23234,
    inscriptos: 31302,
  },
  {
    id: 3,
    nombre: 'General Alvear',
    poblacion: 9812,
    votantes: 6796,
    inscriptos: 8906,
  },
  {
    id: 4,
    nombre: 'Olavarria',
    poblacion: 126328,
    votantes: 70819,
    inscriptos: 98577,
  },
  {
    id: 5,
    nombre: 'Roque Perez',
    poblacion: 12513,
    votantes: 8666,
    inscriptos: 11233,
  },
  {
    id: 6,
    nombre: 'Saladillo',
    poblacion: 23313,
    votantes: 21079,
    inscriptos: 22577,
  },
  {
    id: 7,
    nombre: 'Tapalque',
    poblacion: 9178,
    votantes: 6782,
    inscriptos: 8724,
  },
  {
    id: 8,
    nombre: 'Veinticinco de Mayo',
    poblacion: 35842,
    votantes: 23609,
    inscriptos: 31527,
  },
];

let tabla = document.getElementById("table");
let selectDistritos = document.getElementById("selectDistrito");

// --------------- Generación del select ---------------

distritos.forEach((distrito, i) => {
  let option = document.createElement("option");
  option.value = distrito.id;
  option.text = distrito.nombre;
  selectDistritos.appendChild(option);
});

// --------------- Lógica para agregar distritos al localStorage ---------------
localStorage.setItem("distritosSeleccionados", JSON.stringify([]));

selectDistritos.addEventListener('change', () => {
  // Obtener la opción seleccionada dentro del elemento seleccionado
  let selectedOption = selectDistritos.options[selectDistritos.selectedIndex];

  // Código que se ejecutará cuando se cambie una opción dentro de la selección
  let distritosSeleccionados = JSON.parse(localStorage.getItem("distritosSeleccionados")) || [];

  let id = selectedOption.value;
  let distrito = distritos[id - 1]

  distritosSeleccionados.push(distrito);

  localStorage.setItem("distritosSeleccionados", JSON.stringify(distritosSeleccionados))

  modifyTable(distrito);
  calculoVotosTotales();
});

// --------------- Lógica para modificar la tabla---------------
function modifyTable(distrito) {
  let tbody = table.getElementsByTagName("tbody")[0];

  // Crear una nueva fila
  let newRow = tbody.insertRow();

  // Agregar celdas a la nueva fila
  let nombre = newRow.insertCell(0);
  let votos = newRow.insertCell(1);

  // Agregar contenido a las celdas
  nombre.innerHTML = distrito.nombre;
  votos.innerHTML = distrito.votantes;
}

// --------------- Calculo de votos totales ---------------

function calculoVotosTotales () {
  let cantidadVotos = 0;
  for (let i = 1; i < tabla.rows.length-1; i++) {
    let votosActuales = parseInt(table.rows[i].cells[1].textContent);
    cantidadVotos += votosActuales;
  }
  
  let totalVotos = document.getElementById("totalVotos");
  
  totalVotos.innerText = "Total: " + cantidadVotos
}

calculoVotosTotales();