const sequelize = require('../../db').sequelize;

module.exports = {
    findAll: async(ctx) => {
        const all = await sequelize.models.game.findAll();
        ctx.body = all;
    },
    findById: async(ctx) => {
        const one = await sequelize.models.game.findOne({
            where: { id: ctx.params.id }
        });
        ctx.body = one;
    }
}