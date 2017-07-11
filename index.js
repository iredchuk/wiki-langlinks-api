const Koa = require('koa');
const router = require('koa-route');
const cors = require('kcors');
const handleLanglinksRequest = require('./app/handle-langlinks-request');

const app = new Koa();

app.use(router.get('/health', async ctx => {
	ctx.body = 'OK';
}));

app.use(router.get('/langlinks', handleLanglinksRequest));

app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening on port ${port}...`);
