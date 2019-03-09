require('dotenv').load();
const Koa = require('koa');
const Router = require('koa-router');
const V1 = require('./routes/v1.0');
const app = new Koa();
const router = new Router();

router.use('/api/v1.0', V1.routes());

app.use(router.routes());

app.use(async(ctx, next) => {
    try {
        await next();
    } catch (err) {
        // will only respond with JSON
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            message: err.message
        };
    }
})

app.listen(process.env.PORT, function() {
    console.log(`Server running. Use our API on port: ${process.env.PORT}`);
});