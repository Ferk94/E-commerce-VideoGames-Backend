const { DataTypes } = require('sequelize');
const role = require('../enums/enums');

module.exports = (sequelize) => {
    return sequelize.define('Users', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {msg: 'por favor escriba un email valido'}
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            values: Object.values(role),
            defaultValue: role.USER
        }
    })
}