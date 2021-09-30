function anotherFunction() {
  return seRompe();
}

function seRompe() {
  return 3 + z;
}

function asincrona(callback) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error(err.message);
      console.info("Error capturado");
      callback(err);
    }
  }, 1000);
}

try {
  asincrona(() => {
    console.log("Hay error");
  });
} catch (err) {
  console.error(err);
  console.error(err.message);
  console.info("Error capturado");
}
