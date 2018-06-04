const sut = require('../app/handle-langs-request')

test('shourd return supported languages in specific format', async () => {
  const ctx = {
    request: { }
  }

  const fetchAllLangs = jest.fn()
  fetchAllLangs.mockReturnValue(Promise.resolve({
    query: {
      languages: [
        {
          code: 'en',
          '*': 'English'
        },
        {
          code: 'de',
          '*': 'Deutsch'
        }
      ]
    }
  }))

  await sut(ctx, fetchAllLangs)

  expect(ctx.status).toBe(200)

  expect(ctx.body).toEqual([
    {
      code: 'en',
      '*': 'English'
    },
    {
      code: 'de',
      '*': 'Deutsch'
    }
  ])
})

test('when fetchLanglink rejects an Error', async () => {
  const ctx = {
    request: { }
  }

  const fetchLanglink = jest.fn()
  fetchLanglink.mockReturnValue(Promise.reject(new Error('WTF')))

  await sut(ctx, fetchLanglink)

  expect(ctx.status).toBe(500)

  expect(ctx.body).toEqual({
    message: 'Error: WTF'
  })
})
