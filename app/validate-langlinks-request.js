function validateLanglinksRequest (req) {
  const result = {
    errors: []
  }

  if (req.query.search) {
    result.searchTerm = req.query.search
  } else {
    result.errors.push('"search" query param is required')
  }

  if (req.query.source) {
    result.sourceLang = req.query.source
  } else {
    result.errors.push('"source" query param is required')
  }

  if (req.query.target) {
    result.targetLangs = req.query.target.split('|')
  } else {
    result.errors.push('"target" query param is required')
  }

  return result
}

module.exports = validateLanglinksRequest
