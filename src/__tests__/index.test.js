import fetchRestfulJson from '../index';
import { buildCRUDService } from '../lib/crud-service';

describe('index', () => {
  test('exports buildCRUDService', () => {
    expect(fetchRestfulJson).toEqual(buildCRUDService);
  });
});
