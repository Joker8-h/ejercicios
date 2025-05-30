const cuentas = [];
let consecutivo = 1;

function obtenerFechaActual() {
  return new Date().toISOString().split('T')[0];
}

function crearCuenta() {
  const anio = new Date().getFullYear();
  const codigo = `${anio}-${consecutivo++}`;
  cuentas.push({ codigo, fecha: obtenerFechaActual(), saldo: 0 });
  Document(`Cuenta creada: ${codigo}`);
}

function consignarCuenta(codigo, valor) {
  const cuenta = cuentas.find(c => c.codigo === codigo);
  if (cuenta) cuenta.saldo += valor;
}

function retirarCuenta(codigo, valor) {
  const cuenta = cuentas.find(c => c.codigo === codigo);
  if (cuenta && cuenta.saldo >= valor) cuenta.saldo -= valor;
}

function consultarCuenta(codigo) {
  return cuentas.find(c => c.codigo === codigo);
}

function listarCuentas() {
  Document(cuentas);
}

function menuBanco() {
  let opcion;
  do {
    opcion = prompt("MENÚ BANCO ADSO\n1. Crear Cuenta\n2. Consignar Cuenta\n3. Retirar Cuenta\n4. Consultar Cuenta Por Código\n6. Listar Cuentas\n7. Salir");
    switch (opcion) {
      case "1":
        crearCuenta();
        break;
      case "2":
        let cod1 = prompt("Código cuenta:");
        let valor1 = parseFloat(prompt("Valor a consignar:"));
        consignarCuenta(cod1, valor1);
        break;
      case "3":
        let cod2 = prompt("Código cuenta:");
        let valor2 = parseFloat(prompt("Valor a retirar:"));
        retirarCuenta(cod2, valor2);
        break;
      case "4":
        let cod3 = prompt("Código cuenta:");
        Document(consultarCuenta(cod3));
        break;
      case "6":
        listarCuentas();
        break;
    }
  } while (opcion !== "7");
}