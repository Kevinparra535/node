// Datos en memoria

// Buffer.alloc(num); nos almacena un numero de bytes en memoria
// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
let buffer = Buffer.from("Hola");

console.log(buffer.toString()); // Descifrar el buffer
console.log(buffer); // <Buffer 00>

// Podemos trabajar poción a poción

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log(abc); // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
console.log(abc.toString()); // abcdefghijklmnopqrstuvwxyz
