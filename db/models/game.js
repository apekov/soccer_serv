module.exports = (sequelize, DataTypes) => {
    const game = sequelize.define('game', {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        street: {
            type: DataTypes.STRING,
        },
        created_at: {
            type: DataTypes.DATEONLY,
        },
        updated_at: {
            type: DataTypes.DATEONLY,
        },
        game_type_id: {
            type: DataTypes.INTEGER,
        },
        owner_id: {
            type: DataTypes.INTEGER,
        },
        begin_game: {
            type: DataTypes.DATEONLY,
        },
        end_game: {
            type: DataTypes.DATEONLY,
        },
        team_count: {
            type: DataTypes.INTEGER,
        },
        shema_id: {
            type: DataTypes.INTEGER,
        },
    }, {
        freezeTableName: true,
        tableName: 'game',
        underscored: true,
    });
    game.associate = (models) => {
        game.hasOne(models.type_game, {
            foreignKey: 'game_type_id',
            // as: 'type_games',
        });
        game.hasOne(models.player, {
            foreignKey: 'owner_id',
            // as: 'players',
        });
        game.hasOne(models.game_shema, {
            foreignKey: 'shema_id',
            // as: 'game_shemas',
        });
    };
    return game;
};