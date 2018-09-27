/** @module Skills */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return attributes of a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/attributes/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/attributes/`
 * 
 * Alternate route: `/v1/characters/{character_id}/attributes/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Attributes of a character
 */
export function get_characters_character_id_attributes(characterId, options) {
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
  return gateway.request(get_characters_character_id_attributesOperation, parameters)
}

/**
 * List the configured skill queue for the given character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/skillqueue/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/skillqueue/`
 * 
 * Alternate route: `/v2/characters/{character_id}/skillqueue/`
 * 
 * ---
 * This route is cached for up to 120 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} The current skill queue, sorted ascending by finishing time
 */
export function get_characters_character_id_skillqueue(characterId, options) {
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
  return gateway.request(get_characters_character_id_skillqueueOperation, parameters)
}

/**
 * List all trained skills for the given character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/skills/`
 * 
 * Alternate route: `/v4/characters/{character_id}/skills/`
 * 
 * ---
 * This route is cached for up to 120 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Known skills for the character
 */
export function get_characters_character_id_skills(characterId, options) {
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
  return gateway.request(get_characters_character_id_skillsOperation, parameters)
}

const get_characters_character_id_attributesOperation = {
  path: '/characters/{character_id}/attributes/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-skills.read_skills.v1']
    }
  ]
}

const get_characters_character_id_skillqueueOperation = {
  path: '/characters/{character_id}/skillqueue/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-skills.read_skillqueue.v1']
    }
  ]
}

const get_characters_character_id_skillsOperation = {
  path: '/characters/{character_id}/skills/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-skills.read_skills.v1']
    }
  ]
}
