function reemplazarValor(arreglo, valorViejo, valorNuevo) {
  return arreglo.map(v => v === valorViejo ? valorNuevo : v);
}