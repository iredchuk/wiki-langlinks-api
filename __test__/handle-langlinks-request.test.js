const sut = require('../app/handle-langlinks-request')

test('when search in request query is missing', async () => {
  const ctx = {
    request: {
      query: {
        search: '',
        source: 'en',
        target: 'de|es'
      }
    }
  }

  await sut(ctx)

  expect(ctx.status).toBe(400)

  expect(ctx.body).toEqual({
    errors: [
      '"search" query param is required'
    ]
  })
})

test('when source in request query is missing', async () => {
  const ctx = {
    request: {
      query: {
        search: 'Unicorn',
        source: '',
        target: 'de|es'
      }
    }
  }

  await sut(ctx)

  expect(ctx.status).toBe(400)

  expect(ctx.body).toEqual({
    errors: [
      '"source" query param is required'
    ]
  })
})

test('when target in request query is missing', async () => {
  const ctx = {
    request: {
      query: {
        search: 'Unicorn',
        source: 'en',
        target: ''
      }
    }
  }

  await sut(ctx)

  expect(ctx.status).toBe(400)

  expect(ctx.body).toEqual({
    errors: [
      '"target" query param is required'
    ]
  })
})

test('when query is valid and fetch rejects an Error', async () => {
  const ctx = {
    request: {
      query: {
        search: '...',
        source: 'zz',
        target: 'xx|yy'
      }
    }
  }

  const fetchLanglink = jest.fn()
  fetchLanglink.mockReturnValue(Promise.reject(new Error('WTF')))

  await sut(ctx, fetchLanglink)

  expect(ctx.status).toBe(500)

  expect(ctx.body).toEqual({
    message: 'Error: WTF'
  })
})

test('when query is valid and fetch resolves langlinks', async () => {
  const ctx = {
    request: {
      query: {
        search: 'Unicorn',
        source: 'en',
        target: 'fr'
      }
    }
  }

  const fetchLanglink = jest.fn()
  fetchLanglink.mockReturnValue(Promise.resolve({
    query: {
      pages: {
        page1: {
          langlinks: [{ lang: 'fr' }]
        }
      }
    }
  }))

  await sut(ctx, fetchLanglink)

  expect(ctx.status).toBe(200)

  expect(ctx.body).toEqual({
    langLinks: [{ lang: 'fr' }]
  })
})

test('when query is valid and fetch resolves no langlinks', async () => {
  const ctx = {
    request: {
      query: {
        search: 'xyz',
        source: 'en',
        target: 'fr'
      }
    }
  }

  const fetchLanglink = jest.fn()
  fetchLanglink.mockReturnValue(Promise.resolve({
    query: {
      pages: {
        page1: {
          langlinks: []
        }
      }
    }
  }))

  await sut(ctx, fetchLanglink)

  expect(ctx.status).toBe(200)

  expect(ctx.body).toEqual({
    langLinks: []
  })
})
