

import { sequelize } from "./conexion.js";
import User from "../Models/User.js";
import env from "../Config/env.js";
import { encryptPassword } from "../Utils/bcryptUtils.js";

async function seed() {
    try {
      // Crea el registro con los datos deseados
      //const hashedPassword = await encryptPassword(env.PASSWORD_USER);
      const adminUser = await User.create({
        name:'Admin',
        email: 'admin3@admin.com',
        password: await encryptPassword(env.PASSWORD_USER),
        rol:1
      });
  
      console.log('Registro creado:', adminUser.toJSON());
    } catch (error) {
      console.error('Error al crear el registro:', error);
    } finally {
      // Cierra la conexión a la base de datos al finalizar el seed
      await sequelize.close();
    }
}
  
seed();
  
  
  
  
  
  