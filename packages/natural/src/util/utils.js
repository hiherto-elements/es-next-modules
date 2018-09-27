
/**
 * Generate a replacing function given a table of patterns. Inspired by:
 * http://code.google.com/p/jslibs/wiki/JavascriptTips#String_converter
 * The order of elements is significant. Longer elements should be listed first.
 * @see Speed test http://jsperf.com/build-a-regexp-table
 *
 * @param {Object.<string, string>} translationTable The translation table of key value.
 * @return {function(string): string} A translating function.
 */
function replacer(translationTable) {
  /**
   * An array of translationTable keys.
   * @type {Array.<string>}
   */
  const pattern = [];

  /**
   * The regular expression doing the replacement job.
   * @type {RegExp}
   */
  let regExp;

  /**
   * Used to iterate over translationTable.
   * @type {string}
   */
  let key;

  for (key in translationTable) {
    // Escaping regexp special chars.
    // @see Speed test for type casting to string http://jsperf.com/string-type-casting/2
    // @see http://closure-library.googlecode.com/svn/docs/closure_goog_string_string.js.source.html#line956
    key = (`${key}`).replace(/([-()\[\]{}+?*.$\^|,:#<!\\\/])/g, '\\$1').
      replace(/\x08/g, '\\x08');

    pattern.push(key);
  }

  regExp = new RegExp(pattern.join('|'), 'g');

  /**
   * @param {string} str Input string.
   * @return {string} The string replaced.
   */
  return str => str.replace(regExp, str => translationTable[str]);
}


/**
 * Exchanges all keys with their associated values in an object.
 *
 * @param {Object.<string, string>} obj An object of strings.
 * @return {Object.<string, string>} An object of strings.
 */
function flip(obj) {
  const newObj = Object.create(null);
  let key;

  for (key in obj) {
    newObj[obj[key]] = key;
  }

  return newObj;
}


/**
 * Merge several objects. Properties from earlier objects are overwritten by
 * laters's in case of conflict.
 *
 * @param {...Object.<string, string>} var_args One or more objects of strings.
 * @return {!Object.<string, string>} An object of strings.
 */
function merge(var_args) {
  const args = [].slice.call(arguments);
  const newObj = Object.create(null);
  let id = 0;
  let key;

  while (args[id]) {
    for (key in args[id]) {
      newObj[key] = args[id][key];
    }

    id++;
  }

  return newObj;
}

export {replacer};
export {flip};
export {merge};