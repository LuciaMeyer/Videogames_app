const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {

  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID, // identificadores universales únicos, combinación letras y números
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    released: {
      type: DataTypes.STRING, // Ejemplo: "2013-09-17" o es DATEONLY???
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    platforms_: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true 
    }
  },
  {
    timestamps: false
  });
};
