/** @module Alliance */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * List all active player alliances
 * 
 * ---
 * Alternate route: `/dev/alliances/`
 * 
 * Alternate route: `/legacy/alliances/`
 * 
 * Alternate route: `/v1/alliances/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} List of Alliance IDs
 */
export function get_alliances(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_alliancesOperation, parameters)
}

/**
 * Public information about an alliance
 * 
 * ---
 * Alternate route: `/dev/alliances/{alliance_id}/`
 * 
 * Alternate route: `/v3/alliances/{alliance_id}/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} allianceId An EVE alliance ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Public data about an alliance
 */
export function get_alliances_alliance_id(allianceId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      alliance_id: allianceId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_alliances_alliance_idOperation, parameters)
}

/**
 * List all current member corporations of an alliance
 * 
 * ---
 * Alternate route: `/dev/alliances/{alliance_id}/corporations/`
 * 
 * Alternate route: `/legacy/alliances/{alliance_id}/corporations/`
 * 
 * Alternate route: `/v1/alliances/{alliance_id}/corporations/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} allianceId An EVE alliance ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} List of corporation IDs
 */
export function get_alliances_alliance_id_corporations(allianceId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      alliance_id: allianceId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_alliances_alliance_id_corporationsOperation, parameters)
}

/**
 * Get the icon urls for a alliance
 * 
 * ---
 * Alternate route: `/dev/alliances/{alliance_id}/icons/`
 * 
 * Alternate route: `/legacy/alliances/{alliance_id}/icons/`
 * 
 * Alternate route: `/v1/alliances/{alliance_id}/icons/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} allianceId An EVE alliance ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Icon URLs for the given alliance id and server
 */
export function get_alliances_alliance_id_icons(allianceId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      alliance_id: allianceId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_alliances_alliance_id_iconsOperation, parameters)
}

const get_alliancesOperation = {
  path: '/alliances/',
  method: 'get'
}

const get_alliances_alliance_idOperation = {
  path: '/alliances/{alliance_id}/',
  method: 'get'
}

const get_alliances_alliance_id_corporationsOperation = {
  path: '/alliances/{alliance_id}/corporations/',
  method: 'get'
}

const get_alliances_alliance_id_iconsOperation = {
  path: '/alliances/{alliance_id}/icons/',
  method: 'get'
}
