import merge from 'lodash/merge';

const send = (path, ...options) => fetch(path, merge({}, ...options));

const get = (path) => send(path, { method: 'GET' });

const post = (path, body) => send(
  path,
  { method: 'POST', body: JSON.stringify(body) }
);

const put = (path, body) => send(
  path,
  { method: 'PUT', body: JSON.stringify(body) }
);

const del = (path) => send(path, { method: 'DELETE' });

export default {
  send,
  get,
  post,
  put,
  delete: del
};
