// Traer nuestro modulo
const modulo = require("./module");

// Ejecutar una funcion del modulo
console.log(modulo); // si el modulo no exporta nada - output {}
console.log(modulo.prop1); // si el modulo exporta un objeto accedemos a sus propiedades
modulo.saludar(); // si el modulo exporta un objeto accedemos a sus propiedades
