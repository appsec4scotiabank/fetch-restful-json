import api from '../api';

describe('api', () => {
  const TEST_ENDPOINT = '/api/test';

  describe('#send', () => {
    test('should make default request', () => {
      global.fetch = jest.fn();
      api.send(TEST_ENDPOINT);
      expect(fetch).toHaveBeenCalledWith(TEST_ENDPOINT, {});
    });

    test('should pass down options', () => {
      global.fetch = jest.fn();
      api.send(TEST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/pdf' }
      });
      expect(fetch).toHaveBeenCalledWith(
        TEST_ENDPOINT,
        { method: 'POST', headers: { 'Content-Type': 'application/pdf' } }
      );
    });

    test('overrides options in order', () => {
      global.fetch = jest.fn();
      api.send(TEST_ENDPOINT, { method: 'POST' }, { method: 'GET' });
      expect(fetch).toHaveBeenCalledWith(
        TEST_ENDPOINT,
        { method: 'GET' }
      );
    });
  });

  describe('#get', () => {
    test('should make get request', () => {
      global.fetch = jest.fn();
      api.get(TEST_ENDPOINT);
      expect(fetch).toHaveBeenCalledWith(TEST_ENDPOINT, { method: 'GET' });
    });
  });

  describe('#post', () => {
    test('should make post request', () => {
      global.fetch = jest.fn();
      const cake = { name: 'Chocolate', tastiness: 5 };

      api.post(TEST_ENDPOINT, cake);

      expect(fetch).toHaveBeenCalledWith(
        TEST_ENDPOINT,
        { method: 'POST', body: JSON.stringify(cake) }
      );
    });
  });

  describe('#put', () => {
    test('should make put request', () => {
      global.fetch = jest.fn();
      const cake = { name: 'Chocolate', tastiness: 5 };

      api.put(TEST_ENDPOINT, cake);

      expect(fetch).toHaveBeenCalledWith(
        TEST_ENDPOINT,
        { method: 'PUT', body: JSON.stringify(cake) }
      );
    });
  });

  describe('#delete', () => {
    test('should make delete request', () => {
      global.fetch = jest.fn();

      api.delete(TEST_ENDPOINT);

      expect(fetch).toHaveBeenCalledWith(
        TEST_ENDPOINT,
        { method: 'DELETE' }
      );
    });
  });
});
