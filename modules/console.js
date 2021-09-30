let tabla = [{ a: 1 }, { b: 2 }, { c: 3 }];

console.log("log"); //Básico
console.info("info"); //Es lo mismo pero sirve como anuncios
console.error("error"); // Te pinta un error
console.warn("Alerta"); // Precaución
console.table(tabla); // datos en modo tabla
console.group('Textos'); //Agrupa un montón de de logs para formar un grupo
console.log('Texto');
console.log('Texto');
console.log('Texto');
console.log('Texto');
console.groupEnd('Finaliza Textos'); //Agrupa un monton de de logs para formar un grupo
console.count('veces'); // Contadores
console.countReset('veces'); // Limpia los contadores
