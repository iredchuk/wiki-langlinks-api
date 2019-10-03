const validateLanglinksRequest = require("./validate-langlinks-request");
const getLanglinks = require("./get-langlinks");

const fetchLangLinks = async (
  ctx,
  fetchLanglink,
  { searchTerm, sourceLang, targetLangs }
) => {
  const result = await getLanglinks(
    { searchTerm, sourceLang, targetLangs },
    fetchLanglink
  );

  ctx.status = 200;
  ctx.body = result;
};

async function handleLanglinksRequest(ctx, fetchLanglink) {
  const {
    searchTerm,
    sourceLang,
    targetLangs,
    errors
  } = validateLanglinksRequest(ctx.request);

  if (errors.length > 0) {
    ctx.status = 400;
    ctx.body = { errors };
    return;
  }

  await fetchLangLinks(ctx, fetchLanglink, {
    searchTerm,
    sourceLang,
    targetLangs
  });
}

module.exports = handleLanglinksRequest;
