import { mockResponse } from 'test/utils';

import api from '../api';
import { buildService } from '../service';

describe('crud-service', () => {
  const TEST_ENDPOINT = '/api/test';
  const DEFAULT_OPTIONS = {
    headers: { 'Content-Type': 'application/json' }
  };
  const cake = { name: 'Chocolate' };

  describe('#find', () => {
    test('should make get request', () => {
      api.get = jest.fn().mockImplementation(mockResponse({ body: cake }));

      const service = buildService(TEST_ENDPOINT);

      return service.find().then((result) => {
        expect(api.get).toHaveBeenCalledWith(TEST_ENDPOINT, DEFAULT_OPTIONS);
        expect(result).toEqual(cake);
      });
    });
  });

  describe('#create', () => {
    test('should make post request', () => {
      api.post = jest.fn().mockImplementation(mockResponse({ body: cake }));

      const service = buildService(TEST_ENDPOINT);

      return service.create(cake).then((result) => {
        expect(api.post).toHaveBeenCalledWith(
          TEST_ENDPOINT,
          cake,
          DEFAULT_OPTIONS
        );
        expect(result).toEqual(cake);
      });
    });
  });

  describe('#update', () => {
    test('should make put request', () => {
      api.put = jest.fn().mockImplementation(mockResponse({ body: cake }));

      const service = buildService(TEST_ENDPOINT);

      return service.update('1', cake).then((result) => {
        expect(api.put).toHaveBeenCalledWith(
          `${TEST_ENDPOINT}/1`,
          cake,
          DEFAULT_OPTIONS
        );
        expect(result).toEqual(cake);
      });
    });
  });

  describe('#delete', () => {
    test('should make delete request', () => {
      api.delete = jest.fn().mockImplementation(mockResponse({}));

      const service = buildService(TEST_ENDPOINT);

      return service.delete('1').then((result) => {
        expect(api.delete).toHaveBeenCalledWith(
          `${TEST_ENDPOINT}/1`,
          DEFAULT_OPTIONS
        );
      });
    });
  });
});
