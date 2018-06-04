const request = require('superagent')

async function getLangLink ({ searchTerm, sourceLang, targetLang }) {
  const response = await request
    .get(`https://${sourceLang}.wikipedia.org/w/api.php`)
    .query({
      action: 'query',
      titles: searchTerm,
      prop: 'langlinks',
      llprop: 'url|autonym',
      lllang: targetLang,
      redirects: '',
      format: 'json'
    })
    .accept('json')

  return response.body
}

async function getAllLangs () {
  const response = await request
    .get(`https://en.wikipedia.org/w/api.php`)
    .query({
      action: 'query',
      meta: 'siteinfo',
      siprop: 'languages',
      format: 'json'
    })
    .accept('json')

  return response.body
}

module.exports = {
  getLangLink,
  getAllLangs
}
