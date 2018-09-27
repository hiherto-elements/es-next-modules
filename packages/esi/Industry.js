/** @module Industry */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * List industry jobs placed by a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/industry/jobs/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/industry/jobs/`
 * 
 * Alternate route: `/v1/characters/{character_id}/industry/jobs/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {boolean} [options.includeCompleted] Whether to retrieve completed character industry jobs. Only includes jobs from the past 90 days
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Industry jobs placed by a character
 */
export function get_characters_character_id_industry_jobs(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      include_completed: options.includeCompleted,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_industry_jobsOperation, parameters)
}

/**
 * Paginated record of all mining done by a character for the past 30 days
 * 
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/mining/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/mining/`
 * 
 * Alternate route: `/v1/characters/{character_id}/mining/`
 * 
 * ---
 * This route is cached for up to 600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Mining ledger of a character
 */
export function get_characters_character_id_mining(characterId, options) {
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
  return gateway.request(get_characters_character_id_miningOperation, parameters)
}

/**
 * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.
 * 
 * 
 * ---
 * Alternate route: `/dev/corporation/{corporation_id}/mining/extractions/`
 * 
 * Alternate route: `/legacy/corporation/{corporation_id}/mining/extractions/`
 * 
 * Alternate route: `/v1/corporation/{corporation_id}/mining/extractions/`
 * 
 * ---
 * This route is cached for up to 1800 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Station_Manager
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of chunk timers
 */
export function get_corporation_corporation_id_mining_extractions(corporationId, options) {
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
  return gateway.request(get_corporation_corporation_id_mining_extractionsOperation, parameters)
}

/**
 * Paginated list of all entities capable of observing and recording mining for a corporation
 * 
 * 
 * ---
 * Alternate route: `/dev/corporation/{corporation_id}/mining/observers/`
 * 
 * Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/`
 * 
 * Alternate route: `/v1/corporation/{corporation_id}/mining/observers/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Accountant
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Observer list of a corporation
 */
export function get_corporation_corporation_id_mining_observers(corporationId, options) {
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
  return gateway.request(get_corporation_corporation_id_mining_observersOperation, parameters)
}

/**
 * Paginated record of all mining seen by an observer
 * 
 * 
 * ---
 * Alternate route: `/dev/corporation/{corporation_id}/mining/observers/{observer_id}/`
 * 
 * Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/{observer_id}/`
 * 
 * Alternate route: `/v1/corporation/{corporation_id}/mining/observers/{observer_id}/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Accountant
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {number} observerId A mining observer id
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Mining ledger of an observer
 */
export function get_corporation_corporation_id_mining_observers_observer_id(corporationId, observerId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId,
      observer_id: observerId
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
  return gateway.request(get_corporation_corporation_id_mining_observers_observer_idOperation, parameters)
}

/**
 * List industry jobs run by a corporation
 * 
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/industry/jobs/`
 * 
 * Alternate route: `/legacy/corporations/{corporation_id}/industry/jobs/`
 * 
 * Alternate route: `/v1/corporations/{corporation_id}/industry/jobs/`
 * 
 * ---
 * This route is cached for up to 300 seconds
 * 
 * ---
 * Requires one of the following EVE corporation role(s): Factory_Manager
 * 
 * @param {number} corporationId An EVE corporation ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {boolean} [options.includeCompleted] Whether to retrieve completed corporation industry jobs. Only includes jobs from the past 90 days
 * @param {number} [options.page] Which page of results to return
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of corporation industry jobs
 */
export function get_corporations_corporation_id_industry_jobs(corporationId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      corporation_id: corporationId
    },
    query: {
      datasource: options.datasource,
      include_completed: options.includeCompleted,
      page: options.page,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_corporations_corporation_id_industry_jobsOperation, parameters)
}

/**
 * Return a list of industry facilities
 * 
 * ---
 * Alternate route: `/dev/industry/facilities/`
 * 
 * Alternate route: `/legacy/industry/facilities/`
 * 
 * Alternate route: `/v1/industry/facilities/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of facilities
 */
export function get_industry_facilities(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_industry_facilitiesOperation, parameters)
}

/**
 * Return cost indices for solar systems
 * 
 * ---
 * Alternate route: `/dev/industry/systems/`
 * 
 * Alternate route: `/legacy/industry/systems/`
 * 
 * Alternate route: `/v1/industry/systems/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of cost indicies
 */
export function get_industry_systems(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_industry_systemsOperation, parameters)
}

const get_characters_character_id_industry_jobsOperation = {
  path: '/characters/{character_id}/industry/jobs/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-industry.read_character_jobs.v1']
    }
  ]
}

const get_characters_character_id_miningOperation = {
  path: '/characters/{character_id}/mining/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-industry.read_character_mining.v1']
    }
  ]
}

const get_corporation_corporation_id_mining_extractionsOperation = {
  path: '/corporation/{corporation_id}/mining/extractions/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-industry.read_corporation_mining.v1']
    }
  ]
}

const get_corporation_corporation_id_mining_observersOperation = {
  path: '/corporation/{corporation_id}/mining/observers/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-industry.read_corporation_mining.v1']
    }
  ]
}

const get_corporation_corporation_id_mining_observers_observer_idOperation = {
  path: '/corporation/{corporation_id}/mining/observers/{observer_id}/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-industry.read_corporation_mining.v1']
    }
  ]
}

const get_corporations_corporation_id_industry_jobsOperation = {
  path: '/corporations/{corporation_id}/industry/jobs/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-industry.read_corporation_jobs.v1']
    }
  ]
}

const get_industry_facilitiesOperation = {
  path: '/industry/facilities/',
  method: 'get'
}

const get_industry_systemsOperation = {
  path: '/industry/systems/',
  method: 'get'
}
