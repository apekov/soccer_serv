const sequelize = require('../../db').sequelize;

module.exports = {
    findAll: async() => {
        const all = await sequelize.models.player.findAll();
        console.log(sequelize.models.player);

        ctx.body = all;
    },
    findBy: () => {

        }
        // findByGameId: async(ctx) => {
        //     const one = await sequelize.models.game.findAll({
        //         where: { id: ctx.params.id }
        //     });
        //     ctx.body = one;
        // }
}