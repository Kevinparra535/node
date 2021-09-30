console.time("Todo");
let suma = 0;

// Detectamos cuando inicia
console.time("Benchmarking...");

for (let i = 0; i < 1000000000; i++) {
  suma += i;
}

// Detectamos cuando termina
console.timeEnd("Benchmarking...");

let suma2 = 0;

// Detectamos cuando inicia
console.time("Benchmarking2...");

for (let j = 0; j < 1000000000; j++) {
  suma2 += j;
}

// Detectamos cuando termina
console.timeEnd("Benchmarking2...");

console.timeEnd("Todo");

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola");
    }, 3000);
  });
}
console.time("Async");
asincrona().then(() => {
  console.timeEnd("Async");
});
