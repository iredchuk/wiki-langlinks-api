const getLanglinks = require('./get-langlinks');

async function handleLanglinksRequest(req, res) {
	try {
		const result = await getLanglinks({
			searchTerm: req.query.search,
			sourceLang: req.query.source,
			targetLangs: req.query.target.split('|')
		});

		res.send(result);
	}	catch (err) {
		res.status(500).send({message: err});
	}
}

module.exports = handleLanglinksRequest;
