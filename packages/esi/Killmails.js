/** @module Killmails */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return a list of a character's kills and losses going back 90 days
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/killmails/recent/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/killmails/recent/`
 * 
 * Alternate route: `/v1/characters/{character_id}/killmails/recent/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of killmail IDs and hashes
 */
export function get_characters_character_id_killmails_recent(characterId, options) {
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
  return gateway.request(get_characters_character_id_killmails_recentOperation, parameters)
}

/**
 * Get a list of a corporation's kills and losses going back 90 days
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/killmails/recent/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/killmails/recent/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/killmails/recent/`
 * 
 * ---
 * This route is cached for up to 300 seconds
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
 * @return {Promise<object>} A list of killmail IDs and hashes
 */
export function get_corporations_corporation_id_killmails_recent(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_killmails_recentOperation, parameters)
}

/**
 * Return a single killmail from its ID and hash
 * 
 * ---
 * Alternate route: `/dev/killmails/{killmail_id}/{killmail_hash}/`
 * 
 * Alternate route: `/legacy/killmails/{killmail_id}/{killmail_hash}/`
 * 
 * Alternate route: `/v1/killmails/{killmail_id}/{killmail_hash}/`
 * 
 * ---
 * This route is cached for up to 1209600 seconds
 * 
 * @param {string} killmailHash The killmail hash for verification
 * @param {number} killmailId The killmail ID to be queried
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A killmail
 */
export function get_killmails_killmail_id_killmail_hash(killmailHash, killmailId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      killmail_hash: killmailHash,
      killmail_id: killmailId
    }
  }
  return gateway.request(get_killmails_killmail_id_killmail_hashOperation, parameters)
}

const get_characters_character_id_killmails_recentOperation = {
  path: '/characters/{character_id}/killmails/recent/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-killmails.read_killmails.v1']
    }
  ]
}

const get_corporations_corporation_id_killmails_recentOperation = {
  path: '/corporations/{corporation_id}/killmails/recent/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-killmails.read_corporation_killmails.v1']
    }
  ]
}

const get_killmails_killmail_id_killmail_hashOperation = {
  path: '/killmails/{killmail_id}/{killmail_hash}/',
  method: 'get'
}
