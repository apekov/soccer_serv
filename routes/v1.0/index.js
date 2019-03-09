const Router = require('koa-router');
const routes = new Router();
const games = require('../../app/game/controller');
const players = require('../../app/player/controller');

// Game routes
routes.get('/games', games.findAll);
routes.get('/games/:id', games.findById)

// Player routes 
routes.get('/players', players.findAll);


module.exports = routes;