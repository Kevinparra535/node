const brcypt = require("bcrypt");

const password = "123456Segura!";

// parametros:
// 1. Contraseña
// 2. Numero de rondas que hara para crear el hash
// 3. Callback

brcypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.log(err);
  } else {
    console.log(hash);

    // Comparamos si el hash es igual al password
    brcypt.compare(password, hash, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });
  }
});
