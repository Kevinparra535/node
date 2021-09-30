require('dotenv').config();

let nombre = process.env.NOMBRE // Para acceder a las variables de entorno accedemos al proceso

console.log('Hola :', nombre)