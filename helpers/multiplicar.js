const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base = 5, listar = false, hasta = 1) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${colors.yellow(base)} ${colors.blue('x')} ${colors.red(i)} ${colors.blue('=')} ${colors.magenta(base * i)}\n`;
    }

    if (listar) {
      console.log('===================================='.rainbow);
      console.log(colors.blue('Tabla del:'), colors.red(base));
      console.log('===================================='.rainbow);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = { crearArchivoTabla };
