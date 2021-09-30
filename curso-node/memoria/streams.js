// Creamos un stream
const fs = require("fs");
const { Transform } = require("stream");
const stream = require("stream");
const util = require("util");

let data = "";

// Stream de lectura
let readableStream = fs.createReadStream(__dirname + "/input.txt");

// readableStream.setEncoding("UTF8"); // Le decimos que codificacion usar

// Cuando el stream esta listo
readableStream.on("data", function (chunk) {
  data += chunk;
  // console.log("chunk: ", chunk); // Binario
  // console.log("chunk: ", chunk.toString()); // Texto
});

// Cuando tenga el archivo teminado leemos el archivo
readableStream.on("end", function () {
  console.log("end: ", data);
});

// Stream de escritura
// process.stdout.write("Hola mundo");
// process.stdout.write("¿Qué");
// process.stdout.write("Más Pues?");

// Stream de transformación
const transformStream = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, encoding, callback) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
};

var mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);

