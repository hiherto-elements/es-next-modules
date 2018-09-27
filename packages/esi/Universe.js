/** @module Universe */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get all character ancestries
 * 
 * ---
 * Alternate route: `/dev/universe/ancestries/`
 * 
 * Alternate route: `/legacy/universe/ancestries/`
 * 
 * Alternate route: `/v1/universe/ancestries/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} A list of ancestries
 */
export function get_universe_ancestries(options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    query: {
      datasource: options.datasource,
      language: options.language
    }
  }
  return gateway.request(get_universe_ancestriesOperation, parameters)
}

/**
 * Get information on an asteroid belt
 * 
 * ---
 * Alternate route: `/dev/universe/asteroid_belts/{asteroid_belt_id}/`
 * 
 * Alternate route: `/legacy/universe/asteroid_belts/{asteroid_belt_id}/`
 * 
 * Alternate route: `/v1/universe/asteroid_belts/{asteroid_belt_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} asteroidBeltId asteroid_belt_id integer
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Information about an asteroid belt
 */
export function get_universe_asteroid_belts_asteroid_belt_id(asteroidBeltId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      asteroid_belt_id: asteroidBeltId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_asteroid_belts_asteroid_belt_idOperation, parameters)
}

/**
 * Get a list of bloodlines
 * 
 * ---
 * Alternate route: `/dev/universe/bloodlines/`
 * 
 * Alternate route: `/legacy/universe/bloodlines/`
 * 
 * Alternate route: `/v1/universe/bloodlines/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} A list of bloodlines
 */
export function get_universe_bloodlines(options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    query: {
      datasource: options.datasource,
      language: options.language
    }
  }
  return gateway.request(get_universe_bloodlinesOperation, parameters)
}

/**
 * Get a list of item categories
 * 
 * ---
 * Alternate route: `/dev/universe/categories/`
 * 
 * Alternate route: `/legacy/universe/categories/`
 * 
 * Alternate route: `/v1/universe/categories/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of item category ids
 */
export function get_universe_categories(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_categoriesOperation, parameters)
}

/**
 * Get information of an item category
 * 
 * ---
 * Alternate route: `/dev/universe/categories/{category_id}/`
 * 
 * Alternate route: `/legacy/universe/categories/{category_id}/`
 * 
 * Alternate route: `/v1/universe/categories/{category_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} categoryId An Eve item category ID
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} Information about an item category
 */
export function get_universe_categories_category_id(categoryId, options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      category_id: categoryId
    },
    query: {
      datasource: options.datasource,
      language: options.language
    }
  }
  return gateway.request(get_universe_categories_category_idOperation, parameters)
}

/**
 * Get a list of constellations
 * 
 * ---
 * Alternate route: `/dev/universe/constellations/`
 * 
 * Alternate route: `/legacy/universe/constellations/`
 * 
 * Alternate route: `/v1/universe/constellations/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of constellation ids
 */
export function get_universe_constellations(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_constellationsOperation, parameters)
}

/**
 * Get information on a constellation
 * 
 * ---
 * Alternate route: `/dev/universe/constellations/{constellation_id}/`
 * 
 * Alternate route: `/legacy/universe/constellations/{constellation_id}/`
 * 
 * Alternate route: `/v1/universe/constellations/{constellation_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} constellationId constellation_id integer
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} Information about a constellation
 */
export function get_universe_constellations_constellation_id(constellationId, options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      constellation_id: constellationId
    },
    query: {
      datasource: options.datasource,
      language: options.language
    }
  }
  return gateway.request(get_universe_constellations_constellation_idOperation, parameters)
}

/**
 * Get a list of factions
 * 
 * ---
 * Alternate route: `/dev/universe/factions/`
 * 
 * Alternate route: `/v2/universe/factions/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} A list of factions
 */
export function get_universe_factions(options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    query: {
      datasource: options.datasource,
      language: options.language
    }
  }
  return gateway.request(get_universe_factionsOperation, parameters)
}

/**
 * Get a list of graphics
 * 
 * ---
 * Alternate route: `/dev/universe/graphics/`
 * 
 * Alternate route: `/legacy/universe/graphics/`
 * 
 * Alternate route: `/v1/universe/graphics/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of graphic ids
 */
