const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  //defino wl modelo
  sequelize.define('type', {
    id:{
      type:DataTypes.UUID,
      defaulValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING
    },
  }, {timestamps: false}
  );
};