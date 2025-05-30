const prompt = require("prompt-sync")();
let contactos = [];

function agregarContacto() {
  console.clear();
  console.log("AGREGAR NUEVO CONTACTO");
  let identificacion = prompt("Identificación: ");
  let nombre = prompt("Ingrese el nombre: ");
  let telefono = prompt("Ingrese el número de teléfono: ");
  let correo = prompt("Ingrese el correo electrónico: ");

  let contacto = {
    identificacion: identificacion,
    nombre: nombre,
    telefono: telefono,
    correo: correo,
  };
  contactos.push(contacto);
  console.log("Contacto agregado correctamente.");
}

function consultarContacto() {
  console.clear();
  console.log("CONSULTAR CONTACTO");
  let identificacionBuscar = prompt(
    "Ingrese la identificación del contacto a buscar: "
  );
  const contactoEncontrado = contactos.find(
    (contacto) => contacto.identificacion === identificacionBuscar
  );

  if (contactoEncontrado) {
    console.log("Información del contacto:");
    console.log(`Identificación: ${contactoEncontrado.identificacion}`);
    console.log(`Nombre: ${contactoEncontrado.nombre}`);
    console.log(`Teléfono: ${contactoEncontrado.telefono}`);
    console.log(`Correo electrónico: ${contactoEncontrado.correo}`);
  } else {
    console.log("No se encontró ningún contacto con esa identificación.");
  }
}

function listarContactos() {
  console.clear();
  console.log("LISTA DE CONTACTOS");
  if (contactos.length === 0) {
    console.log("No hay contactos guardados.");
  } else {
    contactos.forEach((contacto, index) => {
      console.log(`1Contacto #${index + 1}:`);
      console.log(`  Identificación: ${contacto.identificacion}`);
      console.log(`  Nombre: ${contacto.nombre}`);
      console.log(`  Teléfono: ${contacto.telefono}`);
      console.log(`  Correo electrónico: ${contacto.correo}`);
    });
  }
}

function eliminarContacto() {
  console.clear();
  console.log("ELIMINAR CONTACTO");
  let identificacionEliminar = prompt(
    "Ingrese la identificación del contacto a eliminar: "
  );
  const indiceContacto = contactos.findIndex(
    (contacto) => contacto.identificacion === identificacionEliminar
  );

  if (indiceContacto !== -1) {
    contactos.splice(indiceContacto, 1);
    console.log("Contacto eliminado correctamente.");
  } else {
    console.log("No se encontró ningún contacto con esa identificación.");
  }
}

function menu() {
  let opcion = 0;
  do {
    console.log("MENU CONTACTOS");
    console.log("1. Agregar contacto");
    console.log("2. Consultar contacto");
    console.log("3. Listar contactos");
    console.log("4. Eliminar contacto");
    console.log("5. Salir");

    opcion = parseInt(prompt("Elija una opción entre 1-5: "));

    switch (opcion) {
      case 1:
        agregarContacto();
        break;
      case 2:
        consultarContacto();
        break;
      case 3:
        listarContactos();
        break;
      case 4:
        eliminarContacto();
        break;
      case 5:
        console.log("Saliendo del programa. ¡Hasta luego!");
        break;
      default:
        console.log(
          "Opción inválida. Por favor, elija una opción entre 1 y 5."
        );
    }
    prompt("Presione Enter para continuar");
    console.clear();
  } while (opcion !== 5);
}

menu();
