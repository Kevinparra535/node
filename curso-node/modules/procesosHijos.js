const { exec, spawn } = require("child_process");

// "Podemos ejecutar cualquier comando del sistema, podemos trabajar con procesos por debajo
// "ls-la" Linux/Mac
// "dir" Windows
// node modules/console.js Comandos del sistema

exec("node modules/console.js", (err, stdout, sterr) => { // Windows
  if (err) {
    console.log(err);
    return false
  }
  console.log(stdout)
});

// Si queremos ejecutar un proceso mas complejo como invocar un proceso nuevo
// spawn('Comando', [Parametros])
// spawn('ls', ['-la']) Linux
// spawn('cmd.exe', ['/c','dir']) Windows

let proceso = spawn("cmd.exe", ["/c", "dir"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (dato) {
  console.log("El proceso esta muerto?");
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log(proceso.killed);
  console.log("Proceso terminado");
});
