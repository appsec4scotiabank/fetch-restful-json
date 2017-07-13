import merge from 'lodash/merge';

const send = (path, ...options) => fetch(path, merge({}, ...options));

const get = (path) => send(path, { method: 'GET' });

const jsonBody = (body) => ({ body: JSON.stringify(body) });

const post = (path, body) => send(
  path,
  { method: 'POST' },
  jsonBody(body)
);

const put = (path, body) => send(
  path,
  { method: 'PUT' },
  jsonBody(body)
);

const patch = (path, body) => send(
  path,
  { method: 'PATCH' },
  jsonBody(body)
);

const del = (path) => send(path, { method: 'DELETE' });

export default {
  send,
  get,
  post,
  put,
  patch,
  delete: del
};
