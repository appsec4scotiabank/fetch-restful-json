import url from 'url';
import path from 'path';
import api from './api';

const json = (request) => request.then(result => result.json());

const getUrl = (endpoint, ...paths) => {
  let parsedUrl = url.parse(endpoint);
  parsedUrl.pathname = path.join(parsedUrl.pathname, ...paths);
  return url.format(parsedUrl);
};

export function buildService(endpoint) {
  return {
    find: () => json(api.get(endpoint)),
    create: (body) => json(api.post(endpoint, body)),
    update: (id, body) => json(api.put(getUrl(endpoint, id), body)),
    delete: (id) => json(api.delete(getUrl(endpoint, id)))
  };
}
