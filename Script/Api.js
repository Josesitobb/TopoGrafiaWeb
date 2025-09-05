// Function para pasar datos a la api
function dataPost(data) {
  console.log(data);
}

// Function para obtener datos de la api
function dataGet() {
  return console.log("data");
}

// Funcion para obtener datos del formulario y despues pasar a la api

function getDataForm() {
  const question1 = document.getElementById("question1").value;
  const question2 = document.getElementById("question2").value;
  const question3 = document.getElementById("question3").value;
  const coordinated = document.getElementById("Coordinated").value;
  const glass = document.getElementById("Glass").value;
  const metal = document.getElementById("Metal").value;
  const paper = document.getElementById("Paper").value;
  const plastic = document.getElementById("Plastic").value;

  if (
    !question1 ||
    !question2 ||
    !question3 ||
    !coordinated ||
    !glass ||
    !metal ||
    !paper ||
    !plastic
  ) {
    return alert("Falta datos mi papacho ");
    // throw Error("Faltan datos porfa llenelos completo");
  }

  console.log("Datos capturados:");
  console.log("Pregunta 1:", question1);
  console.log("Pregunta 2:", question2);
  console.log("Pregunta 3:", question3);
  console.log("Coordenadas:", coordinated);
  console.log("Vidrio:", glass);
  console.log("Metal:", metal);
  console.log("Papel:", paper);
  console.log("Plástico:", plastic);

  // Se crea el objeto para mandarlo a la api
  const data = {
    question1,
    question2,
    question3,
    coordinated,
    glass,
    metal,
    paper,
    plastic,
  };
    dataPost(data);
}
