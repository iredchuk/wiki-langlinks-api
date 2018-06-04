# wiki-langlinks-api

Prototype of an API to show translation into several languages at once using [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page).

[![build status](https://img.shields.io/travis/iredchuk/wiki-langlinks-api/master.svg?style=flat-square)](https://travis-ci.org/iredchuk/wiki-langlinks-api)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Endpoints

### GET /langlinks?search=&source=&target=

> Params
- *search*: search term (e.g. "Oak")
- *source*: source language (e.g. "en")
- *target*: "|"-separated target languages (e.g. "es|de")

> 200
~~~json
{
  "langLinks": [
    {
      "lang":"es",
      "title":"Quercus",
      "url":"https://es.wikipedia.org/wiki/Quercus"
    },
    {
      "lang":"de",
      "title":"Eichen",
      "url":"https://de.wikipedia.org/wiki/Eichen"
    }
  ]
}
~~~

### GET /langs
> 200
~~~json
[
  {
    "lang":"de",
    "autonym":"Deutsch"
  },
  {
    "lang":"en",
    "autonym":"English"
  }
]
~~~

### GET /health

> 200
~~~
OK
~~~
