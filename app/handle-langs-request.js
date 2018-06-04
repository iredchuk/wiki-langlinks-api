async function handleLangsRequest (ctx, fetchAllLangs) {
  try {
    const result = await fetchAllLangs()
    ctx.status = 200
    ctx.body = result.query.languages
  } catch (err) {
    ctx.status = 500
    ctx.body = { message: err.toString() }
  }
}

module.exports = handleLangsRequest
