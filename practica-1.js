
let Datos = [];

function capturarDato() {
  let fila = [
    Datos.length + 1, // Agrega el índice de la fila
    document.getElementById("dato").value,
    document.getElementById("identidad").value,
    document.getElementById("celular").value
  ];
  Datos.push(fila);
  document.getElementById("dato").value = "";
  document.getElementById("identidad").value = "";
  document.getElementById("celular").value = "";
  mostrarValor();
  guardarDatos();
}

function mostrarValor() {
  let resultado = "<table>";
  for (let i = 0; i < Datos.length; i++) {
    resultado += "<tr>";
    for (let j = 0; j < Datos[i].length; j++) {
      resultado += "<td>" + Datos[i][j] + "</td>";
    }
    resultado += "</tr>";
  }
  resultado += "</table>";
  tabla(resultado);
}

function tabla(resultado){

  document.getElementById("resultado").innerHTML = resultado;

  
}


function eliminarPorIndice(indice) {
  Datos.splice(indice, 1); // Elimina el elemento del array
  for (let i = indice; i < Datos.length; i++) { // Reordena los índices restantes
    Datos[i][0] = i + 1;
  }
}

function eliminarDato() {
  let indiceAEliminar = document.getElementById("indice").value - 1; // Resta 1 para obtener el índice del array
  eliminarPorIndice(indiceAEliminar);
  mostrarValor();
  guardarDatos();
}

function guardarDatos() {
  localStorage.setItem("datos", JSON.stringify(Datos));
}

function cargarDatos() {
  let datosGuardados = localStorage.getItem("datos");
  if (datosGuardados) {
    Datos = JSON.parse(datosGuardados);
    mostrarValor();
  }
}

window.onload = function () {
  cargarDatos();
};






















