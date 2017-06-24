const test = require('ava');
const sut = require('../app/validate-langlinks-request');

test('validate valid request', t => {
	const req = {
		query: {
			search: 'Unicorn',
			source: 'en',
			target: 'de|es'
		}
	};

	const actual = sut(req);

	t.deepEqual(actual, {
		searchTerm: 'Unicorn',
		sourceLang: 'en',
		targetLangs: ['de', 'es'],
		errors: []
	});
});

test('validate invalid request when search is missing', t => {
	const req = {
		query: {
			search: '',
			source: 'en',
			target: 'de|es'
		}
	};

	const actual = sut(req);

	t.deepEqual(actual, {
		sourceLang: 'en',
		targetLangs: ['de', 'es'],
		errors: [
			'"search" query param is required'
		]
	});
});

test('validate invalid request when source is missing', t => {
	const req = {
		query: {
			search: 'Unicorn',
			source: '',
			target: 'de|es'
		}
	};

	const actual = sut(req);

	t.deepEqual(actual, {
		searchTerm: 'Unicorn',
		targetLangs: ['de', 'es'],
		errors: [
			'"source" query param is required'
		]
	});
});

test('validate invalid request when target is missing', t => {
	const req = {
		query: {
			search: 'Unicorn',
			source: 'en',
			target: ''
		}
	};

	const actual = sut(req);

	t.deepEqual(actual, {
		searchTerm: 'Unicorn',
		sourceLang: 'en',
		errors: [
			'"target" query param is required'
		]
	});
});
