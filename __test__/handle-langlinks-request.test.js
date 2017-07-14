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
