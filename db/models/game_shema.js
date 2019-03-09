module.exports = (sequelize, DataTypes) => {
    const game_shema = sequelize.define('game_shema', {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true,
        tableName: 'game_shema',
        underscored: true,
    });
    game_shema.associate = (models) => {
        game_shema.hasMany(models.game, { foreignKey: 'owner_id', sourceKey: 'id' });
    };
    return game_shema;
};