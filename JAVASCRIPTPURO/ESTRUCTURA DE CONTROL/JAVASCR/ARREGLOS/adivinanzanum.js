function numeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

let intentos = 5;
const numeroSecreto = numeroAleatorio(); 

alert(
  "¡Bienvenido al juego de adivinar el número! Tienes 5 intentos. ¡Mucha suerte!"
);

while (intentos > 0) {
  const intentoPersona = parseInt(prompt("Te quedan: " + intentos + " intentos"));

  if (isNaN(intentoPersona)) {
    alert("Por favor, ingresa un número.");
    continue;
  }

  intentos--;

  if (intentoPersona < numeroSecreto) {
    alert("El número secreto es mayor.");
  } else if (intentoPersona > numeroSecreto) {
    alert("El número secreto es menor.");
  } else if (intentoPersona === numeroSecreto) {
    alert(`¡Felicidades! Adivinaste el número ${numeroSecreto} en ${5 - intentos} intentos.`);
    break;
  }

  if (intentos === 0) {
    alert(`¡GAME OVER! El número a adivinar era ${numeroSecreto}.`);
  }
}