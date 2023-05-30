const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define('User', {  
      id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      mail: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isEmail: true
          }
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          set(value) {
              const hashedPassword = bcrypt.hashSync(value, 10);
              this.setDataValue('password', hashedPassword);
          }
      },
      isAdmin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
  }, {timestamps: false});

  return User;
};