const mediaWikiClient = require('./api-clients/mediawiki-client')
const mapLanglinkResponse = require('./map-langlink-response')

async function getLanglinks ({ searchTerm, sourceLang, targetLangs }) {
  const langLinks = await Promise.all(
    targetLangs.map(targetLang => getOneLangLink({ searchTerm, sourceLang, targetLang }))
  )
  return { langLinks }
}

async function getOneLangLink ({ searchTerm, sourceLang, targetLang }) {
  const response = await mediaWikiClient.getLangLink({ searchTerm, sourceLang, targetLang })
  return mapLanglinkResponse(response)
}

module.exports = getLanglinks
