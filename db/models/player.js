module.exports = (sequelize, DataTypes) => {
    const player = sequelize.define('player', {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.TEXT
        },
        game_count: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true,
        tableName: 'player',
        underscored: true,
        timestamps: false,
    });
    return player;
};