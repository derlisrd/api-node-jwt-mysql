import { Sequelize } from 'sequelize'
import env from '../Config/env.js';
import DatabaseErrors from '../Errors/DatabaseErrors.js';



export const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER,
  env.DB_PASS,
   {
     host: env.DB_HOST,
     dialect: env.DB_DIALECT,
     logging: false
   }
 )

const conexionDB = {}

conexionDB.sequelize = sequelize;
conexionDB.Sequelize = Sequelize;

conexionDB.sequelize.query = async function() {
    try {
      return await conexionDB.Sequelize.prototype.query.apply(this, arguments);
    } catch (err) {
        if (err instanceof Sequelize.ConnectionError || err instanceof genericPoolErrors.TimeoutError) {
            throw DatabaseErrors.ConnectionError()
          } else if (err instanceof Sequelize.TimeoutError) { 
            throw DatabaseErrors.ConnectionErrorTimeOut()
          }
          throw err;
    }
  };


export {conexionDB}