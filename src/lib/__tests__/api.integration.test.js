import 'whatwg-fetch';
import api from '../api';
import fetchMock from 'fetch-mock';

describe('service', () => {
  const testEndpoint = 'http://fakeapp.test/users';
  const cake = { name: 'Chocolate' };
  const detailEndpoint = `${testEndpoint}/1`;
  const verifyResponse = (response, expectedData) => {
    response.json().then((data) => expect(data).toEqual(expectedData));
  };

  afterEach(() => {
    fetchMock.restore();
  });

  describe('#find', () => {
    test('should make get request', () => {
      fetchMock.get(testEndpoint, cake);

      return fetch(testEndpoint).then((response) => {
        expect(fetchMock.done(testEndpoint)).toEqual(true);
        verifyResponse(response, cake);
      });
    });
  });

  describe('#create', () => {
    test('should make post request', () => {
      fetchMock.post(testEndpoint, { response: 200 });

      return api.post(testEndpoint, cake).then((response) => {
        expect(fetchMock.done(testEndpoint)).toEqual(true);
        verifyResponse(response, { response: 200 });
      });
    });
  });

  describe('#update', () => {
    test('should make put request', () => {
      fetchMock.put(detailEndpoint, { response: 200 });

      return api.put(detailEndpoint, cake).then((response) => {
        expect(fetchMock.done(detailEndpoint)).toEqual(true);
        verifyResponse(response, { response: 200 });
      });
    });

    test('should make put request given partial update', () => {
      fetchMock.patch(detailEndpoint, { response: 200 });

      return api.patch(detailEndpoint, cake).then((response) => {
        expect(fetchMock.done(detailEndpoint)).toEqual(true);
        verifyResponse(response, { response: 200 });
      });
    });
  });

  describe('#delete', () => {
    test('should make delete request', () => {
      fetchMock.delete(detailEndpoint, { response: 200 });

      return api.delete(detailEndpoint).then((response) => {
        expect(fetchMock.done(detailEndpoint)).toEqual(true);
        verifyResponse(response, { response: 200 });
      });
    });
  });
});
