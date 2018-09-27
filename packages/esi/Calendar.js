/** @module Calendar */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/calendar/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/calendar/`
 * 
 * Alternate route: `/v1/characters/{character_id}/calendar/`
 * 
 * ---
 * This route is cached for up to 5 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {number} [options.fromEvent] The event ID to retrieve events from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A collection of event summaries
 */
export function get_characters_character_id_calendar(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      from_event: options.fromEvent,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_calendarOperation, parameters)
}

/**
 * Get all the information for a specific event
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`
 * 
 * Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`
 * 
 * ---
 * This route is cached for up to 5 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} eventId The id of the event requested
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Full details of a specific event
 */
export function get_characters_character_id_calendar_event_id(characterId, eventId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      event_id: eventId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_calendar_event_idOperation, parameters)
}

/**
 * Set your response status to an event
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`
 * 
 * Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} eventId The ID of the event requested
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Event updated
 */
export function put_characters_character_id_calendar_event_id(characterId, eventId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      event_id: eventId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(put_characters_character_id_calendar_event_idOperation, parameters)
}

/**
 * Get all invited attendees for a given event
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/attendees/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/attendees/`
 * 
 * Alternate route: `/v1/characters/{character_id}/calendar/{event_id}/attendees/`
 * 
 * ---
 * This route is cached for up to 600 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} eventId The id of the event requested
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} List of attendees
 */
export function get_characters_character_id_calendar_event_id_attendees(characterId, eventId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      event_id: eventId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_calendar_event_id_attendeesOperation, parameters)
}

const get_characters_character_id_calendarOperation = {
  path: '/characters/{character_id}/calendar/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-calendar.read_calendar_events.v1']
    }
  ]
}

const get_characters_character_id_calendar_event_idOperation = {
  path: '/characters/{character_id}/calendar/{event_id}/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-calendar.read_calendar_events.v1']
    }
  ]
}

const put_characters_character_id_calendar_event_idOperation = {
  path: '/characters/{character_id}/calendar/{event_id}/',
  method: 'put',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-calendar.respond_calendar_events.v1']
    }
  ]
}

const get_characters_character_id_calendar_event_id_attendeesOperation = {
  path: '/characters/{character_id}/calendar/{event_id}/attendees/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-calendar.read_calendar_events.v1']
    }
  ]
}
