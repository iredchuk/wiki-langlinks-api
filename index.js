const app = require('express')();
const handleLanglinksRequest = require('./app/handle-langlinks-request');

app.get('/health', (req, res) => {
	res.send('OK');
});

app.get('/langlinks', handleLanglinksRequest);

const port = process.env.PORT || 3000;

app.listen(port, err => {
	if (err) {
		console.error(err);
	} else {
		console.log(`Listening on port ${port}...`);
	}
});
