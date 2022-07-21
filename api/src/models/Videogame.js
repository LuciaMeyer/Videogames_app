const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID, // identificadores universales únicos, combinación letras y números
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, // no puede estar vacío
      primaryKey: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.STRING, // Ejemplo: "2013-09-17"
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true // todos los que cree van a ser true, el de la api este campo está vacío
    }
  },
  {
    timestamps: false
  });
};
