const client = require('../app/api-clients/mediawiki-client')

test('fetch one lang link', async () => {
  const body = await client.getLangLink({
    searchTerm: 'Unicorn',
    sourceLang: 'en',
    targetLang: 'de'
  })

  expect(body.query.pages).toBeTruthy()
  expect(Object.values(body.query.pages)).toHaveLength(1)
  const firstPage = Object.values(body.query.pages)[0]
  expect(firstPage).toBeTruthy()
  expect(firstPage.langlinks).toEqual([
    {
      '*': 'Einhorn',
      autonym: 'Deutsch',
      lang: 'de',
      url: 'https://de.wikipedia.org/wiki/Einhorn'
    }
  ])
})
