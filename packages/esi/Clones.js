/** @module Clones */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * A list of the character's clones
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/clones/`
 * 
 * Alternate route: `/v3/characters/{character_id}/clones/`
 * 
 * ---
 * This route is cached for up to 120 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Clone information for the given character
 */
export function get_characters_character_id_clones(characterId, options) {
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
  return gateway.request(get_characters_character_id_clonesOperation, parameters)
}

/**
 * Return implants on the active clone of a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/implants/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/implants/`
 * 
 * Alternate route: `/v1/characters/{character_id}/implants/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of implant type ids
 */
export function get_characters_character_id_implants(characterId, options) {
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
  return gateway.request(get_characters_character_id_implantsOperation, parameters)
}

const get_characters_character_id_clonesOperation = {
  path: '/characters/{character_id}/clones/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-clones.read_clones.v1']
    }
  ]
}

const get_characters_character_id_implantsOperation = {
  path: '/characters/{character_id}/implants/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-clones.read_implants.v1']
    }
  ]
}
