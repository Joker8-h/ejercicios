function maximizarZ() {
  let mejorZ = -Infinity;
  let mejorX = 0, mejorY = 0;

  for (let i = 0; i < 100; i++) {
    let x = Math.random() * 10 - 5;
    let y = Math.random() * 10 - 5;
    let z = x * x + y * y;

    if (z > mejorZ) {
      mejorZ = z;
      mejorX = x;
      mejorY = y;
    }
  }

  console.log(`Mejor X: ${mejorX.toFixed(2)}, Mejor Y: ${mejorY.toFixed(2)}, Mejor Z: ${mejorZ.toFixed(2)}`);
}