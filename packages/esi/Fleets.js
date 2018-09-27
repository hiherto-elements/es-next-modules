/** @module Fleets */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return the fleet ID the character is in, if any.
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/fleet/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/fleet/`
 * 
 * Alternate route: `/v1/characters/{character_id}/fleet/`
 * 
 * ---
 * This route is cached for up to 60 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Details about the character's fleet
 */
export function get_characters_character_id_fleet(characterId, options) {
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
  return gateway.request(get_characters_character_id_fleetOperation, parameters)
}

/**
 * Return details about a fleet
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/`
 * 
 * ---
 * This route is cached for up to 5 seconds
 * 
 * @param {number} fleetId ID for a fleet
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Details about a fleet
 */
export function get_fleets_fleet_id(fleetId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_fleets_fleet_idOperation, parameters)
}

/**
 * Update settings about a fleet
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/`
 * 
 * @param {number} fleetId ID for a fleet
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Fleet updated
 */
export function put_fleets_fleet_id(fleetId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId
    }
  }
  return gateway.request(put_fleets_fleet_idOperation, parameters)
}

/**
 * Return information about fleet members
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/members/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/members/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/members/`
 * 
 * ---
 * This route is cached for up to 5 seconds
 * 
 * @param {number} fleetId ID for a fleet
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of fleet members
 */
export function get_fleets_fleet_id_members(fleetId, options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    query: {
      datasource: options.datasource,
      language: options.language,
      token: options.token
    },
    path: {
      fleet_id: fleetId
    }
  }
  return gateway.request(get_fleets_fleet_id_membersOperation, parameters)
}

/**
 * Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/members/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/members/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/members/`
 * 
 * @param {number} fleetId ID for a fleet
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Fleet invitation sent
 */
export function post_fleets_fleet_id_members(fleetId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId
    }
  }
  return gateway.request(post_fleets_fleet_id_membersOperation, parameters)
}

/**
 * Kick a fleet member
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`
 * 
 * @param {number} fleetId ID for a fleet
 * @param {number} memberId The character ID of a member in this fleet
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Fleet member kicked
 */
export function delete_fleets_fleet_id_members_member_id(fleetId, memberId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId,
      member_id: memberId
    }
  }
  return gateway.request(delete_fleets_fleet_id_members_member_idOperation, parameters)
}

/**
 * Move a fleet member around
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`
 * 
 * @param {number} fleetId ID for a fleet
 * @param {number} memberId The character ID of a member in this fleet
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Fleet invitation sent
 */
export function put_fleets_fleet_id_members_member_id(fleetId, memberId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId,
      member_id: memberId
    }
  }
  return gateway.request(put_fleets_fleet_id_members_member_idOperation, parameters)
}

/**
 * Delete a fleet squad, only empty squads can be deleted
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`
 * 
 * @param {number} fleetId ID for a fleet
 * @param {number} squadId The squad to delete
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Squad deleted
 */
export function delete_fleets_fleet_id_squads_squad_id(fleetId, squadId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId,
      squad_id: squadId
    }
  }
  return gateway.request(delete_fleets_fleet_id_squads_squad_idOperation, parameters)
}

/**
 * Rename a fleet squad
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`
 * 
 * @param {number} fleetId ID for a fleet
 * @param {number} squadId The squad to rename
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Squad renamed
 */
export function put_fleets_fleet_id_squads_squad_id(fleetId, squadId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId,
      squad_id: squadId
    }
  }
  return gateway.request(put_fleets_fleet_id_squads_squad_idOperation, parameters)
}

/**
 * Return information about wings in a fleet
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/wings/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/wings/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/wings/`
 * 
 * ---
 * This route is cached for up to 5 seconds
 * 
 * @param {number} fleetId ID for a fleet
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of fleet wings
 */
export function get_fleets_fleet_id_wings(fleetId, options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    query: {
      datasource: options.datasource,
      language: options.language,
      token: options.token
    },
    path: {
      fleet_id: fleetId
    }
  }
  return gateway.request(get_fleets_fleet_id_wingsOperation, parameters)
}

