import url from 'url';
import path from 'path';
import api from './api';

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' }
};

const getUrl = (endpoint, ...paths) => {
  let parsedUrl = url.parse(endpoint);
  parsedUrl.pathname = path.join(parsedUrl.pathname, ...paths);
  return url.format(parsedUrl);
};

const jsonFromPromise = (request) => request.then(response => response.json());

const makeRequest = (method, ...args) => jsonFromPromise(
  method(...args, DEFAULT_OPTIONS)
);

class Service {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  find() {
    return makeRequest(api.get, this.endpoint);
  }
  create(body) {
    return makeRequest(api.post, this.endpoint, body);
  }
  update(id, body, { partial } = {}) {
    return makeRequest(
      partial ? api.patch : api.put,
      getUrl(this.endpoint, id),
      body
    );
  }
  remove(id) {
    return makeRequest(api.delete, getUrl(this.endpoint, id));
  }
}

export function buildService(endpoint) {
  return new Service(endpoint);
}
