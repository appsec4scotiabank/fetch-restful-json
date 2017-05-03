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

class Service {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  static jsonFromPromise(request) {
    return request.then(response => response.json());
  }
  find() {
    return Service.jsonFromPromise(
      api.get(this.endpoint, DEFAULT_OPTIONS)
    );
  }
  create(body) {
    return Service.jsonFromPromise(
      api.post(this.endpoint, body, DEFAULT_OPTIONS)
    );
  }
  update(id, body) {
    return Service.jsonFromPromise(
      api.put(getUrl(this.endpoint, id), body, DEFAULT_OPTIONS)
    );
  }
  delete(id) {
    return Service.jsonFromPromise(
      api.delete(getUrl(this.endpoint, id), DEFAULT_OPTIONS)
    );
  }
}

export function buildService(endpoint) {
  return new Service(endpoint);
}
