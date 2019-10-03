const mapLanglinkResponse = require("./map-langlink-response");

async function getLanglinks(
  { searchTerm, sourceLang, targetLangs },
  fetchLanglink
) {
  const langLinks = await Promise.all(
    targetLangs.map(targetLang =>
      getOneLangLink({ searchTerm, sourceLang, targetLang }, fetchLanglink)
    )
  );

  return { langLinks: langLinks.filter(l => l) };
}

async function getOneLangLink(
  { searchTerm, sourceLang, targetLang },
  fetchLanglink
) {
  const response = await fetchLanglink({ searchTerm, sourceLang, targetLang });
  return mapLanglinkResponse(response);
}

module.exports = getLanglinks;
