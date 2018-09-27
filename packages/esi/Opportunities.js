/** @module Opportunities */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return a list of tasks finished by a character
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/opportunities/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/opportunities/`
 * 
 * Alternate route: `/v1/characters/{character_id}/opportunities/`
 * 
 * ---
 * This route is cached for up to 3600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of opportunities task ids
 */
export function get_characters_character_id_opportunities(characterId, options) {
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
  return gateway.request(get_characters_character_id_opportunitiesOperation, parameters)
}

/**
 * Return a list of opportunities groups
 * 
 * ---
 * Alternate route: `/dev/opportunities/groups/`
 * 
 * Alternate route: `/legacy/opportunities/groups/`
 * 
 * Alternate route: `/v1/opportunities/groups/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of opportunities group ids
 */
export function get_opportunities_groups(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_opportunities_groupsOperation, parameters)
}

/**
 * Return information of an opportunities group
 * 
 * ---
 * Alternate route: `/dev/opportunities/groups/{group_id}/`
 * 
 * Alternate route: `/legacy/opportunities/groups/{group_id}/`
 * 
 * Alternate route: `/v1/opportunities/groups/{group_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} groupId ID of an opportunities group
 * @param {object} options Optional options
 * @param {string} [options.AcceptLanguage] Language to use in the response
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.language] Language to use in the response, takes precedence over Accept-Language
 * @return {Promise<object>} Details of an opportunities group
 */
export function get_opportunities_groups_group_id(groupId, options) {
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
  return gateway.request(get_opportunities_groups_group_idOperation, parameters)
}

/**
 * Return a list of opportunities tasks
 * 
 * ---
 * Alternate route: `/dev/opportunities/tasks/`
 * 
 * Alternate route: `/legacy/opportunities/tasks/`
 * 
 * Alternate route: `/v1/opportunities/tasks/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} A list of opportunities task ids
 */
export function get_opportunities_tasks(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_opportunities_tasksOperation, parameters)
}

/**
 * Return information of an opportunities task
 * 
 * ---
 * Alternate route: `/dev/opportunities/tasks/{task_id}/`
 * 
 * Alternate route: `/legacy/opportunities/tasks/{task_id}/`
 * 
 * Alternate route: `/v1/opportunities/tasks/{task_id}/`
 * 
 * ---
 * This route expires daily at 11:05
 * 
 * @param {number} taskId ID of an opportunities task
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @return {Promise<object>} Details of an opportunities task
 */
export function get_opportunities_tasks_task_id(taskId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    },
    path: {
      task_id: taskId
    }
  }
  return gateway.request(get_opportunities_tasks_task_idOperation, parameters)
}

const get_characters_character_id_opportunitiesOperation = {
  path: '/characters/{character_id}/opportunities/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-characters.read_opportunities.v1']
    }
  ]
}

const get_opportunities_groupsOperation = {
  path: '/opportunities/groups/',
  method: 'get'
}

const get_opportunities_groups_group_idOperation = {
  path: '/opportunities/groups/{group_id}/',
  method: 'get'
}

const get_opportunities_tasksOperation = {
  path: '/opportunities/tasks/',
  method: 'get'
}

const get_opportunities_tasks_task_idOperation = {
  path: '/opportunities/tasks/{task_id}/',
  method: 'get'
}
