/** @module Dogma */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get a list of dogma attribute ids
 * 
 * ---
 * Alternate route: `/dev/dogma/attributes/`
 * 
 * Alternate route: `/legacy/dogma/attributes/`
 * 
 * Alternate route: `/v1/dogma/attributes/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of dogma attribute ids
 */
export function get_dogma_attributes(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_dogma_attributesOperation, parameters)
}

/**
 * Get information on a dogma attribute
 * 
 * ---
 * Alternate route: `/dev/dogma/attributes/{attribute_id}/`
 * 
 * Alternate route: `/legacy/dogma/attributes/{attribute_id}/`
 * 
 * Alternate route: `/v1/dogma/attributes/{attribute_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} attributeId A dogma attribute ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Information about a dogma attribute
 */
export function get_dogma_attributes_attribute_id(attributeId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      attribute_id: attributeId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_dogma_attributes_attribute_idOperation, parameters)
}

/**
 * Returns info about a dynamic item resulting from mutation with a mutaplasmid.
 * 
 * ---
 * Alternate route: `/dev/dogma/dynamic/items/{type_id}/{item_id}/`
 * 
 * Alternate route: `/legacy/dogma/dynamic/items/{type_id}/{item_id}/`
 * 
 * Alternate route: `/v1/dogma/dynamic/items/{type_id}/{item_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} itemId item_id integer
 * @param {number} typeId type_id integer
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Details about a dynamic item
 */
export function get_dogma_dynamic_items_type_id_item_id(itemId, typeId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      item_id: itemId,
      type_id: typeId
    }
  }
  return gateway.request(get_dogma_dynamic_items_type_id_item_idOperation, parameters)
}

/**
 * Get a list of dogma effect ids
 * 
 * ---
 * Alternate route: `/dev/dogma/effects/`
 * 
 * Alternate route: `/legacy/dogma/effects/`
 * 
 * Alternate route: `/v1/dogma/effects/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of dogma effect ids
 */
export function get_dogma_effects(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_dogma_effectsOperation, parameters)
}

/**
 * Get information on a dogma effect
 * 
 * ---
 * Alternate route: `/dev/dogma/effects/{effect_id}/`
 * 
 * Alternate route: `/v2/dogma/effects/{effect_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} effectId A dogma effect ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Information about a dogma effect
 */
export function get_dogma_effects_effect_id(effectId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    path: {
      effect_id: effectId
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_dogma_effects_effect_idOperation, parameters)
}

const get_dogma_attributesOperation = {
  path: '/dogma/attributes/',
  method: 'get'
}

const get_dogma_attributes_attribute_idOperation = {
  path: '/dogma/attributes/{attribute_id}/',
  method: 'get'
}

const get_dogma_dynamic_items_type_id_item_idOperation = {
  path: '/dogma/dynamic/items/{type_id}/{item_id}/',
  method: 'get'
}

const get_dogma_effectsOperation = {
  path: '/dogma/effects/',
  method: 'get'
}

const get_dogma_effects_effect_idOperation = {
  path: '/dogma/effects/{effect_id}/',
  method: 'get'
}
