/** @module Wars */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return a list of wars
 * 
 * ---
 * Alternate route: `/dev/wars/`
 * 
 * Alternate route: `/legacy/wars/`
 * 
 * Alternate route: `/v1/wars/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.maxWarId] Only return wars with ID smaller than this
 * @return {Promise<object>} A list of war IDs, in descending order by war_id
 */
export function get_wars(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      max_war_id: options.maxWarId
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_warsOperation, parameters)
}

/**
 * Return details about a war
 * 
 * ---
 * Alternate route: `/dev/wars/{war_id}/`
 * 
 * Alternate route: `/legacy/wars/{war_id}/`
 * 
 * Alternate route: `/v1/wars/{war_id}/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} warId ID for a war
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Details about a war
 */
export function get_wars_war_id(warId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      war_id: warId
    }
  }
  return gateway.request(get_wars_war_idOperation, parameters)
}

/**
 * Return a list of kills related to a war
 * 
 * ---
 * Alternate route: `/dev/wars/{war_id}/killmails/`
 * 
 * Alternate route: `/legacy/wars/{war_id}/killmails/`
 * 
 * Alternate route: `/v1/wars/{war_id}/killmails/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} warId A valid war ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @return {Promise<object>} A list of killmail IDs and hashes
 */
export function get_wars_war_id_killmails(warId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      page: options.page
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      war_id: warId
    }
  }
  return gateway.request(get_wars_war_id_killmailsOperation, parameters)
}

const get_warsOperation = {
  path: '/wars/',
  method: 'get'
}

const get_wars_war_idOperation = {
  path: '/wars/{war_id}/',
  method: 'get'
}

const get_wars_war_id_killmailsOperation = {
  path: '/wars/{war_id}/killmails/',
  method: 'get'
}
