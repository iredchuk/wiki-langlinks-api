# wiki-langlinks-api

> Not maintained any more

Prototype of an API to show translation into several languages at once using [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page).

## Endpoints

### GET /langlinks?search=&source=&target=

> Params

- _search_: search term (e.g. "Oak")
- _source_: source language (e.g. "en")
- _target_: "|"-separated target languages (e.g. "es|de")

> 200

```json
{
  "langLinks": [
    {
      "lang": "es",
      "title": "Quercus",
      "url": "https://es.wikipedia.org/wiki/Quercus"
    },
    {
      "lang": "de",
      "title": "Eichen",
      "url": "https://de.wikipedia.org/wiki/Eichen"
    }
  ]
}
```

### GET /langs

> 200

```json
[
  {
    "lang": "de",
    "autonym": "Deutsch"
  },
  {
    "lang": "en",
    "autonym": "English"
  }
]
```

### GET /health

> 200

```
OK
```
