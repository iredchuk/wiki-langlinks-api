const sut = require('../app/validate-langlinks-request')

test('validate valid request', () => {
  const req = {
    query: {
      search: 'Unicorn',
      source: 'en',
      target: 'de|es'
    }
  }

  const actual = sut(req)

  expect(actual).toEqual(actual, {
    searchTerm: 'Unicorn',
    sourceLang: 'en',
    targetLangs: ['de', 'es'],
    errors: []
  })
})

test('validate invalid request when search is missing', () => {
  const req = {
    query: {
      search: '',
      source: 'en',
      target: 'de|es'
    }
  }

  const actual = sut(req)

  expect(actual).toEqual({
    sourceLang: 'en',
    targetLangs: ['de', 'es'],
    errors: [
      '"search" query param is required'
    ]
  })
})

test('validate invalid request when source is missing', () => {
  const req = {
    query: {
      search: 'Unicorn',
      source: '',
      target: 'de|es'
    }
  }

  const actual = sut(req)

  expect(actual).toEqual({
    searchTerm: 'Unicorn',
    targetLangs: ['de', 'es'],
    errors: [
      '"source" query param is required'
    ]
  })
})

test('validate invalid request when target is missing', () => {
  const req = {
    query: {
      search: 'Unicorn',
      source: 'en',
      target: ''
    }
  }

  const actual = sut(req)

  expect(actual).toEqual({
    searchTerm: 'Unicorn',
    sourceLang: 'en',
    errors: [
      '"target" query param is required'
    ]
  })
})
