const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

/* const [, , arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('='); */

crearArchivoTabla(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'.america))
  .catch((err) => console.log(err));
