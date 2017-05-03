import merge from 'lodash/merge';

import { buildService } from './service';

const DEFAULT_OPTIONS = {
  base: '',
  headers: {}
};

class ServiceBuilder {
  constructor(options) {
    this.options = merge(options, DEFAULT_OPTIONS);
  }
  service(endpoint) {
    return buildService(endpoint || this.options.base);
  }
}

export default function service(options) {
  return new ServiceBuilder(options);
}
