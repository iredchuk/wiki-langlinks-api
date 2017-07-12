const validateLanglinksRequest = require('./validate-langlinks-request')
const getLanglinks = require('./get-langlinks')

async function handleLanglinksRequest (ctx) {
  const request = validateLanglinksRequest(ctx.request)
  if (request.errors.length > 0) {
    ctx.status = 400
    ctx.body = { errors: request.errors }
    return
  }

  try {
    const { searchTerm, sourceLang, targetLangs } = request
    const result = await getLanglinks({ searchTerm, sourceLang, targetLangs })
    ctx.body = result
  } catch (err) {
    ctx.status = 500
    ctx.body = { message: err }
  }
}

module.exports = handleLanglinksRequest
