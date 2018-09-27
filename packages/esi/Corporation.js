/** @module Corporation */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get a list of npc corporations
 * 
 * ---
 * Alternate route: `/dev/corporations/npccorps/`
 * 
 * Alternate route: `/legacy/corporations/npccorps/`
 * 
 * Alternate route: `/v1/corporations/npccorps/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of npc corporation ids
 */
export function get_corporations_npccorps(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_corporations_npccorpsOperation, parameters)
}

/**
 * Public information about a corporation
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/`
 * 
 * Alternate route: `/v4/corporations/{corporation_id}/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Public information about a corporation
 */
export function get_corporations_corporation_id(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_corporations_corporation_idOperation, parameters)
}

/**
 * Get a list of all the alliances a corporation has been a member of
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/alliancehistory/`
 * 
 * Alternate route: `/v2/corporations/{corporation_id}/alliancehistory/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Alliance history for the given corporation
 */
export function get_corporations_corporation_id_alliancehistory(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_corporations_corporation_id_alliancehistoryOperation, parameters)
}

/**
 * Returns a list of blueprints the corporation owns
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/blueprints/`
 * 
 * Alternate route: `/v2/corporations/{corporation_id}/blueprints/`
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
 * @return {Promise<object>} List of corporation blueprints
 */
export function get_corporations_corporation_id_blueprints(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_blueprintsOperation, parameters)
}

/**
 * Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/containers/logs/`
 * 
 * Alternate route: `/v2/corporations/{corporation_id}/containers/logs/`
 * 
 * ---
 * This route is cached for up to 600 seconds
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
 * @return {Promise<object>} List of corporation ALSC logs
 */
export function get_corporations_corporation_id_containers_logs(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_containers_logsOperation, parameters)
}

/**
 * Return corporation hangar and wallet division names, only show if a division is not using the default name
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/divisions/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/divisions/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/divisions/`
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
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of corporation division names
 */
export function get_corporations_corporation_id_divisions(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_divisionsOperation, parameters)
}

/**
 * Return a corporation's facilities
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/facilities/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/facilities/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/facilities/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Factory_Manager
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of corporation facilities
 */
export function get_corporations_corporation_id_facilities(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_facilitiesOperation, parameters)
}

/**
 * Get the icon urls for a corporation
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/icons/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/icons/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/icons/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Urls for icons for the given corporation id and server
 */
export function get_corporations_corporation_id_icons(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_corporations_corporation_id_iconsOperation, parameters)
}

/**
 * Returns a corporation's medals
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/medals/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/medals/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/medals/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of medals
 */
export function get_corporations_corporation_id_medals(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_medalsOperation, parameters)
}

/**
 * Returns medals issued by a corporation
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/medals/issued/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/medals/issued/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/medals/issued/`
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
 * @return {Promise<object>} A list of issued medals
 */
export function get_corporations_corporation_id_medals_issued(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_medals_issuedOperation, parameters)
}

/**
 * Return the current member list of a corporation, the token's character need to be a member of the corporation.
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/members/`
 * 
 * Alternate route: `/v3/corporations/{corporation_id}/members/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of member character IDs
 */
export function get_corporations_corporation_id_members(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_membersOperation, parameters)
}

/**
 * Return a corporation's member limit, not including CEO himself
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/members/limit/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/members/limit/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/members/limit/`
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
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} The corporation's member limit
 */
export function get_corporations_corporation_id_members_limit(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_members_limitOperation, parameters)
}

/**
 * Returns a corporation's members' titles
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/members/titles/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/members/titles/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/members/titles/`
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
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of members and theirs titles
 */
export function get_corporations_corporation_id_members_titles(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_members_titlesOperation, parameters)
}

/**
 * Returns additional information about a corporation's members which helps tracking their activities
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/membertracking/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/membertracking/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/membertracking/`
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
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of member character IDs
 */
export function get_corporations_corporation_id_membertracking(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_membertrackingOperation, parameters)
}

/**
 * Return the roles of all members if the character has the personnel manager role or any grantable role.
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/roles/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/roles/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/roles/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of member character ID's and roles
 */
export function get_corporations_corporation_id_roles(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_rolesOperation, parameters)
}

/**
 * Return how roles have changed for a coporation's members, up to a month
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/roles/history/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/roles/history/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/roles/history/`
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
 * @return {Promise<object>} List of role changes
 */
export function get_corporations_corporation_id_roles_history(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_roles_historyOperation, parameters)
}

/**
 * Return the current shareholders of a corporation.
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/shareholders/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/shareholders/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/shareholders/`
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
 * @return {Promise<object>} List of shareholders
 */
export function get_corporations_corporation_id_shareholders(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_shareholdersOperation, parameters)
}

/**
 * Return corporation standings from agents, NPC corporations, and factions
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/standings/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/standings/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/standings/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of standings
 */
export function get_corporations_corporation_id_standings(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_standingsOperation, parameters)
}

