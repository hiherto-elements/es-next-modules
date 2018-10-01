export const utils = {
  isString(arg) {
    return typeof(arg) === 'string';
  },
  isObject(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull(arg) {
    return arg === null;
  },
  isNullOrUndefined(arg) {
    return arg == null;
  }
};