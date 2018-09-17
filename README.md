## fetch-restful-json
[![CircleCI Status](https://circleci.com/gh/scotiabank/fetch-restful-json.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/scotiabank/fetch-restful-json)

Simple RESTful APIs for [fetch clients](https://github.com/github/fetch).

## Usage

### Installation

```bash
yarn add --dev fetch-restful-json
```

### Example

Define a resource object:

```js
import fetchRestfulJson from 'fetch-restful-json';

const restfulFetch = fetchRestfulJson({
  base: '/api/v1'
});

const cakes = restfulFetch.service('cakes'); // Define resource '/api/v1/cakes'
```

Use it to make requests. Every method returns a promise that resolves to the JSON
object returned in the body of the response.

```js
await cake = cakes.create({ name: 'Chocolate' }); // POST request

await cake = cakes.update(cake.id, cake); // PUT request
await cake = cakes.patch(cake.id, cake); // PATCH request

await result = cakes.remove(cake.id); // DELETE request

await cakes = cakes.find(); // GET request
```

## Contributing

#### Scotiabank is committed to enriching the developer community through open source collaboration. We’ve just begun this exciting journey with all of you! At present, we’re only accepting contributions from individuals with whom we have a prior agreement. Stay tuned for more updates from us!
