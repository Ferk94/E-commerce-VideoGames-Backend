const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    return sequelize.define('Products', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
    })
}