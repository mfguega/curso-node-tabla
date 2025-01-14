import { crearArchivoTabla } from './helpers/multiplicar.js';
import pkg from './config/yargs.js';
import 'colors';

console.clear();

/* const [, , arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('='); */

crearArchivoTabla(pkg.b, pkg.l, pkg.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'.america))
  .catch((err) => console.log(err));
