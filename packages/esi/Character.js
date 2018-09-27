/** @module Character */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Bulk lookup of character IDs to corporation, alliance and faction
 * 
 * ---
 * Alternate route: `/dev/characters/affiliation/`
 * 
 * Alternate route: `/legacy/characters/affiliation/`
 * 
 * Alternate route: `/v1/characters/affiliation/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @return {Promise<object>} Character corporation, alliance and faction IDs
 */
export function post_characters_affiliation(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    }
  }
  return gateway.request(post_characters_affiliationOperation, parameters)
}

/**
 * Public information about a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/`
 * 
 * Alternate route: `/v4/characters/{character_id}/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Public data for the given character
 */
export function get_characters_character_id(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_idOperation, parameters)
}

/**
 * Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/agents_research/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/agents_research/`
 * 
 * Alternate route: `/v1/characters/{character_id}/agents_research/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of agents research information
 */
export function get_characters_character_id_agents_research(characterId, options) {
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
  return gateway.request(get_characters_character_id_agents_researchOperation, parameters)
}

/**
 * Return a list of blueprints the character owns
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/blueprints/`
 * 
 * Alternate route: `/v2/characters/{character_id}/blueprints/`
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
 * @return {Promise<object>} A list of blueprints
 */
export function get_characters_character_id_blueprints(characterId, options) {
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
  return gateway.request(get_characters_character_id_blueprintsOperation, parameters)
}

/**
 * Get a list of all the corporations a character has been a member of
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/corporationhistory/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/corporationhistory/`
 * 
 * Alternate route: `/v1/characters/{character_id}/corporationhistory/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Corporation history for the given character
 */
export function get_characters_character_id_corporationhistory(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_corporationhistoryOperation, parameters)
}

/**
 * Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/cspa/`
 * 
 * Alternate route: `/v4/characters/{character_id}/cspa/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Aggregate cost of sending a mail from the source character to the target characters, in ISK
 */
export function post_characters_character_id_cspa(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(post_characters_character_id_cspaOperation, parameters)
}

/**
 * Return a character's jump activation and fatigue information
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/fatigue/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/fatigue/`
 * 
 * Alternate route: `/v1/characters/{character_id}/fatigue/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Jump activation and fatigue information
 */
export function get_characters_character_id_fatigue(characterId, options) {
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
  return gateway.request(get_characters_character_id_fatigueOperation, parameters)
}

/**
 * Return a list of medals the character has
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/medals/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/medals/`
 * 
 * Alternate route: `/v1/characters/{character_id}/medals/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of medals
 */
export function get_characters_character_id_medals(characterId, options) {
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
  return gateway.request(get_characters_character_id_medalsOperation, parameters)
}

/**
 * Return character notifications
 * 
 * ---
 * Alternate route: `/v2/characters/{character_id}/notifications/`
 * 
 * ---
 * This route is cached for up to 600 seconds
 * 
 * ---
 * Warning: This route has an upgrade available
 * 
 * ---
 * [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/characters/{character_id}/notifications/)
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Returns your recent notifications
 */
export function get_characters_character_id_notifications(characterId, options) {
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
  return gateway.request(get_characters_character_id_notificationsOperation, parameters)
}

/**
 * Return notifications about having been added to someone's contact list
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/notifications/contacts/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/notifications/contacts/`
 * 
 * Alternate route: `/v1/characters/{character_id}/notifications/contacts/`
 * 
 * ---
 * This route is cached for up to 600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of contact notifications
 */
export function get_characters_character_id_notifications_contacts(characterId, options) {
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
  return gateway.request(get_characters_character_id_notifications_contactsOperation, parameters)
}

/**
 * Get portrait urls for a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/portrait/`
 * 
 * Alternate route: `/v2/characters/{character_id}/portrait/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Public data for the given character
 */
export function get_characters_character_id_portrait(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_portraitOperation, parameters)
}

/**
 * Returns a character's corporation roles
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/roles/`
 * 
 * Alternate route: `/v2/characters/{character_id}/roles/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} The character's roles in thier corporation
 */
export function get_characters_character_id_roles(characterId, options) {
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
  return gateway.request(get_characters_character_id_rolesOperation, parameters)
}

/**
 * Return character standings from agents, NPC corporations, and factions
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/standings/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/standings/`
 * 
 * Alternate route: `/v1/characters/{character_id}/standings/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of standings
 */
export function get_characters_character_id_standings(characterId, options) {
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
  return gateway.request(get_characters_character_id_standingsOperation, parameters)
}

/**
 * Returns aggregate yearly stats for a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/stats/`
 * 
 * Alternate route: `/v2/characters/{character_id}/stats/`
 * 
 * ---
 * This route is cached for up to 86400 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Character stats
 */
export function get_characters_character_id_stats(characterId, options) {
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
  return gateway.request(get_characters_character_id_statsOperation, parameters)
}

/**
 * Returns a character's titles
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/titles/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/titles/`
 * 
 * Alternate route: `/v1/characters/{character_id}/titles/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of titles
 */
export function get_characters_character_id_titles(characterId, options) {
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
  return gateway.request(get_characters_character_id_titlesOperation, parameters)
}

const post_characters_affiliationOperation = {
  path: '/characters/affiliation/',
  method: 'post'
}

const get_characters_character_idOperation = {
  path: '/characters/{character_id}/',
  method: 'get'
}

const get_characters_character_id_agents_researchOperation = {
  path: '/characters/{character_id}/agents_research/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_agents_research.v1']
    }
  ]
}

const get_characters_character_id_blueprintsOperation = {
  path: '/characters/{character_id}/blueprints/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_blueprints.v1']
    }
  ]
}

const get_characters_character_id_corporationhistoryOperation = {
  path: '/characters/{character_id}/corporationhistory/',
  method: 'get'
}

const post_characters_character_id_cspaOperation = {
  path: '/characters/{character_id}/cspa/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_contacts.v1']
    }
  ]
}

const get_characters_character_id_fatigueOperation = {
  path: '/characters/{character_id}/fatigue/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_fatigue.v1']
    }
  ]
}

const get_characters_character_id_medalsOperation = {
  path: '/characters/{character_id}/medals/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_medals.v1']
    }
  ]
}

const get_characters_character_id_notificationsOperation = {
  path: '/characters/{character_id}/notifications/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_notifications.v1']
    }
  ]
}

const get_characters_character_id_notifications_contactsOperation = {
  path: '/characters/{character_id}/notifications/contacts/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_notifications.v1']
    }
  ]
}

const get_characters_character_id_portraitOperation = {
  path: '/characters/{character_id}/portrait/',
  method: 'get'
}

const get_characters_character_id_rolesOperation = {
  path: '/characters/{character_id}/roles/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_corporation_roles.v1']
    }
  ]
}

const get_characters_character_id_standingsOperation = {
  path: '/characters/{character_id}/standings/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_standings.v1']
    }
  ]
}

const get_characters_character_id_statsOperation = {
  path: '/characters/{character_id}/stats/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characterstats.read.v1']
    }
  ]
}

const get_characters_character_id_titlesOperation = {
  path: '/characters/{character_id}/titles/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_titles.v1']
    }
  ]
}
