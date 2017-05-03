import url from 'url';
import path from 'path';
import api from './api';

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' }
};

const json = (request) => request.then(result => result.json());

const getUrl = (endpoint, ...paths) => {
  let parsedUrl = url.parse(endpoint);
  parsedUrl.pathname = path.join(parsedUrl.pathname, ...paths);
  return url.format(parsedUrl);
};

export function buildService(endpoint) {
  return {
    find: () => json(api.get(endpoint, DEFAULT_OPTIONS)),
    create: (body) => json(api.post(endpoint, body, DEFAULT_OPTIONS)),
    update: (id, body) => json(
      api.put(getUrl(endpoint, id), body, DEFAULT_OPTIONS)
    ),
    delete: (id) => json(api.delete(getUrl(endpoint, id), DEFAULT_OPTIONS))
  };
}
