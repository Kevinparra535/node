function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 3000);
}

asincrona(function (error, dato) {
  // Si hay un error detiene la ejecución
  if (error) {
    console.log("Tenemos un error");
    console.log(error);
    return false;

    // throw error; // No va a funiconar
  } else {
    console.log("Todo esta bien");
    console.log(dato);
  }
});