export function get_universe_graphics(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_graphicsOperation, parameters)
}

/**
 * Get information on a graphic
 * 
 * ---
 * Alternate route: `/dev/universe/graphics/{graphic_id}/`
 * 
 * Alternate route: `/legacy/universe/graphics/{graphic_id}/`
 * 
 * Alternate route: `/v1/universe/graphics/{graphic_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} graphicId graphic_id integer
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Information about a graphic
 */
export function get_universe_graphics_graphic_id(graphicId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    path: {
      graphic_id: graphicId
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_graphics_graphic_idOperation, parameters)
}

/**
 * Get a list of item groups
 * 
 * ---
 * Alternate route: `/dev/universe/groups/`
 * 
 * Alternate route: `/legacy/universe/groups/`
 * 
 * Alternate route: `/v1/universe/groups/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @return {Promise<object>} A list of item group ids
 */
export function get_universe_groups(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      page: options.page
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_groupsOperation, parameters)
}

/**
 * Get information on an item group
 * 
 * ---
 * Alternate route: `/dev/universe/groups/{group_id}/`
 * 
 * Alternate route: `/legacy/universe/groups/{group_id}/`
 * 
 * Alternate route: `/v1/universe/groups/{group_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} groupId An Eve item group ID
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} Information about an item group
 */
export function get_universe_groups_group_id(groupId, options) {
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
      group_id: groupId
    }
  }
  return gateway.request(get_universe_groups_group_idOperation, parameters)
}

/**
 * Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours
 * 
 * ---
 * Alternate route: `/dev/universe/ids/`
 * 
 * Alternate route: `/legacy/universe/ids/`
 * 
 * Alternate route: `/v1/universe/ids/`
 * 
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} List of id/name associations for a set of names divided by category. Any name passed in that did not have a match will be ommitted
 */
export function post_universe_ids(options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage
    },
    query: {
      datasource: options.datasource,
      language: options.language
    }
  }
  return gateway.request(post_universe_idsOperation, parameters)
}

/**
 * Get information on a moon
 * 
 * ---
 * Alternate route: `/dev/universe/moons/{moon_id}/`
 * 
 * Alternate route: `/legacy/universe/moons/{moon_id}/`
 * 
 * Alternate route: `/v1/universe/moons/{moon_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} moonId moon_id integer
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Information about a moon
 */
export function get_universe_moons_moon_id(moonId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      moon_id: moonId
    }
  }
  return gateway.request(get_universe_moons_moon_idOperation, parameters)
}

/**
 * Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types
 * 
 * ---
 * Alternate route: `/dev/universe/names/`
 * 
 * Alternate route: `/v2/universe/names/`
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @return {Promise<object>} List of id/name associations for a set of ID's. All ID's must resolve to a name, or nothing will be returned
 */
export function post_universe_names(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    }
  }
  return gateway.request(post_universe_namesOperation, parameters)
}

/**
 * Get information on a planet
 * 
 * ---
 * Alternate route: `/dev/universe/planets/{planet_id}/`
 * 
 * Alternate route: `/legacy/universe/planets/{planet_id}/`
 * 
 * Alternate route: `/v1/universe/planets/{planet_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} planetId planet_id integer
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Information about a planet
 */
export function get_universe_planets_planet_id(planetId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      planet_id: planetId
    }
  }
  return gateway.request(get_universe_planets_planet_idOperation, parameters)
}

/**
 * Get a list of character races
 * 
 * ---
 * Alternate route: `/dev/universe/races/`
 * 
 * Alternate route: `/legacy/universe/races/`
 * 
 * Alternate route: `/v1/universe/races/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} A list of character races
 */
export function get_universe_races(options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    query: {
      datasource: options.datasource,
      language: options.language
    }
  }
  return gateway.request(get_universe_racesOperation, parameters)
}

/**
 * Get a list of regions
 * 
 * ---
 * Alternate route: `/dev/universe/regions/`
 * 
 * Alternate route: `/legacy/universe/regions/`
 * 
 * Alternate route: `/v1/universe/regions/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of region ids
 */
