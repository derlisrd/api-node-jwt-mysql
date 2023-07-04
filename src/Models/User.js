import { DataTypes } from 'sequelize';
import {conexionDB} from '../Database/conexion.js'

const User = conexionDB.sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Valida que el valor sea un email válido
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },{
    
  });

export default User