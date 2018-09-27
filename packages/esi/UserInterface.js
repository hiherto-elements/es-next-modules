/** @module UserInterface */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Set a solar system as autopilot waypoint
 * 
 * ---
 * Alternate route: `/dev/ui/autopilot/waypoint/`
 * 
 * Alternate route: `/v2/ui/autopilot/waypoint/`
 * 
 * @param {boolean} addToBeginning Whether this solar system should be added to the beginning of all waypoints
 * @param {boolean} clearOtherWaypoints Whether clean other waypoints beforing adding this one
 * @param {number} destinationId The destination to travel to, can be solar system, station or structure's id
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Open window request received
 */
export function post_ui_autopilot_waypoint(addToBeginning, clearOtherWaypoints, destinationId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      add_to_beginning: addToBeginning,
      clear_other_waypoints: clearOtherWaypoints,
      datasource: options.datasource,
      destination_id: destinationId,
      token: options.token
    }
  }
  return gateway.request(post_ui_autopilot_waypointOperation, parameters)
}

/**
 * Open the contract window inside the client
 * 
 * ---
 * Alternate route: `/dev/ui/openwindow/contract/`
 * 
 * Alternate route: `/legacy/ui/openwindow/contract/`
 * 
 * Alternate route: `/v1/ui/openwindow/contract/`
 * 
 * @param {number} contractId The contract to open
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Open window request received
 */
export function post_ui_openwindow_contract(contractId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      contract_id: contractId,
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(post_ui_openwindow_contractOperation, parameters)
}

/**
 * Open the information window for a character, corporation or alliance inside the client
 * 
 * ---
 * Alternate route: `/dev/ui/openwindow/information/`
 * 
 * Alternate route: `/legacy/ui/openwindow/information/`
 * 
 * Alternate route: `/v1/ui/openwindow/information/`
 * 
 * @param {number} targetId The target to open
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Open window request received
 */
export function post_ui_openwindow_information(targetId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      target_id: targetId,
      token: options.token
    }
  }
  return gateway.request(post_ui_openwindow_informationOperation, parameters)
}

/**
 * Open the market details window for a specific typeID inside the client
 * 
 * ---
 * Alternate route: `/dev/ui/openwindow/marketdetails/`
 * 
 * Alternate route: `/legacy/ui/openwindow/marketdetails/`
 * 
 * Alternate route: `/v1/ui/openwindow/marketdetails/`
 * 
 * @param {number} typeId The item type to open in market window
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Open window request received
 */
export function post_ui_openwindow_marketdetails(typeId, options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token,
      type_id: typeId
    }
  }
  return gateway.request(post_ui_openwindow_marketdetailsOperation, parameters)
}

/**
 * Open the New Mail window, according to settings from the request if applicable
 * 
 * ---
 * Alternate route: `/dev/ui/openwindow/newmail/`
 * 
 * Alternate route: `/legacy/ui/openwindow/newmail/`
 * 
 * Alternate route: `/v1/ui/openwindow/newmail/`
 * 
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Open window request received
 */
export function post_ui_openwindow_newmail(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(post_ui_openwindow_newmailOperation, parameters)
}

const post_ui_autopilot_waypointOperation = {
  path: '/ui/autopilot/waypoint/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-ui.write_waypoint.v1']
    }
  ]
}

const post_ui_openwindow_contractOperation = {
  path: '/ui/openwindow/contract/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-ui.open_window.v1']
    }
  ]
}

const post_ui_openwindow_informationOperation = {
  path: '/ui/openwindow/information/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-ui.open_window.v1']
    }
  ]
}

const post_ui_openwindow_marketdetailsOperation = {
  path: '/ui/openwindow/marketdetails/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-ui.open_window.v1']
    }
  ]
}

const post_ui_openwindow_newmailOperation = {
  path: '/ui/openwindow/newmail/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-ui.open_window.v1']
    }
  ]
}
