import fetchRestfulJson from '../index';
import { buildService } from '../lib/service';

describe('index', () => {
  test('exports buildService', () => {
    expect(fetchRestfulJson).toEqual(buildService);
  });
});
