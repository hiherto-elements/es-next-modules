/** @module Fittings */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return fittings of a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/fittings/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/fittings/`
 * 
 * Alternate route: `/v1/characters/{character_id}/fittings/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of fittings
 */
export function get_characters_character_id_fittings(characterId, options) {
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
  return gateway.request(get_characters_character_id_fittingsOperation, parameters)
}

/**
 * Save a new fitting for a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/fittings/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/fittings/`
 * 
 * Alternate route: `/v1/characters/{character_id}/fittings/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of fittings
 */
export function post_characters_character_id_fittings(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(post_characters_character_id_fittingsOperation, parameters)
}

/**
 * Delete a fitting from a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/fittings/{fitting_id}/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/fittings/{fitting_id}/`
 * 
 * Alternate route: `/v1/characters/{character_id}/fittings/{fitting_id}/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} fittingId ID for a fitting of this character
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Fitting deleted
 */
export function delete_characters_character_id_fittings_fitting_id(characterId, fittingId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      fitting_id: fittingId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(delete_characters_character_id_fittings_fitting_idOperation, parameters)
}

const get_characters_character_id_fittingsOperation = {
  path: '/characters/{character_id}/fittings/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fittings.read_fittings.v1']
    }
  ]
}

const post_characters_character_id_fittingsOperation = {
  path: '/characters/{character_id}/fittings/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fittings.write_fittings.v1']
    }
  ]
}

const delete_characters_character_id_fittings_fitting_idOperation = {
  path: '/characters/{character_id}/fittings/{fitting_id}/',
  method: 'delete',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fittings.write_fittings.v1']
    }
  ]
}
