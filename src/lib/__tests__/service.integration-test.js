import 'whatwg-fetch';
import fetchMock from 'fetch-mock';

import { buildService } from '../service';

describe('service', () => {
  const testEndpoint = 'http://myapp.com/users';
  const cake = { name: 'Chocolate' };
  const detailEndpoint = `${testEndpoint}/1`;

  afterEach(() => {
    fetchMock.restore();
  });

  describe('#find', () => {
    test('should make get request', () => {
      fetchMock.get(testEndpoint, cake);
      const service = buildService(testEndpoint);

      return service.find().then((result) => {
        expect(fetchMock.done(testEndpoint)).toEqual(true);
        expect(result).toEqual(cake);
      });
    });
  });

  describe('#create', () => {
    test('should make post request', () => {
      fetchMock.post(testEndpoint, { response: 200 });

      const service = buildService(testEndpoint);

      return service.create(cake).then((result) => {
        expect(fetchMock.done(testEndpoint)).toEqual(true);
        expect(result).toEqual({ response: 200 });
      });
    });
  });

  describe('#update', () => {
    test('should make put request', () => {
      fetchMock.put(detailEndpoint, { response: 200 });

      const service = buildService(testEndpoint);

      return service.update('1', cake).then((result) => {
        expect(fetchMock.done(detailEndpoint)).toEqual(true);
        expect(result).toEqual({ response: 200 });
      });
    });

    test('should make put request given partial update', () => {
      fetchMock.patch(detailEndpoint, { response: 200 });

      const service = buildService(testEndpoint);

      return service.update('1', cake, { partial: true }).then((result) => {
        expect(fetchMock.done(detailEndpoint)).toEqual(true);
        expect(result).toEqual({ response: 200 });
      });
    });
  });

  describe('#delete', () => {
    test('should make delete request', () => {
      fetchMock.delete(detailEndpoint, { response: 200 });

      const service = buildService(testEndpoint);

      return service.remove('1').then((result) => {
        expect(fetchMock.done(detailEndpoint)).toEqual(true);
        expect(result).toEqual({ response: 200 });
      });
    });
  });
});
