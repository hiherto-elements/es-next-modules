/** @module Routes */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get the systems between origin and destination
 * 
 * ---
 * Alternate route: `/dev/route/{origin}/{destination}/`
 * 
 * Alternate route: `/legacy/route/{origin}/{destination}/`
 * 
 * Alternate route: `/v1/route/{origin}/{destination}/`
 * 
 * ---
 * This route is cached for up to 86400 seconds
 * 
 * @param {number} destination destination solar system ID
 * @param {number} origin origin solar system ID
 * @param {object} options Optional options
 * @param {number[]} [options.avoid] avoid solar system ID(s)
 * @param {number[][]} [options.connections] connected solar system pairs
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.flag] route security preference
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Solar systems in route from origin to destination
 */
export function get_route_origin_destination(destination, origin, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      avoid: options.avoid,
      connections: options.connections,
      datasource: options.datasource,
      flag: options.flag
    },
    path: {
      destination,
      origin
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_route_origin_destinationOperation, parameters)
}

const get_route_origin_destinationOperation = {
  path: '/route/{origin}/{destination}/',
  method: 'get'
}
