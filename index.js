const app = require('express')();

app.get('/health', (req, res) => {
	res.send('OK');
});

const port = 3000;
app.listen(port, (err) => {
	if (err) {
		console.error(err);
	} else {
		console.log(`Listening on port ${port}...`);
	}
});
