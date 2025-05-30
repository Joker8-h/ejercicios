function contarVocales(cadena) {
  return (cadena.match(/[aeiouáéíóú]/gi) || []).length;
}