/**
 * Create a new wing in a fleet
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/wings/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/wings/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/wings/`
 * 
 * @param {number} fleetId ID for a fleet
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Wing created
 */
export function post_fleets_fleet_id_wings(fleetId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId
    }
  }
  return gateway.request(post_fleets_fleet_id_wingsOperation, parameters)
}

/**
 * Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`
 * 
 * @param {number} fleetId ID for a fleet
 * @param {number} wingId The wing to delete
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Wing deleted
 */
export function delete_fleets_fleet_id_wings_wing_id(fleetId, wingId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId,
      wing_id: wingId
    }
  }
  return gateway.request(delete_fleets_fleet_id_wings_wing_idOperation, parameters)
}

/**
 * Rename a fleet wing
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`
 * 
 * @param {number} fleetId ID for a fleet
 * @param {number} wingId The wing to rename
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Wing renamed
 */
export function put_fleets_fleet_id_wings_wing_id(fleetId, wingId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId,
      wing_id: wingId
    }
  }
  return gateway.request(put_fleets_fleet_id_wings_wing_idOperation, parameters)
}

/**
 * Create a new squad in a fleet
 * 
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/squads/`
 * 
 * Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/squads/`
 * 
 * Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/squads/`
 * 
 * @param {number} fleetId ID for a fleet
 * @param {number} wingId The wing_id to create squad in
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Squad created
 */
export function post_fleets_fleet_id_wings_wing_id_squads(fleetId, wingId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    path: {
      fleet_id: fleetId,
      wing_id: wingId
    }
  }
  return gateway.request(post_fleets_fleet_id_wings_wing_id_squadsOperation, parameters)
}

const get_characters_character_id_fleetOperation = {
  path: '/characters/{character_id}/fleet/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.read_fleet.v1']
    }
  ]
}

const get_fleets_fleet_idOperation = {
  path: '/fleets/{fleet_id}/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.read_fleet.v1']
    }
  ]
}

const put_fleets_fleet_idOperation = {
  path: '/fleets/{fleet_id}/',
  method: 'put',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.write_fleet.v1']
    }
  ]
}

const get_fleets_fleet_id_membersOperation = {
  path: '/fleets/{fleet_id}/members/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.read_fleet.v1']
    }
  ]
}

const post_fleets_fleet_id_membersOperation = {
  path: '/fleets/{fleet_id}/members/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.write_fleet.v1']
    }
  ]
}

const delete_fleets_fleet_id_members_member_idOperation = {
  path: '/fleets/{fleet_id}/members/{member_id}/',
  method: 'delete',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.write_fleet.v1']
    }
  ]
}

const put_fleets_fleet_id_members_member_idOperation = {
  path: '/fleets/{fleet_id}/members/{member_id}/',
  method: 'put',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.write_fleet.v1']
    }
  ]
}

const delete_fleets_fleet_id_squads_squad_idOperation = {
  path: '/fleets/{fleet_id}/squads/{squad_id}/',
  method: 'delete',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.write_fleet.v1']
    }
  ]
}

const put_fleets_fleet_id_squads_squad_idOperation = {
  path: '/fleets/{fleet_id}/squads/{squad_id}/',
  method: 'put',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.write_fleet.v1']
    }
  ]
}

const get_fleets_fleet_id_wingsOperation = {
  path: '/fleets/{fleet_id}/wings/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.read_fleet.v1']
    }
  ]
}

const post_fleets_fleet_id_wingsOperation = {
  path: '/fleets/{fleet_id}/wings/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.write_fleet.v1']
    }
  ]
}

const delete_fleets_fleet_id_wings_wing_idOperation = {
  path: '/fleets/{fleet_id}/wings/{wing_id}/',
  method: 'delete',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.write_fleet.v1']
    }
  ]
}

const put_fleets_fleet_id_wings_wing_idOperation = {
  path: '/fleets/{fleet_id}/wings/{wing_id}/',
  method: 'put',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.write_fleet.v1']
    }
  ]
}

const post_fleets_fleet_id_wings_wing_id_squadsOperation = {
  path: '/fleets/{fleet_id}/wings/{wing_id}/squads/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-fleets.write_fleet.v1']
    }
  ]
}
