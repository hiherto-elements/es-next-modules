/** @module PlanetaryInteraction */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Returns a list of all planetary colonies owned by a character.
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/planets/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/planets/`
 * 
 * Alternate route: `/v1/characters/{character_id}/planets/`
 * 
 * ---
 * This route is cached for up to 600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of colonies
 */
export function get_characters_character_id_planets(characterId, options) {
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
  return gateway.request(get_characters_character_id_planetsOperation, parameters)
}

/**
 * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/planets/{planet_id}/`
 * 
 * Alternate route: `/v3/characters/{character_id}/planets/{planet_id}/`
 * 
 * ---
 * This route is cached for up to 600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} planetId Planet id of the target planet
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Colony layout
 */
export function get_characters_character_id_planets_planet_id(characterId, planetId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      planet_id: planetId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_planets_planet_idOperation, parameters)
}

/**
 * List customs offices owned by a corporation
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/customs_offices/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/customs_offices/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/customs_offices/`
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
 * @return {Promise<object>} A list of customs offices and their settings
 */
export function get_corporations_corporation_id_customs_offices(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_customs_officesOperation, parameters)
}

/**
 * Get information on a planetary factory schematic
 * 
 * ---
 * Alternate route: `/dev/universe/schematics/{schematic_id}/`
 * 
 * Alternate route: `/legacy/universe/schematics/{schematic_id}/`
 * 
 * Alternate route: `/v1/universe/schematics/{schematic_id}/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} schematicId A PI schematic ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Public data about a schematic
 */
export function get_universe_schematics_schematic_id(schematicId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      schematic_id: schematicId
    }
  }
  return gateway.request(get_universe_schematics_schematic_idOperation, parameters)
}

const get_characters_character_id_planetsOperation = {
  path: '/characters/{character_id}/planets/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-planets.manage_planets.v1']
    }
  ]
}

const get_characters_character_id_planets_planet_idOperation = {
  path: '/characters/{character_id}/planets/{planet_id}/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-planets.manage_planets.v1']
    }
  ]
}

const get_corporations_corporation_id_customs_officesOperation = {
  path: '/corporations/{corporation_id}/customs_offices/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-planets.read_customs_offices.v1']
    }
  ]
}

const get_universe_schematics_schematic_idOperation = {
  path: '/universe/schematics/{schematic_id}/',
  method: 'get'
}
