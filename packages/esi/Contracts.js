/** @module Contracts */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/contracts/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/contracts/`
 * 
 * Alternate route: `/v1/characters/{character_id}/contracts/`
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
 * @return {Promise<object>} A list of contracts
 */
export function get_characters_character_id_contracts(characterId, options) {
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
  return gateway.request(get_characters_character_id_contractsOperation, parameters)
}

/**
 * Lists bids on a particular auction contract
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/bids/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/bids/`
 * 
 * Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/bids/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} contractId ID of a contract
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of bids
 */
export function get_characters_character_id_contracts_contract_id_bids(characterId, contractId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      contract_id: contractId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_contracts_contract_id_bidsOperation, parameters)
}

/**
 * Lists items of a particular contract
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/items/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/items/`
 * 
 * Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/items/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} contractId ID of a contract
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of items in this contract
 */
export function get_characters_character_id_contracts_contract_id_items(characterId, contractId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      contract_id: contractId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_contracts_contract_id_itemsOperation, parameters)
}

/**
 * Lists bids on a public auction contract
 * 
 * ---
 * Alternate route: `/dev/contracts/public/bids/{contract_id}/`
 * 
 * Alternate route: `/legacy/contracts/public/bids/{contract_id}/`
 * 
 * Alternate route: `/v1/contracts/public/bids/{contract_id}/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} contractId ID of a contract
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @return {Promise<object>} A list of bids
 */
export function get_contracts_public_bids_contract_id(contractId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      contract_id: contractId
    },
    query: {
      datasource: options.datasource,
      page: options.page
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_contracts_public_bids_contract_idOperation, parameters)
}

/**
 * Lists items of a public contract
 * 
 * ---
 * Alternate route: `/dev/contracts/public/items/{contract_id}/`
 * 
 * Alternate route: `/legacy/contracts/public/items/{contract_id}/`
 * 
 * Alternate route: `/v1/contracts/public/items/{contract_id}/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} contractId ID of a contract
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @return {Promise<object>} A list of items in this contract
 */
export function get_contracts_public_items_contract_id(contractId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      contract_id: contractId
    },
    query: {
      datasource: options.datasource,
      page: options.page
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_contracts_public_items_contract_idOperation, parameters)
}

/**
 * Returns a paginated list of all public contracts in the given region
 * 
 * ---
 * Alternate route: `/dev/contracts/public/{region_id}/`
 * 
 * Alternate route: `/legacy/contracts/public/{region_id}/`
 * 
 * Alternate route: `/v1/contracts/public/{region_id}/`
 * 
 * ---
 * This route is cached for up to 1800 seconds
 * 
 * @param {number} regionId An EVE region id
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @return {Promise<object>} A list of contracts
 */
export function get_contracts_public_region_id(regionId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      page: options.page
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      region_id: regionId
    }
  }
  return gateway.request(get_contracts_public_region_idOperation, parameters)
}

/**
 * Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/contracts/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/contracts/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/contracts/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of contracts
 */
export function get_corporations_corporation_id_contracts(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_contractsOperation, parameters)
}

/**
 * Lists bids on a particular auction contract
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/bids/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/bids/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/bids/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} contractId ID of a contract
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of bids
 */
export function get_corporations_corporation_id_contracts_contract_id_bids(contractId, corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      contract_id: contractId,
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
  return gateway.request(get_corporations_corporation_id_contracts_contract_id_bidsOperation, parameters)
}

/**
 * Lists items of a particular contract
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/items/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/items/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/items/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} contractId ID of a contract
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of items in this contract
 */
export function get_corporations_corporation_id_contracts_contract_id_items(contractId, corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      contract_id: contractId,
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
  return gateway.request(get_corporations_corporation_id_contracts_contract_id_itemsOperation, parameters)
}

const get_characters_character_id_contractsOperation = {
  path: '/characters/{character_id}/contracts/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-contracts.read_character_contracts.v1']
    }
  ]
}

const get_characters_character_id_contracts_contract_id_bidsOperation = {
  path: '/characters/{character_id}/contracts/{contract_id}/bids/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-contracts.read_character_contracts.v1']
    }
  ]
}

const get_characters_character_id_contracts_contract_id_itemsOperation = {
  path: '/characters/{character_id}/contracts/{contract_id}/items/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-contracts.read_character_contracts.v1']
    }
  ]
}

const get_contracts_public_bids_contract_idOperation = {
  path: '/contracts/public/bids/{contract_id}/',
  method: 'get'
}

const get_contracts_public_items_contract_idOperation = {
  path: '/contracts/public/items/{contract_id}/',
  method: 'get'
}

const get_contracts_public_region_idOperation = {
  path: '/contracts/public/{region_id}/',
  method: 'get'
}

const get_corporations_corporation_id_contractsOperation = {
  path: '/corporations/{corporation_id}/contracts/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-contracts.read_corporation_contracts.v1']
    }
  ]
}

const get_corporations_corporation_id_contracts_contract_id_bidsOperation = {
  path: '/corporations/{corporation_id}/contracts/{contract_id}/bids/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-contracts.read_corporation_contracts.v1']
    }
  ]
}

const get_corporations_corporation_id_contracts_contract_id_itemsOperation = {
  path: '/corporations/{corporation_id}/contracts/{contract_id}/items/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-contracts.read_corporation_contracts.v1']
    }
  ]
}
