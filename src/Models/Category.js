
import { DataTypes } from 'sequelize';
import {conexionDB} from '../Database/conexion.js'

const Category = conexionDB.sequelize.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
});

export default Category;
