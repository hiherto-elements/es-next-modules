/** @module Loyalty */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return a list of loyalty points for all corporations the character has worked for
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/loyalty/points/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/loyalty/points/`
 * 
 * Alternate route: `/v1/characters/{character_id}/loyalty/points/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of loyalty points
 */
export function get_characters_character_id_loyalty_points(characterId, options) {
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
  return gateway.request(get_characters_character_id_loyalty_pointsOperation, parameters)
}

/**
 * Return a list of offers from a specific corporation's loyalty store
 * 
 * ---
 * Alternate route: `/dev/loyalty/stores/{corporation_id}/offers/`
 * 
 * Alternate route: `/legacy/loyalty/stores/{corporation_id}/offers/`
 * 
 * Alternate route: `/v1/loyalty/stores/{corporation_id}/offers/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of offers
 */
export function get_loyalty_stores_corporation_id_offers(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_loyalty_stores_corporation_id_offersOperation, parameters)
}

const get_characters_character_id_loyalty_pointsOperation = {
  path: '/characters/{character_id}/loyalty/points/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_loyalty.v1']
    }
  ]
}

const get_loyalty_stores_corporation_id_offersOperation = {
  path: '/loyalty/stores/{corporation_id}/offers/',
  method: 'get'
}
