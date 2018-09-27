/** @module Assets */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return a list of the characters assets
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/assets/`
 * 
 * Alternate route: `/v3/characters/{character_id}/assets/`
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
 * @return {Promise<object>} A flat list of the users assets
 */
export function get_characters_character_id_assets(characterId, options) {
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
  return gateway.request(get_characters_character_id_assetsOperation, parameters)
}

/**
 * Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/assets/locations/`
 * 
 * Alternate route: `/v2/characters/{character_id}/assets/locations/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of asset locations
 */
export function post_characters_character_id_assets_locations(characterId, options) {
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
  return gateway.request(post_characters_character_id_assets_locationsOperation, parameters)
}

/**
 * Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/assets/names/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/assets/names/`
 * 
 * Alternate route: `/v1/characters/{character_id}/assets/names/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of asset names
 */
export function post_characters_character_id_assets_names(characterId, options) {
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
  return gateway.request(post_characters_character_id_assets_namesOperation, parameters)
}

/**
 * Return a list of the corporation assets
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/assets/`
 * 
 * Alternate route: `/v3/corporations/{corporation_id}/assets/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Director
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of assets
 */
export function get_corporations_corporation_id_assets(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_assetsOperation, parameters)
}

/**
 * Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/assets/locations/`
 * 
 * Alternate route: `/v2/corporations/{corporation_id}/assets/locations/`
 * 
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Director
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of asset locations
 */
export function post_corporations_corporation_id_assets_locations(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(post_corporations_corporation_id_assets_locationsOperation, parameters)
}

/**
 * Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/assets/names/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/assets/names/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/assets/names/`
 * 
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Director
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of asset names
 */
export function post_corporations_corporation_id_assets_names(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(post_corporations_corporation_id_assets_namesOperation, parameters)
}

const get_characters_character_id_assetsOperation = {
  path: '/characters/{character_id}/assets/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-assets.read_assets.v1']
    }
  ]
}

const post_characters_character_id_assets_locationsOperation = {
  path: '/characters/{character_id}/assets/locations/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-assets.read_assets.v1']
    }
  ]
}

const post_characters_character_id_assets_namesOperation = {
  path: '/characters/{character_id}/assets/names/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-assets.read_assets.v1']
    }
  ]
}

const get_corporations_corporation_id_assetsOperation = {
  path: '/corporations/{corporation_id}/assets/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-assets.read_corporation_assets.v1']
    }
  ]
}

const post_corporations_corporation_id_assets_locationsOperation = {
  path: '/corporations/{corporation_id}/assets/locations/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-assets.read_corporation_assets.v1']
    }
  ]
}

const post_corporations_corporation_id_assets_namesOperation = {
  path: '/corporations/{corporation_id}/assets/names/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-assets.read_corporation_assets.v1']
    }
  ]
}
