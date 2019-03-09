module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        phone_number: {
            type: DataTypes.STRING,
        },
        vk_id: {
            type: DataTypes.INTEGER,
        },
        facebook_id: {
            type: DataTypes.INTEGER,
        }
    }, {
        freezeTableName: true,
        tableName: 'users',
        underscored: true,
    });
    users.associate = (models) => {
        users.hasOne(models.player, { foreignKey: 'user_id', sourceKey: 'id' });
    };
    return users;
};