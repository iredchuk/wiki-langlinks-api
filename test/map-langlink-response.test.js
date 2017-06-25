const test = require('ava');
const sut = require('../app/map-langlink-response');
const exampleGoodResponse = require('./example-good-response.json');
const exampleNotFoundResponse = require('./example-not-found-response.json');

test('map response for known search term', t => {
	const actual = sut(exampleGoodResponse);
	t.deepEqual(actual, {
		lang: 'de',
		autonym: 'Deutsch',
		title: 'Einhorn',
		url: 'https://de.wikipedia.org/wiki/Einhorn'
	});
});

test('map response for unknown search term', t => {
	const actual = sut(exampleNotFoundResponse);
	t.is(actual, undefined);
});
