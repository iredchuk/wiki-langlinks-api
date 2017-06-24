const validateLanglinksRequest = require('./validate-langlinks-request');
const getLanglinks = require('./get-langlinks');

async function handleLanglinksRequest(req, res) {
	const request = validateLanglinksRequest(req);
	if (request.errors.length > 0) {
		return res.status(400).send({errors: request.errors});
	}

	try {
		const {searchTerm, sourceLang, targetLangs} = request;
		const result = await getLanglinks({searchTerm, sourceLang, targetLangs});
		return res.send(result);
	}	catch (err) {
		return res.status(500).send({message: err});
	}
}

module.exports = handleLanglinksRequest;
