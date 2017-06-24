const test = require('ava');
const sut = require('../app/get-langlinks');

test('request with two target languages', async t => {
	const actual = await sut({
		searchTerm: 'Unicorn',
		sourceLang: 'en',
		targetLangs: ['de', 'es']
	});

	t.deepEqual(actual, {
		langLinks: [
			{
				lang: 'de',
				title: 'Einhorn',
				url: 'https://de.wikipedia.org/wiki/Einhorn'
			},
			{
				lang: 'es',
				title: 'Unicornio',
				url: 'https://es.wikipedia.org/wiki/Unicornio'
			}
		]
	});
});
