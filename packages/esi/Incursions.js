/** @module Incursions */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return a list of current incursions
 * 
 * ---
 * Alternate route: `/dev/incursions/`
 * 
 * Alternate route: `/legacy/incursions/`
 * 
 * Alternate route: `/v1/incursions/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of incursions
 */
export function get_incursions(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_incursionsOperation, parameters)
}

const get_incursionsOperation = {
  path: '/incursions/',
  method: 'get'
}
