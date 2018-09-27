/** @module Contacts */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return contacts of an alliance
 * 
 * ---
 * Alternate route: `/dev/alliances/{alliance_id}/contacts/`
 * 
 * Alternate route: `/v2/alliances/{alliance_id}/contacts/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} allianceId An EVE alliance ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of contacts
 */
export function get_alliances_alliance_id_contacts(allianceId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      alliance_id: allianceId
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
  return gateway.request(get_alliances_alliance_id_contactsOperation, parameters)
}

/**
 * Return custom labels for an alliance's contacts
 * 
 * ---
 * Alternate route: `/dev/alliances/{alliance_id}/contacts/labels/`
 * 
 * Alternate route: `/legacy/alliances/{alliance_id}/contacts/labels/`
 * 
 * Alternate route: `/v1/alliances/{alliance_id}/contacts/labels/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} allianceId An EVE alliance ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of alliance contact labels
 */
export function get_alliances_alliance_id_contacts_labels(allianceId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      alliance_id: allianceId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_alliances_alliance_id_contacts_labelsOperation, parameters)
}

/**
 * Bulk delete contacts
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/contacts/`
 * 
 * Alternate route: `/v2/characters/{character_id}/contacts/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {number[]} contactIds A list of contacts to delete
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Contacts deleted
 */
export function delete_characters_character_id_contacts(characterId, contactIds, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      contact_ids: contactIds,
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(delete_characters_character_id_contactsOperation, parameters)
}

/**
 * Return contacts of a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/contacts/`
 * 
 * Alternate route: `/v2/characters/{character_id}/contacts/`
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
 * @return {Promise<object>} A list of contacts
 */
export function get_characters_character_id_contacts(characterId, options) {
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
  return gateway.request(get_characters_character_id_contactsOperation, parameters)
}

/**
 * Bulk add contacts with same settings
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/contacts/`
 * 
 * Alternate route: `/v2/characters/{character_id}/contacts/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} standing Standing for the contact
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {number[]} [options.labelIds] Add custom labels to the new contact
 * @param {string} [options.token] Access token to use if unable to set a header
 * @param {boolean} [options.watched] Whether the contact should be watched, note this is only effective on characters
 * @return {Promise<object>} A list of contact ids that successfully created
 */
export function post_characters_character_id_contacts(characterId, standing, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      label_ids: options.labelIds,
      standing,
      token: options.token,
      watched: options.watched
    }
  }
  return gateway.request(post_characters_character_id_contactsOperation, parameters)
}

/**
 * Bulk edit contacts with same settings
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/contacts/`
 * 
 * Alternate route: `/v2/characters/{character_id}/contacts/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} standing Standing for the contact
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {number[]} [options.labelIds] Add custom labels to the contact
 * @param {string} [options.token] Access token to use if unable to set a header
 * @param {boolean} [options.watched] Whether the contact should be watched, note this is only effective on characters
 * @return {Promise<object>} Contacts updated
 */
export function put_characters_character_id_contacts(characterId, standing, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      label_ids: options.labelIds,
      standing,
      token: options.token,
      watched: options.watched
    }
  }
  return gateway.request(put_characters_character_id_contactsOperation, parameters)
}

/**
 * Return custom labels for a character's contacts
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/contacts/labels/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/contacts/labels/`
 * 
 * Alternate route: `/v1/characters/{character_id}/contacts/labels/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of contact labels
 */
export function get_characters_character_id_contacts_labels(characterId, options) {
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
  return gateway.request(get_characters_character_id_contacts_labelsOperation, parameters)
}

/**
 * Return contacts of a corporation
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/contacts/`
 * 
 * Alternate route: `/v2/corporations/{corporation_id}/contacts/`
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
 * @return {Promise<object>} A list of contacts
 */
export function get_corporations_corporation_id_contacts(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_contactsOperation, parameters)
}

/**
 * Return custom labels for a corporation's contacts
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/contacts/labels/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/contacts/labels/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/contacts/labels/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of corporation contact labels
 */
export function get_corporations_corporation_id_contacts_labels(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_contacts_labelsOperation, parameters)
}

const get_alliances_alliance_id_contactsOperation = {
  path: '/alliances/{alliance_id}/contacts/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-alliances.read_contacts.v1']
    }
  ]
}

const get_alliances_alliance_id_contacts_labelsOperation = {
  path: '/alliances/{alliance_id}/contacts/labels/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-alliances.read_contacts.v1']
    }
  ]
}

const delete_characters_character_id_contactsOperation = {
  path: '/characters/{character_id}/contacts/',
  method: 'delete',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.write_contacts.v1']
    }
  ]
}

const get_characters_character_id_contactsOperation = {
  path: '/characters/{character_id}/contacts/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_contacts.v1']
    }
  ]
}

const post_characters_character_id_contactsOperation = {
  path: '/characters/{character_id}/contacts/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.write_contacts.v1']
    }
  ]
}

const put_characters_character_id_contactsOperation = {
  path: '/characters/{character_id}/contacts/',
  method: 'put',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.write_contacts.v1']
    }
  ]
}

const get_characters_character_id_contacts_labelsOperation = {
  path: '/characters/{character_id}/contacts/labels/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_contacts.v1']
    }
  ]
}

const get_corporations_corporation_id_contactsOperation = {
  path: '/corporations/{corporation_id}/contacts/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_contacts.v1']
    }
  ]
}

const get_corporations_corporation_id_contacts_labelsOperation = {
  path: '/corporations/{corporation_id}/contacts/labels/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_contacts.v1']
    }
  ]
}
