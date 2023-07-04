// generate-model.js

import fs from 'fs';

// Obtiene el nombre de la tabla como argumento de la línea de comandos
const tableName = process.argv.slice(2)[0];

if (!tableName) {
  console.error('Debe proporcionar el nombre de la tabla como argumento');
  process.exit(1);
}

// Verifica si el archivo de modelo ya existe
const modelFilePath = `./src/Models/${tableName}.js`;
if (fs.existsSync(modelFilePath)) {
  console.log(`El archivo de modelo "${tableName}.js" ya existe`);
  process.exit(0);
}

// Genera el contenido del archivo de modelo
const modelContent = `
import { DataTypes } from 'sequelize';
import {conexionDB} from '../Database/conexion.js'

const ${tableName} = conexionDB.sequelize.define('${tableName.toLowerCase()}', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
});

export default ${tableName};
`;

// Escribe el contenido en el archivo
fs.writeFile(modelFilePath, modelContent, (err) => {
  if (err) {
    console.error(`Error al escribir el archivo de modelo: ${err.message}`);
    process.exit(1);
  }

  console.log(`Archivo de modelo para la tabla "${tableName}" generado correctamente`);
});
