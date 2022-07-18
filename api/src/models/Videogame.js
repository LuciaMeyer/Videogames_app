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
    Descripción: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FechaLanzamiento: {
      type: DataTypes.STRING, // released. Ejemplo: "2013-09-17"
    },
    Rating: {
      type: DataTypes.INTEGER,
    },
    Plataformas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
