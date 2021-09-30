const os = require("os");

console.log(os.arch()); // "x64"
console.log(os.platform()); // "win32"
console.log(os.cpus()); // "Nucleos del procesador"
console.log(os.cpus().length); // "8 cores"
console.log(os.constants); // "Todos los errores y warnings del sistema"
console.log(os.freemem()); // "Memoria libre que tenemos"

const SIZE = 1024;

function kb(bytes) {
  return bytes / SIZE;
}

function mb(bytes) {
  return kb(bytes / SIZE);
}

function gb(bytes) {
  return mb(bytes / SIZE);
}

console.log(kb(os.freemem())); // Espacio libre en KB
console.log(mb(os.freemem())); // Espacio libre en MB
console.log(gb(os.freemem())); // Espacio libre en GB

console.log(gb(os.totalmem())); // Espacio total en GB

console.log(os.homedir()); // directorio home del usuario
console.log(os.tmpdir()); // directorio para archivos temporales


console.log(os.hostname()); // nombre host de la maquina
console.log(os.networkInterfaces()); // interfaces de red
