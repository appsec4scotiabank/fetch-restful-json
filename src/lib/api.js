import merge from 'lodash/merge';

export const DEFAULT_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

const send = (path, options) => fetch(path, merge(DEFAULT_OPTIONS, options));

const post = (path, body) => send(
  path,
  { method: 'POST', body: JSON.stringify(body) }
);

const put = (path, body) => send(
  path,
  { method: 'PUT', body: JSON.stringify(body) }
);

const fetchDelete = (path) => send(path, { method: 'DELETE' });

export default {
  send,
  get: send,
  post,
  put,
  delete: fetchDelete
};
