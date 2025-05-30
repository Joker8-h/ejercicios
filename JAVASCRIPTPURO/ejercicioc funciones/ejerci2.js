function generarContrasena() {
  const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const minus = 'abcdefghijklmnopqrstuvwxyz';
  const numeros = '0123456789';
  const especiales = '@#$%&()=?¿*+[]{}';

  function obtenerAleatorios(str, cantidad) {
    return Array.from({ length: cantidad }, () => str[Math.floor(Math.random() * str.length)]).join('');
  }

  const contrasena = (
    obtenerAleatorios(mayus, 2) +
    obtenerAleatorios(minus, 2) +
    obtenerAleatorios(numeros, 2) +
    obtenerAleatorios(especiales, 2)
  ).split('').sort(() => Math.random() - 0.5).join('');

  return contrasena;
}