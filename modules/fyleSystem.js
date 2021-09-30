const fs = require("fs");

function getFile(ruta, callback) {
  fs.readFile(ruta, (err, data) => {
    // Archivo leido...
    console.log(data.toString());
  });
}

function escribir(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No he podido escribir", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function deleteFile(ruta, callback) {
  fs.unlink(ruta, callback)
  
}

getFile(__dirname + "/archivo.txt", console.log);
escribir(__dirname + "/archivo2.txt", 'Soy un archivo de texto nuevo', console.log)
deleteFile(__dirname + "/archivo1.txt", console.log)
