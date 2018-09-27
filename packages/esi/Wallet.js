/** @module Wallet */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Returns a character's wallet balance
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/wallet/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/wallet/`
 * 
 * Alternate route: `/v1/characters/{character_id}/wallet/`
 * 
 * ---
 * This route is cached for up to 120 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Wallet balance
 */
export function get_characters_character_id_wallet(characterId, options) {
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
  return gateway.request(get_characters_character_id_walletOperation, parameters)
}

/**
 * Retrieve the given character's wallet journal going 30 days back
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/wallet/journal/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/wallet/journal/`
 * 
 * Alternate route: `/v4/characters/{character_id}/wallet/journal/`
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
 * @return {Promise<object>} Journal entries
 */
export function get_characters_character_id_wallet_journal(characterId, options) {
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
  return gateway.request(get_characters_character_id_wallet_journalOperation, parameters)
}

/**
 * Get wallet transactions of a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/wallet/transactions/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/wallet/transactions/`
 * 
 * Alternate route: `/v1/characters/{character_id}/wallet/transactions/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {number} [options.fromId] Only show transactions happened before the one referenced by this id
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Wallet transactions
 */
export function get_characters_character_id_wallet_transactions(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      from_id: options.fromId,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_wallet_transactionsOperation, parameters)
}

/**
 * Get a corporation's wallets
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/wallets/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/wallets/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/wallets/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of corporation wallets
 */
export function get_corporations_corporation_id_wallets(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_walletsOperation, parameters)
}

/**
 * Retrieve the given corporation's wallet journal for the given division going 30 days back
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/journal/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/journal/`
 * 
 * Alternate route: `/v3/corporations/{corporation_id}/wallets/{division}/journal/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {number} division Wallet key of the division to fetch journals from
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Journal entries
 */
export function get_corporations_corporation_id_wallets_division_journal(corporationId, division, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId,
      division
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
  return gateway.request(get_corporations_corporation_id_wallets_division_journalOperation, parameters)
}

/**
 * Get wallet transactions of a corporation
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/transactions/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/transactions/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/wallets/{division}/transactions/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {number} division Wallet key of the division to fetch journals from
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {number} [options.fromId] Only show journal entries happened before the transaction referenced by this id
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Wallet transactions
 */
export function get_corporations_corporation_id_wallets_division_transactions(corporationId, division, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId,
      division
    },
    query: {
      datasource: options.datasource,
      from_id: options.fromId,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_corporations_corporation_id_wallets_division_transactionsOperation, parameters)
}

const get_characters_character_id_walletOperation = {
  path: '/characters/{character_id}/wallet/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-wallet.read_character_wallet.v1']
    }
  ]
}

const get_characters_character_id_wallet_journalOperation = {
  path: '/characters/{character_id}/wallet/journal/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-wallet.read_character_wallet.v1']
    }
  ]
}

const get_characters_character_id_wallet_transactionsOperation = {
  path: '/characters/{character_id}/wallet/transactions/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-wallet.read_character_wallet.v1']
    }
  ]
}

const get_corporations_corporation_id_walletsOperation = {
  path: '/corporations/{corporation_id}/wallets/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-wallet.read_corporation_wallets.v1']
    }
  ]
}

const get_corporations_corporation_id_wallets_division_journalOperation = {
  path: '/corporations/{corporation_id}/wallets/{division}/journal/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-wallet.read_corporation_wallets.v1']
    }
  ]
}

const get_corporations_corporation_id_wallets_division_transactionsOperation = {
  path: '/corporations/{corporation_id}/wallets/{division}/transactions/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-wallet.read_corporation_wallets.v1']
    }
  ]
}
