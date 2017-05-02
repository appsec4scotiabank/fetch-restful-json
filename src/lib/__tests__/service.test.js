import { mockResponse } from 'test/utils';

import api from '../api';
import { buildService } from '../service';

describe('crud-service', () => {
  const TEST_ENDPOINT = '/api/test';
  const cake = { name: 'Chocolate' };

  describe('#find', () => {
    test('should make get request', () => {
      api.get = jest.fn().mockImplementation(mockResponse({ body: cake }));

      const service = buildService(TEST_ENDPOINT);

      return service.find().then((result) => {
        expect(api.get).toHaveBeenCalledWith(TEST_ENDPOINT);
        expect(result).toEqual(cake);
      });
    });
  });

  describe('#create', () => {
    test('should make post request', () => {
      api.post = jest.fn().mockImplementation(mockResponse({ body: cake }));

      const service = buildService(TEST_ENDPOINT);

      return service.create(cake).then((result) => {
        expect(api.post).toHaveBeenCalledWith(TEST_ENDPOINT, cake);
        expect(result).toEqual(cake);
      });
    });
  });
});
