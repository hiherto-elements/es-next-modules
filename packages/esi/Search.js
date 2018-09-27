/** @module Search */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Search for entities that match a given sub-string.
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/search/`
 * 
 * Alternate route: `/v3/characters/{character_id}/search/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {string[]} categories Type of entities to search for
 * @param {number} characterId An EVE character ID
 * @param {string} search The string to search on
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} [options.strict] Whether the search should be a strict match
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of search results
 */
export function get_characters_character_id_search(categories, characterId, search, options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    query: {
      categories,
      datasource: options.datasource,
      language: options.language,
      search,
      strict: options.strict,
      token: options.token
    },
    path: {
      character_id: characterId
    }
  }
  return gateway.request(get_characters_character_id_searchOperation, parameters)
}

/**
 * Search for entities that match a given sub-string.
 * 
 * ---
 * Alternate route: `/dev/search/`
 * 
 * Alternate route: `/v2/search/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {string[]} categories Type of entities to search for
 * @param {string} search The string to search on
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} [options.strict] Whether the search should be a strict match
 * @return {Promise<object>} A list of search results
 */
export function get_search(categories, search, options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    query: {
      categories,
      datasource: options.datasource,
      language: options.language,
      search,
      strict: options.strict
    }
  }
  return gateway.request(get_searchOperation, parameters)
}

const get_characters_character_id_searchOperation = {
  path: '/characters/{character_id}/search/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-search.search_structures.v1']
    }
  ]
}

const get_searchOperation = {
  path: '/search/',
  method: 'get'
}
