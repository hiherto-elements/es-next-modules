/** @module Market */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * List open market orders placed by a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/orders/`
 * 
 * Alternate route: `/v2/characters/{character_id}/orders/`
 * 
 * ---
 * This route is cached for up to 1200 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Open market orders placed by a character
 */
export function get_characters_character_id_orders(characterId, options) {
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
  return gateway.request(get_characters_character_id_ordersOperation, parameters)
}

/**
 * List cancelled and expired market orders placed by a character up to 90 days in the past.
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/orders/history/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/orders/history/`
 * 
 * Alternate route: `/v1/characters/{character_id}/orders/history/`
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
 * @return {Promise<object>} Expired and cancelled market orders placed by a character
 */
export function get_characters_character_id_orders_history(characterId, options) {
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
  return gateway.request(get_characters_character_id_orders_historyOperation, parameters)
}

/**
 * List open market orders placed on behalf of a corporation
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/orders/`
 * 
 * Alternate route: `/v3/corporations/{corporation_id}/orders/`
 * 
 * ---
 * This route is cached for up to 1200 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Accountant, Trader
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of open market orders
 */
export function get_corporations_corporation_id_orders(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_ordersOperation, parameters)
}

/**
 * List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/orders/history/`
 * 
 * Alternate route: `/v2/corporations/{corporation_id}/orders/history/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Accountant, Trader
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Expired and cancelled market orders placed on behalf of a corporation
 */
export function get_corporations_corporation_id_orders_history(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_orders_historyOperation, parameters)
}

/**
 * Get a list of item groups
 * 
 * ---
 * Alternate route: `/dev/markets/groups/`
 * 
 * Alternate route: `/legacy/markets/groups/`
 * 
 * Alternate route: `/v1/markets/groups/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of item group ids
 */
export function get_markets_groups(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_markets_groupsOperation, parameters)
}

/**
 * Get information on an item group
 * 
 * ---
 * Alternate route: `/dev/markets/groups/{market_group_id}/`
 * 
 * Alternate route: `/legacy/markets/groups/{market_group_id}/`
 * 
 * Alternate route: `/v1/markets/groups/{market_group_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} marketGroupId An Eve item group ID
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} Information about an item group
 */
export function get_markets_groups_market_group_id(marketGroupId, options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    query: {
      datasource: options.datasource,
      language: options.language
    },
    path: {
      market_group_id: marketGroupId
    }
  }
  return gateway.request(get_markets_groups_market_group_idOperation, parameters)
}

/**
 * Return a list of prices
 * 
 * ---
 * Alternate route: `/dev/markets/prices/`
 * 
 * Alternate route: `/legacy/markets/prices/`
 * 
 * Alternate route: `/v1/markets/prices/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of prices
 */
export function get_markets_prices(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_markets_pricesOperation, parameters)
}

/**
 * Return all orders in a structure
 * 
 * ---
 * Alternate route: `/dev/markets/structures/{structure_id}/`
 * 
 * Alternate route: `/legacy/markets/structures/{structure_id}/`
 * 
 * Alternate route: `/v1/markets/structures/{structure_id}/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} structureId Return orders in this structure
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of orders
 */
export function get_markets_structures_structure_id(structureId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      page: options.page,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      structure_id: structureId
    }
  }
  return gateway.request(get_markets_structures_structure_idOperation, parameters)
}

/**
 * Return a list of historical market statistics for the specified type in a region
 * 
 * ---
 * Alternate route: `/dev/markets/{region_id}/history/`
 * 
 * Alternate route: `/legacy/markets/{region_id}/history/`
 * 
 * Alternate route: `/v1/markets/{region_id}/history/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} regionId Return statistics in this region
 * @param {number} typeId Return statistics for this type
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of historical market statistics
 */
export function get_markets_region_id_history(regionId, typeId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      type_id: typeId
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      region_id: regionId
    }
  }
  return gateway.request(get_markets_region_id_historyOperation, parameters)
}

/**
 * Return a list of orders in a region
 * 
 * ---
 * Alternate route: `/dev/markets/{region_id}/orders/`
 * 
 * Alternate route: `/legacy/markets/{region_id}/orders/`
 * 
 * Alternate route: `/v1/markets/{region_id}/orders/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {string} orderType Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders
 * @param {number} regionId Return orders in this region
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {number} [options.typeId] Return orders only for this type
 * @return {Promise<object>} A list of orders
 */
export function get_markets_region_id_orders(orderType, regionId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      order_type: orderType,
      page: options.page,
      type_id: options.typeId
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      region_id: regionId
    }
  }
  return gateway.request(get_markets_region_id_ordersOperation, parameters)
}

/**
 * Return a list of type IDs that have active orders in the region, for efficient market indexing.
 * 
 * ---
 * Alternate route: `/dev/markets/{region_id}/types/`
 * 
 * Alternate route: `/legacy/markets/{region_id}/types/`
 * 
 * Alternate route: `/v1/markets/{region_id}/types/`
 * 
 * ---
 * This route is cached for up to 600 seconds
 * 
 * @param {number} regionId Return statistics in this region
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @return {Promise<object>} A list of type IDs
 */
export function get_markets_region_id_types(regionId, options) {
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
  return gateway.request(get_markets_region_id_typesOperation, parameters)
}

const get_characters_character_id_ordersOperation = {
  path: '/characters/{character_id}/orders/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-markets.read_character_orders.v1']
    }
  ]
}

const get_characters_character_id_orders_historyOperation = {
  path: '/characters/{character_id}/orders/history/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-markets.read_character_orders.v1']
    }
  ]
}

const get_corporations_corporation_id_ordersOperation = {
  path: '/corporations/{corporation_id}/orders/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-markets.read_corporation_orders.v1']
    }
  ]
}

const get_corporations_corporation_id_orders_historyOperation = {
  path: '/corporations/{corporation_id}/orders/history/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-markets.read_corporation_orders.v1']
    }
  ]
}

const get_markets_groupsOperation = {
  path: '/markets/groups/',
  method: 'get'
}

const get_markets_groups_market_group_idOperation = {
  path: '/markets/groups/{market_group_id}/',
  method: 'get'
}

const get_markets_pricesOperation = {
  path: '/markets/prices/',
  method: 'get'
}

const get_markets_structures_structure_idOperation = {
  path: '/markets/structures/{structure_id}/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-markets.structure_markets.v1']
    }
  ]
}

const get_markets_region_id_historyOperation = {
  path: '/markets/{region_id}/history/',
  method: 'get'
}

const get_markets_region_id_ordersOperation = {
  path: '/markets/{region_id}/orders/',
  method: 'get'
}

const get_markets_region_id_typesOperation = {
  path: '/markets/{region_id}/types/',
  method: 'get'
}
