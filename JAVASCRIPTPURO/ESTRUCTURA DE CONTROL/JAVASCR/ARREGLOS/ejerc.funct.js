function cuadrado() {
  const numeros = [2, 3, 4, 15 , 6];
  numeros.forEach(numero => {const cuadrado = numero * numero;
    
    document.writeln("El cuadrado de : " + numero +"  es: " + cuadrado +"<br>");
    
  });
}
cuadrado();