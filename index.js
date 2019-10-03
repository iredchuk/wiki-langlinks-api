const Koa = require("koa");
const router = require("koa-route");
const cors = require("kcors");
const handleLanglinksRequest = require("./app/handle-langlinks-request");
const handleLangsRequest = require("./app/handle-langs-request");
const mediaWikiClient = require("./app/api-clients/mediawiki-client");

const app = new Koa();

app.use(cors());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
});

app.on("error", err => {
  console.error(err);
});

app.use(
  router.get("/health", async ctx => {
    ctx.body = "OK";
  })
);

app.use(
  router.get("/langlinks", async ctx => {
    return handleLanglinksRequest(ctx, query =>
      mediaWikiClient.getLangLink(query)
    );
  })
);

app.use(
  router.get("/langs", async ctx => {
    return handleLangsRequest(ctx, () => mediaWikiClient.getAllLangs());
  })
);

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Listening on port ${port}...`);
