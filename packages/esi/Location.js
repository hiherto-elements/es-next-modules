/** @module Location */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/location/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/location/`
 * 
 * Alternate route: `/v1/characters/{character_id}/location/`
 * 
 * ---
 * This route is cached for up to 5 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
 */
export function get_characters_character_id_location(characterId, options) {
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
  return gateway.request(get_characters_character_id_locationOperation, parameters)
}

/**
 * Checks if the character is currently online
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/online/`
 * 
 * Alternate route: `/v2/characters/{character_id}/online/`
 * 
 * ---
 * This route is cached for up to 60 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Object describing the character's online status
 */
export function get_characters_character_id_online(characterId, options) {
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
  return gateway.request(get_characters_character_id_onlineOperation, parameters)
}

/**
 * Get the current ship type, name and id
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/ship/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/ship/`
 * 
 * Alternate route: `/v1/characters/{character_id}/ship/`
 * 
 * ---
 * This route is cached for up to 5 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Get the current ship type, name and id
 */
export function get_characters_character_id_ship(characterId, options) {
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
  return gateway.request(get_characters_character_id_shipOperation, parameters)
}

const get_characters_character_id_locationOperation = {
  path: '/characters/{character_id}/location/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-location.read_location.v1']
    }
  ]
}

const get_characters_character_id_onlineOperation = {
  path: '/characters/{character_id}/online/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-location.read_online.v1']
    }
  ]
}

const get_characters_character_id_shipOperation = {
  path: '/characters/{character_id}/ship/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-location.read_ship_type.v1']
    }
  ]
}
