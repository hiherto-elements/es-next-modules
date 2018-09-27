/** @module Bookmarks */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * A list of your character's personal bookmarks
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/bookmarks/`
 * 
 * Alternate route: `/v2/characters/{character_id}/bookmarks/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of bookmarks
 */
export function get_characters_character_id_bookmarks(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      page: options.page,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_bookmarksOperation, parameters)
}

/**
 * A list of your character's personal bookmark folders
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/bookmarks/folders/`
 * 
 * Alternate route: `/v2/characters/{character_id}/bookmarks/folders/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of bookmark folders
 */
export function get_characters_character_id_bookmarks_folders(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      page: options.page,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_bookmarks_foldersOperation, parameters)
}

/**
 * A list of your corporation's bookmarks
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/bookmarks/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/bookmarks/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of corporation owned bookmarks
 */
export function get_corporations_corporation_id_bookmarks(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource,
      page: options.page,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_corporations_corporation_id_bookmarksOperation, parameters)
}

/**
 * A list of your corporation's bookmark folders
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/bookmarks/folders/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/folders/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/bookmarks/folders/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of corporation owned bookmark folders
 */
export function get_corporations_corporation_id_bookmarks_folders(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource,
      page: options.page,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_corporations_corporation_id_bookmarks_foldersOperation, parameters)
}

const get_characters_character_id_bookmarksOperation = {
  path: '/characters/{character_id}/bookmarks/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-bookmarks.read_character_bookmarks.v1']
    }
  ]
}

const get_characters_character_id_bookmarks_foldersOperation = {
  path: '/characters/{character_id}/bookmarks/folders/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-bookmarks.read_character_bookmarks.v1']
    }
  ]
}

const get_corporations_corporation_id_bookmarksOperation = {
  path: '/corporations/{corporation_id}/bookmarks/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-bookmarks.read_corporation_bookmarks.v1']
    }
  ]
}

const get_corporations_corporation_id_bookmarks_foldersOperation = {
  path: '/corporations/{corporation_id}/bookmarks/folders/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-bookmarks.read_corporation_bookmarks.v1']
    }
  ]
}