export function get_universe_regions(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_regionsOperation, parameters)
}

/**
 * Get information on a region
 * 
 * ---
 * Alternate route: `/dev/universe/regions/{region_id}/`
 * 
 * Alternate route: `/legacy/universe/regions/{region_id}/`
 * 
 * Alternate route: `/v1/universe/regions/{region_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} regionId region_id integer
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} Information about a region
 */
export function get_universe_regions_region_id(regionId, options) {
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
      region_id: regionId
    }
  }
  return gateway.request(get_universe_regions_region_idOperation, parameters)
}

/**
 * Get information on a stargate
 * 
 * ---
 * Alternate route: `/dev/universe/stargates/{stargate_id}/`
 * 
 * Alternate route: `/legacy/universe/stargates/{stargate_id}/`
 * 
 * Alternate route: `/v1/universe/stargates/{stargate_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} stargateId stargate_id integer
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Information about a stargate
 */
export function get_universe_stargates_stargate_id(stargateId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      stargate_id: stargateId
    }
  }
  return gateway.request(get_universe_stargates_stargate_idOperation, parameters)
}

/**
 * Get information on a star
 * 
 * ---
 * Alternate route: `/dev/universe/stars/{star_id}/`
 * 
 * Alternate route: `/legacy/universe/stars/{star_id}/`
 * 
 * Alternate route: `/v1/universe/stars/{star_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} starId star_id integer
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Information about a star
 */
export function get_universe_stars_star_id(starId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      star_id: starId
    }
  }
  return gateway.request(get_universe_stars_star_idOperation, parameters)
}

/**
 * Get information on a station
 * 
 * ---
 * Alternate route: `/dev/universe/stations/{station_id}/`
 * 
 * Alternate route: `/v2/universe/stations/{station_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} stationId station_id integer
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Information about a station
 */
export function get_universe_stations_station_id(stationId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      station_id: stationId
    }
  }
  return gateway.request(get_universe_stations_station_idOperation, parameters)
}

/**
 * List all public structures
 * 
 * ---
 * Alternate route: `/dev/universe/structures/`
 * 
 * Alternate route: `/legacy/universe/structures/`
 * 
 * Alternate route: `/v1/universe/structures/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} List of public structure IDs
 */
export function get_universe_structures(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_structuresOperation, parameters)
}

/**
 * Returns information on requested structure if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.
 * 
 * ---
 * Alternate route: `/dev/universe/structures/{structure_id}/`
 * 
 * Alternate route: `/v2/universe/structures/{structure_id}/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} structureId An Eve structure ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Data about a structure
 */
export function get_universe_structures_structure_id(structureId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      structure_id: structureId
    }
  }
  return gateway.request(get_universe_structures_structure_idOperation, parameters)
}

/**
 * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed
 * 
 * ---
 * Alternate route: `/dev/universe/system_jumps/`
 * 
 * Alternate route: `/legacy/universe/system_jumps/`
 * 
 * Alternate route: `/v1/universe/system_jumps/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of systems and number of jumps
 */
export function get_universe_system_jumps(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_system_jumpsOperation, parameters)
}

/**
 * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed
 * 
 * ---
 * Alternate route: `/dev/universe/system_kills/`
 * 
 * Alternate route: `/v2/universe/system_kills/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of systems and number of ship, pod and NPC kills
 */
export function get_universe_system_kills(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_system_killsOperation, parameters)
}

/**
 * Get a list of solar systems
 * 
 * ---
 * Alternate route: `/dev/universe/systems/`
 * 
 * Alternate route: `/legacy/universe/systems/`
 * 
 * Alternate route: `/v1/universe/systems/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of solar system ids
 */
export function get_universe_systems(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_systemsOperation, parameters)
}

/**
 * Get information on a solar system.
 * 
 * ---
 * Alternate route: `/dev/universe/systems/{system_id}/`
 * 
 * Alternate route: `/v4/universe/systems/{system_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} systemId system_id integer
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} Information about a solar system
 */
export function get_universe_systems_system_id(systemId, options) {
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
      system_id: systemId
    }
  }
  return gateway.request(get_universe_systems_system_idOperation, parameters)
}

