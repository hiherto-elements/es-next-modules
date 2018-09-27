/** @module FactionWarfare */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Statistical overview of a character involved in faction warfare
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/fw/stats/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/fw/stats/`
 * 
 * Alternate route: `/v1/characters/{character_id}/fw/stats/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Faction warfare statistics for a given character
 */
export function get_characters_character_id_fw_stats(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_fw_statsOperation, parameters)
}

/**
 * Statistics about a corporation involved in faction warfare
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/fw/stats/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/fw/stats/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/fw/stats/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Faction warfare statistics for a given corporation
 */
export function get_corporations_corporation_id_fw_stats(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_corporations_corporation_id_fw_statsOperation, parameters)
}

/**
 * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday
 * 
 * ---
 * Alternate route: `/dev/fw/leaderboards/`
 * 
 * Alternate route: `/legacy/fw/leaderboards/`
 * 
 * Alternate route: `/v1/fw/leaderboards/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Corporation leaderboard of kills and victory points within faction warfare
 */
export function get_fw_leaderboards(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_fw_leaderboardsOperation, parameters)
}

/**
 * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
 * 
 * ---
 * Alternate route: `/dev/fw/leaderboards/characters/`
 * 
 * Alternate route: `/legacy/fw/leaderboards/characters/`
 * 
 * Alternate route: `/v1/fw/leaderboards/characters/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Character leaderboard of kills and victory points within faction warfare
 */
export function get_fw_leaderboards_characters(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_fw_leaderboards_charactersOperation, parameters)
}

/**
 * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday
 * 
 * ---
 * Alternate route: `/dev/fw/leaderboards/corporations/`
 * 
 * Alternate route: `/legacy/fw/leaderboards/corporations/`
 * 
 * Alternate route: `/v1/fw/leaderboards/corporations/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Corporation leaderboard of kills and victory points within faction warfare
 */
export function get_fw_leaderboards_corporations(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_fw_leaderboards_corporationsOperation, parameters)
}

/**
 * Statistical overviews of factions involved in faction warfare
 * 
 * ---
 * Alternate route: `/dev/fw/stats/`
 * 
 * Alternate route: `/legacy/fw/stats/`
 * 
 * Alternate route: `/v1/fw/stats/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Per faction breakdown of faction warfare statistics
 */
export function get_fw_stats(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_fw_statsOperation, parameters)
}

/**
 * An overview of the current ownership of faction warfare solar systems
 * 
 * ---
 * Alternate route: `/dev/fw/systems/`
 * 
 * Alternate route: `/v2/fw/systems/`
 * 
 * ---
 * This route is cached for up to 1800 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} All faction warfare solar systems
 */
export function get_fw_systems(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_fw_systemsOperation, parameters)
}

/**
 * Data about which NPC factions are at war
 * 
 * ---
 * Alternate route: `/dev/fw/wars/`
 * 
 * Alternate route: `/legacy/fw/wars/`
 * 
 * Alternate route: `/v1/fw/wars/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of NPC factions at war
 */
export function get_fw_wars(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_fw_warsOperation, parameters)
}

const get_characters_character_id_fw_statsOperation = {
  path: '/characters/{character_id}/fw/stats/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_fw_stats.v1']
    }
  ]
}

const get_corporations_corporation_id_fw_statsOperation = {
  path: '/corporations/{corporation_id}/fw/stats/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_fw_stats.v1']
    }
  ]
}

const get_fw_leaderboardsOperation = {
  path: '/fw/leaderboards/',
  method: 'get'
}

const get_fw_leaderboards_charactersOperation = {
  path: '/fw/leaderboards/characters/',
  method: 'get'
}

const get_fw_leaderboards_corporationsOperation = {
  path: '/fw/leaderboards/corporations/',
  method: 'get'
}

const get_fw_statsOperation = {
  path: '/fw/stats/',
  method: 'get'
}

const get_fw_systemsOperation = {
  path: '/fw/systems/',
  method: 'get'
}

const get_fw_warsOperation = {
  path: '/fw/wars/',
  method: 'get'
}
