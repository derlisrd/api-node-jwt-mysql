// Ejecuta las migraciones

import { sequelize } from "./conexion.js";
import { readdirSync } from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PATH_ROUTE = path.join(__dirname, '../Models');



const migrations = async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexión establecida correctamente');
      const modelos = []
      readdirSync(PATH_ROUTE).filter((filename)=>{
         modelos.push( import(`../Models/${filename}`) )
      })
      await Promise.all(modelos)
      
      const result = await sequelize.sync();
      console.log("Migraciones ejecutadas correctamente:", result);
    
    } catch (error) {
      console.log('Error al ejecutar las migraciones:', error);
    } finally {
      // Cierra la conexión a la base de datos
      await sequelize.close();
      console.log('Conexión cerrada');
    }
  };
  

migrations(); 