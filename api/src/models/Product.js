const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    const Product = sequelize.define('Product', {  
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type:DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});

    return Product;
};