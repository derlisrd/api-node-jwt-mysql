import { DataTypes } from 'sequelize';
import {conexionDB} from '../Database/conexion.js'

const User = conexionDB.sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
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
    },
    rol:{
      type: DataTypes.TINYINT(1),
      defaultValue:1,
      allowNull:false
    }
  },{
    
  });

export default User