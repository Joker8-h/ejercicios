function eleccionesMesa() {
  const votos = [0, 0, 0, 0]; // [C1, C2, C3, Blanco]
  let votantes = 0;
  const claveCierre = "CERRAR";

  while (votantes < 50) {
    let voto = prompt("MENÚ ELECCIONES 2025\n1. Candidato Uno\n2. Candidato Dos\n3. Candidato Tres\n4. Blanco\n5. Cerrar elecciones");
    
    if (voto === "5") {
      let clave = prompt("Ingrese clave para cerrar elecciones:");
      if (clave === claveCierre) break;
      else continue;
    }

    let opcion = parseInt(voto);
    if (opcion >= 1 && opcion <= 4) {
      votos[opcion - 1]++;
      votantes++;
    }
  }

  console.log(`Votaron: ${votantes}\nCandidato Uno: ${votos[0]}\nCandidato Dos: ${votos[1]}\nCandidato Tres: ${votos[2]}\nVotos en Blanco: ${votos[3]}`);
}