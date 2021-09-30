// El process viene dentro de los modulos globales

//

//

// Capturemos un error global
process.on("uncaughtException", (err, origin) =>
  console.error("No capturamos este este error", err, origin)
);
// process.on('uncaughtRejection')

// Antes de que el proceso termine
process.on("beforeExit", () => console.log(`El proceso está por terminar`));

// Cuando el proceso termina, cuando esto sucede te has desconectado totalmente del eventloop
process.on("exit", () => console.log(`El proceso terminó`));

hola();

console.log("Si no se captura el error esto no pasa");
