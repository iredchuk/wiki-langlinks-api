const supportedLangs = require("./supported-langs.json");

async function handleLangsRequest(ctx, fetchAllLangs) {
  const resp = await fetchAllLangs();

  const result = resp.query.languages
    .filter(l => supportedLangs.includes(l.code))
    .map(l => ({ lang: l.code, autonym: l["*"] }));

  ctx.status = 200;
  ctx.body = result;
}

module.exports = handleLangsRequest;
