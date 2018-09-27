/** @module Sovereignty */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Shows sovereignty data for campaigns.
 * 
 * ---
 * Alternate route: `/dev/sovereignty/campaigns/`
 * 
 * Alternate route: `/legacy/sovereignty/campaigns/`
 * 
 * Alternate route: `/v1/sovereignty/campaigns/`
 * 
 * ---
 * This route is cached for up to 5 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of sovereignty campaigns
 */
export function get_sovereignty_campaigns(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_sovereignty_campaignsOperation, parameters)
}

/**
 * Shows sovereignty information for solar systems
 * 
 * ---
 * Alternate route: `/dev/sovereignty/map/`
 * 
 * Alternate route: `/legacy/sovereignty/map/`
 * 
 * Alternate route: `/v1/sovereignty/map/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of sovereignty information for solar systems in New Eden
 */
export function get_sovereignty_map(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_sovereignty_mapOperation, parameters)
}

/**
 * Shows sovereignty data for structures.
 * 
 * ---
 * Alternate route: `/dev/sovereignty/structures/`
 * 
 * Alternate route: `/legacy/sovereignty/structures/`
 * 
 * Alternate route: `/v1/sovereignty/structures/`
 * 
 * ---
 * This route is cached for up to 120 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of sovereignty structures
 */
export function get_sovereignty_structures(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_sovereignty_structuresOperation, parameters)
}

const get_sovereignty_campaignsOperation = {
  path: '/sovereignty/campaigns/',
  method: 'get'
}

const get_sovereignty_mapOperation = {
  path: '/sovereignty/map/',
  method: 'get'
}

const get_sovereignty_structuresOperation = {
  path: '/sovereignty/structures/',
  method: 'get'
}
