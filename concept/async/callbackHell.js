function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola", nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla");
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  // Recursividad

  if (veces >= 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

// --

console.log("iniciando proceso");
hola("Kevin", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Proceso terminados");
  });
});

// Hell

// hola("Kevin", function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       adios(nombre, function () {
//         console.log("terminando proceso");
//       });
//     });
//   });
// })
