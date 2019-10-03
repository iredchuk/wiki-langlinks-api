const supportedLangs = require("./supported-langs.json");

async function handleLangsRequest(ctx, fetchAllLangs) {
  try {
    const resp = await fetchAllLangs();

    const result = resp.query.languages
      .filter(l => supportedLangs.includes(l.code))
      .map(l => ({ lang: l.code, autonym: l["*"] }));

    ctx.status = 200;
    ctx.body = result;
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: err.toString() };
  }
}

module.exports = handleLangsRequest;
