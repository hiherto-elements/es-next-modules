/** @module Insurance */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return available insurance levels for all ship types
 * 
 * ---
 * Alternate route: `/dev/insurance/prices/`
 * 
 * Alternate route: `/legacy/insurance/prices/`
 * 
 * Alternate route: `/v1/insurance/prices/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} A list of insurance levels for all ship types
 */
export function get_insurance_prices(options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    query: {
      datasource: options.datasource,
      language: options.language
    }
  }
  return gateway.request(get_insurance_pricesOperation, parameters)
}

const get_insurance_pricesOperation = {
  path: '/insurance/prices/',
  method: 'get'
}
