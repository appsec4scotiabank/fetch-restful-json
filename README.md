## fetch-restful-json

Simple RESTful APIs for [fetch clients](https://github.com/github/fetch).

## Usage

### Installation

```bash
yarn add --dev fetch-restful-json
```

### Example

```js
import fetchRestfulJson from 'fetch-restful-json';

const restfulFetch = fetchRestfulJson({
  base: '/api/v1'
});

const cakes = restfulFetch.service('cakes'); // Define resource '/api/v1/cakes'

await cake = cakes.create({ name: 'Chocolate' }); // POST request

cakes.update(cake.id, cake); // PUT request
cakes.patch(cake.id, cake); // PATCH request

cakes.remove(cake.id); // DELETE request

await cakes = cakes.find(); // GET request
```

### API

TO DO.