/**
 * Returns list of corporation starbases (POSes)
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/starbases/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/starbases/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/starbases/`
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
 * @return {Promise<object>} List of starbases (POSes)
 */
export function get_corporations_corporation_id_starbases(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_starbasesOperation, parameters)
}

/**
 * Returns various settings and fuels of a starbase (POS)
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/starbases/{starbase_id}/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/starbases/{starbase_id}/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/starbases/{starbase_id}/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Director
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {number} starbaseId An EVE starbase (POS) ID
 * @param {number} systemId The solar system this starbase (POS) is located in,
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of starbases (POSes)
 */
export function get_corporations_corporation_id_starbases_starbase_id(corporationId, starbaseId, systemId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId,
      starbase_id: starbaseId
    },
    query: {
      datasource: options.datasource,
      system_id: systemId,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_corporations_corporation_id_starbases_starbase_idOperation, parameters)
}

/**
 * Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/structures/`
 * 
 * Alternate route: `/v2/corporations/{corporation_id}/structures/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Station_Manager
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of corporation structures' information
 */
export function get_corporations_corporation_id_structures(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    header: {
      'Accept-Language': options.AcceptLanguage,
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource,
      language: options.language,
      page: options.page,
      token: options.token
    }
  }
  return gateway.request(get_corporations_corporation_id_structuresOperation, parameters)
}

/**
 * Returns a corporation's titles
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/titles/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/titles/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/titles/`
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
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of titles
 */
export function get_corporations_corporation_id_titles(corporationId, options) {
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
  return gateway.request(get_corporations_corporation_id_titlesOperation, parameters)
}

const get_corporations_npccorpsOperation = {
  path: '/corporations/npccorps/',
  method: 'get'
}

const get_corporations_corporation_idOperation = {
  path: '/corporations/{corporation_id}/',
  method: 'get'
}

const get_corporations_corporation_id_alliancehistoryOperation = {
  path: '/corporations/{corporation_id}/alliancehistory/',
  method: 'get'
}

const get_corporations_corporation_id_blueprintsOperation = {
  path: '/corporations/{corporation_id}/blueprints/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_blueprints.v1']
    }
  ]
}

const get_corporations_corporation_id_containers_logsOperation = {
  path: '/corporations/{corporation_id}/containers/logs/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_container_logs.v1']
    }
  ]
}

const get_corporations_corporation_id_divisionsOperation = {
  path: '/corporations/{corporation_id}/divisions/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_divisions.v1']
    }
  ]
}

const get_corporations_corporation_id_facilitiesOperation = {
  path: '/corporations/{corporation_id}/facilities/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_facilities.v1']
    }
  ]
}

const get_corporations_corporation_id_iconsOperation = {
  path: '/corporations/{corporation_id}/icons/',
  method: 'get'
}

const get_corporations_corporation_id_medalsOperation = {
  path: '/corporations/{corporation_id}/medals/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_medals.v1']
    }
  ]
}

const get_corporations_corporation_id_medals_issuedOperation = {
  path: '/corporations/{corporation_id}/medals/issued/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_medals.v1']
    }
  ]
}

const get_corporations_corporation_id_membersOperation = {
  path: '/corporations/{corporation_id}/members/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_corporation_membership.v1']
    }
  ]
}

const get_corporations_corporation_id_members_limitOperation = {
  path: '/corporations/{corporation_id}/members/limit/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.track_members.v1']
    }
  ]
}

const get_corporations_corporation_id_members_titlesOperation = {
  path: '/corporations/{corporation_id}/members/titles/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_titles.v1']
    }
  ]
}

const get_corporations_corporation_id_membertrackingOperation = {
  path: '/corporations/{corporation_id}/membertracking/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.track_members.v1']
    }
  ]
}

const get_corporations_corporation_id_rolesOperation = {
  path: '/corporations/{corporation_id}/roles/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_corporation_membership.v1']
    }
  ]
}

const get_corporations_corporation_id_roles_historyOperation = {
  path: '/corporations/{corporation_id}/roles/history/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_corporation_membership.v1']
    }
  ]
}

const get_corporations_corporation_id_shareholdersOperation = {
  path: '/corporations/{corporation_id}/shareholders/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-wallet.read_corporation_wallets.v1']
    }
  ]
}

const get_corporations_corporation_id_standingsOperation = {
  path: '/corporations/{corporation_id}/standings/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_standings.v1']
    }
  ]
}

const get_corporations_corporation_id_starbasesOperation = {
  path: '/corporations/{corporation_id}/starbases/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_starbases.v1']
    }
  ]
}

const get_corporations_corporation_id_starbases_starbase_idOperation = {
  path: '/corporations/{corporation_id}/starbases/{starbase_id}/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_starbases.v1']
    }
  ]
}

const get_corporations_corporation_id_structuresOperation = {
  path: '/corporations/{corporation_id}/structures/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_structures.v1']
    }
  ]
}

const get_corporations_corporation_id_titlesOperation = {
  path: '/corporations/{corporation_id}/titles/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-corporations.read_titles.v1']
    }
  ]
}
