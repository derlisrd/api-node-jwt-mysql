// generate-controller.js

import fs from 'fs';

// Obtiene el nombre de la tabla como argumento de la línea de comandos
const tableName = process.argv.slice(2)[0];

if (!tableName) {
  console.error('Debe proporcionar el nombre del controlador como argumento');
  process.exit(1);
}

// Verifica si el archivo de controller ya existe
const controllerFilePath = `./src/Controllers/${tableName}.js`;
if (fs.existsSync(controllerFilePath)) {
  console.log(`El archivo de controlador "${tableName}.js" ya existe`);
  process.exit(0);
}

// Genera el contenido del archivo de modelo
const contenido = `
//import ModelName from "../Models/ModelName.js"
class ${tableName} {

}
export default ${tableName}
`;

// Escribe el contenido en el archivo
fs.writeFile(controllerFilePath, contenido, (err) => {
  if (err) {
    console.error(`Error al escribir el archivo de controllador: ${err.message}`);
    process.exit(1);
  }

  console.log(`Archivo de controllador para la tabla "${tableName}" generado correctamente`);
});
