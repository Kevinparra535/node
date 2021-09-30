const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hola mundo</h1>");
      res.end();
      break;
    case "/contacto":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Contacto</h1>");
      res.end();
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>Pagina no encontrada</h1>");
      res.end();
  }

  // Cabeceras, codigo con la respuesta 200 = OK
  // res.writeHead(200, { "Content-Type": "text/plain" });

  // Escribir la respuesta
  // res.write("Hola mundo");

  // res.end();
}

console.log("Servidor iniciado en el puerto 3000");
