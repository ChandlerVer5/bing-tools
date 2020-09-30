# bing-tools

> Library package for [Bing](https://github.com/ChandlerVer5/Bing) app plugin developers, that includes most used functions

modified from [cerebro-tools](https://github.com/KELiON/cerebro-tools)🙏, this tools Must be run with bing-tools

## mochapack

change `mocha-webpack` to `mochapack`

```shell
npm ls mochapack mocha
```

## Documentation

### Memoize

```js
const { memoize } = require('bing-tools')

const fetchResults = memoize(() => {
  // Your long running function
})
```

Use `memoize` function from `bing-tools` for your long-running functions, like API-requests.

Under the hood it just uses [memoizee](https://github.com/medikoo/memoizee). Check their documentation for more details.

### Search

```js
const { search } = require('bing-tools')

// Filter your results array
const results = search(arr, 'something', el => el.key)

// Display filtered results
display(results)
```

Simple function to search in your collection:

`search = (items, term, toString = (item) => item) => {}`

Where

- `items` – your array;
- `term` – search term;
- `toString` – function to convert your collection item to string.

## Related

- [Cerebro](http://github.com/KELiON/cerebro) – main repo for Cerebro app;
- [Memoizee](https://github.com/medikoo/memoizee) – Complete memoize/cache solution for JavaScript.

## License

MIT © [Alexandr Subbotin](http://asubbotin.ru)
