const sut = require('../app/map-langlink-response')
const exampleGoodResponse = require('./example-good-response.json')
const exampleNotFoundResponse = require('./example-not-found-response.json')

test('map response for known search term', () => {
  const actual = sut(exampleGoodResponse)
  expect(actual).toEqual({
    lang: 'de',
    autonym: 'Deutsch',
    title: 'Einhorn',
    url: 'https://de.wikipedia.org/wiki/Einhorn'
  })
})

test('map response for unknown search term', () => {
  const actual = sut(exampleNotFoundResponse)
  expect(actual).toBe(undefined)
})
