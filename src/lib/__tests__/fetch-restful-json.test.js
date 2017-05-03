import * as crud from '../service';

import fetchRestfulJson from '../fetch-restful-json';

describe('fetch-restful-json', () => {
  test('accepts options', () => {
    const options = { base: 'api', headers: () => {} };
    const restful = fetchRestfulJson(options);
    expect(restful.options).toEqual(options);
  });

  test('defaults options', () => {
    const restful = fetchRestfulJson();
    expect(restful.options).toEqual({
      base: '',
      headers: {}
    });
  });

  describe('#service', () => {
    test('builds service object', () => {
      const endpoint = 'api/cakes';
      crud.buildService = jest.fn();

      fetchRestfulJson({}).service(endpoint);

      expect(crud.buildService).toHaveBeenCalledWith(endpoint);
    });

    test('defaults endpoint argument for service', () => {
      crud.buildService = jest.fn();

      fetchRestfulJson({}).service();

      expect(crud.buildService).toHaveBeenCalledWith('');
    });
  });
});
