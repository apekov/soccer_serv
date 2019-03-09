module.exports = (sequelize, DataTypes) => {
    const type_game = sequelize.define('type_game', {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.TEXT,
        },
    }, {
        freezeTableName: true,
        tableName: 'type_game',
        underscored: true,
    });
    type_game.associate = (models) => {
        type_game.hasOne(models.game, { foreignKey: 'game_type_id', sourceKey: 'id' });
    };
    return type_game;
};