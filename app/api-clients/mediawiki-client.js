const request = require('superagent');

async function getLangLink({ searchTerm, sourceLang, targetLang }) {
	const response = await request
		.get(`https://${sourceLang}.wikipedia.org/w/api.php`)
		.query({
			action: 'query',
			titles: searchTerm,
			prop: 'langlinks',
			llprop: 'url|autonym',
			lllang: targetLang,
			format: 'json'
		})
		.accept('json');

	return response.body;
}

module.exports = {
	getLangLink
};
