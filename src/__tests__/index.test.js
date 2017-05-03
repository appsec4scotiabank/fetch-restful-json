import exported from '../index';
import fetchRestfulJson from '../lib/fetch-restful-json';

describe('index', () => {
  test('exports fetch-restful-json', () => {
    expect(exported).toEqual(fetchRestfulJson);
  });
});
