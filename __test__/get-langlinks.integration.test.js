const sut = require('../app/get-langlinks')

test('request with two target languages', async () => {
  const actual = await sut({
    searchTerm: 'Unicorn',
    sourceLang: 'en',
    targetLangs: ['de', 'es']
  })

  expect(actual).toEqual({
    langLinks: [
      {
        lang: 'de',
        autonym: 'Deutsch',
        title: 'Einhorn',
        url: 'https://de.wikipedia.org/wiki/Einhorn'
      },
      {
        lang: 'es',
        autonym: 'español',
        title: 'Unicornio',
        url: 'https://es.wikipedia.org/wiki/Unicornio'
      }
    ]
  })
})