const validateLanglinksRequest = require('./validate-langlinks-request')
const getLanglinks = require('./get-langlinks')

async function handleLanglinksRequest (ctx, fetchLanglink) {
  const request = validateLanglinksRequest(ctx.request)
  if (request.errors.length > 0) {
    ctx.status = 400
    ctx.body = { errors: request.errors }
    return
  }

  try {
    const { searchTerm, sourceLang, targetLangs } = request
    const result = await getLanglinks({ searchTerm, sourceLang, targetLangs }, fetchLanglink)
    ctx.status = 200
    ctx.body = result
  } catch (err) {
    ctx.status = 500
    ctx.body = { message: err.toString() }
  }
}

module.exports = handleLanglinksRequest
