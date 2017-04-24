import merge from 'lodash/merge';

export const DEFAULT_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

const send = (path, options) => fetch(path, merge(DEFAULT_OPTIONS, options));

const post = (path, body) => fetch(
  path,
  merge(DEFAULT_OPTIONS, {
    method: 'POST',
    body: JSON.stringify(body)
  })
);

export default {
  send,
  get: send,
  post
};
