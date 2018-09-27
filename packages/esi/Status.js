/** @module Status */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * EVE Server status
 * 
 * ---
 * Alternate route: `/dev/status/`
 * 
 * Alternate route: `/legacy/status/`
 * 
 * Alternate route: `/v1/status/`
 * 
 * ---
 * This route is cached for up to 30 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Server status
 */
export function get_status(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_statusOperation, parameters)
}

const get_statusOperation = {
  path: '/status/',
  method: 'get'
}
