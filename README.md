# wiki-langlinks-api

Prototype for API to show translation into several languages at once using [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page).

## Endpoints

### GET /langlinks?search=&source=&target=

> Params
- *search*: search term
- *source*: source language (eg., "en")
- *target*: "|"-separated target languages (eg. "es|de")

> 200
~~~json
{
	"langLinks": [
		{
			"lang":"es",
			"title":"Quercus",		"url":"https://es.wikipedia.org/wiki/Quercus"
		},
		{
			"lang":"de",
			"title":"Eichen",		"url":"https://de.wikipedia.org/wiki/Eichen"
		}
	]
}
~~~

### GET /health

> 200
~~~
OK
~~~
