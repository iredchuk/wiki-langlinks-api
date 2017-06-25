function mapLanglinkResponse(resp) {
	const pageKey = Object.keys(resp.query.pages)[0];
	const langlinks = resp.query.pages[pageKey].langlinks;
	if (!Array.isArray(langlinks) || langlinks.length < 1) {
		return undefined;
	}

	const links = langlinks.map(link => ({
		lang: link.lang,
		autonym: link.autonym,
		title: link['*'],
		url: link.url
	}));

	return links[0];
}

module.exports = mapLanglinkResponse;