/**
 * Get a list of type ids
 * 
 * ---
 * Alternate route: `/dev/universe/types/`
 * 
 * Alternate route: `/legacy/universe/types/`
 * 
 * Alternate route: `/v1/universe/types/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @return {Promise<object>} A list of type ids
 */
export function get_universe_types(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      page: options.page
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_universe_typesOperation, parameters)
}

/**
 * Get information on a type
 * 
 * ---
 * Alternate route: `/dev/universe/types/{type_id}/`
 * 
 * Alternate route: `/v3/universe/types/{type_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} typeId An Eve item type ID
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} Information about a type
 */
export function get_universe_types_type_id(typeId, options) {
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
      type_id: typeId
    }
  }
  return gateway.request(get_universe_types_type_idOperation, parameters)
}

const get_universe_ancestriesOperation = {
  path: '/universe/ancestries/',
  method: 'get'
}

const get_universe_asteroid_belts_asteroid_belt_idOperation = {
  path: '/universe/asteroid_belts/{asteroid_belt_id}/',
  method: 'get'
}

const get_universe_bloodlinesOperation = {
  path: '/universe/bloodlines/',
  method: 'get'
}

const get_universe_categoriesOperation = {
  path: '/universe/categories/',
  method: 'get'
}

const get_universe_categories_category_idOperation = {
  path: '/universe/categories/{category_id}/',
  method: 'get'
}

const get_universe_constellationsOperation = {
  path: '/universe/constellations/',
  method: 'get'
}

const get_universe_constellations_constellation_idOperation = {
  path: '/universe/constellations/{constellation_id}/',
  method: 'get'
}

const get_universe_factionsOperation = {
  path: '/universe/factions/',
  method: 'get'
}

const get_universe_graphicsOperation = {
  path: '/universe/graphics/',
  method: 'get'
}

const get_universe_graphics_graphic_idOperation = {
  path: '/universe/graphics/{graphic_id}/',
  method: 'get'
}

const get_universe_groupsOperation = {
  path: '/universe/groups/',
  method: 'get'
}

const get_universe_groups_group_idOperation = {
  path: '/universe/groups/{group_id}/',
  method: 'get'
}

const post_universe_idsOperation = {
  path: '/universe/ids/',
  method: 'post'
}

const get_universe_moons_moon_idOperation = {
  path: '/universe/moons/{moon_id}/',
  method: 'get'
}

const post_universe_namesOperation = {
  path: '/universe/names/',
  method: 'post'
}

const get_universe_planets_planet_idOperation = {
  path: '/universe/planets/{planet_id}/',
  method: 'get'
}

const get_universe_racesOperation = {
  path: '/universe/races/',
  method: 'get'
}

const get_universe_regionsOperation = {
  path: '/universe/regions/',
  method: 'get'
}

const get_universe_regions_region_idOperation = {
  path: '/universe/regions/{region_id}/',
  method: 'get'
}

const get_universe_stargates_stargate_idOperation = {
  path: '/universe/stargates/{stargate_id}/',
  method: 'get'
}

const get_universe_stars_star_idOperation = {
  path: '/universe/stars/{star_id}/',
  method: 'get'
}

const get_universe_stations_station_idOperation = {
  path: '/universe/stations/{station_id}/',
  method: 'get'
}

const get_universe_structuresOperation = {
  path: '/universe/structures/',
  method: 'get'
}

const get_universe_structures_structure_idOperation = {
  path: '/universe/structures/{structure_id}/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-universe.read_structures.v1']
    }
  ]
}

const get_universe_system_jumpsOperation = {
  path: '/universe/system_jumps/',
  method: 'get'
}

const get_universe_system_killsOperation = {
  path: '/universe/system_kills/',
  method: 'get'
}

const get_universe_systemsOperation = {
  path: '/universe/systems/',
  method: 'get'
}

const get_universe_systems_system_idOperation = {
  path: '/universe/systems/{system_id}/',
  method: 'get'
}

const get_universe_typesOperation = {
  path: '/universe/types/',
  method: 'get'
}

const get_universe_types_type_idOperation = {
  path: '/universe/types/{type_id}/',
  method: 'get'
}
