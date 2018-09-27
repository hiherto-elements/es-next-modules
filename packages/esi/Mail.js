/** @module Mail */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/mail/`
 * 
 * Alternate route: `/v1/characters/{character_id}/mail/`
 * 
 * ---
 * This route is cached for up to 30 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {number[]} [options.labels] Fetch only mails that match one or more of the given labels
 * @param {number} [options.lastMailId] List only mail with an ID lower than the given ID, if present
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} The requested mail
 */
export function get_characters_character_id_mail(characterId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId
    },
    query: {
      datasource: options.datasource,
      labels: options.labels,
      last_mail_id: options.lastMailId,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_mailOperation, parameters)
}

/**
 * Create and send a new mail
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/mail/`
 * 
 * Alternate route: `/v1/characters/{character_id}/mail/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Mail created
 */
export function post_characters_character_id_mail(characterId, options) {
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
  return gateway.request(post_characters_character_id_mailOperation, parameters)
}

/**
 * Return a list of the users mail labels, unread counts for each label and a total unread count.
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/labels/`
 * 
 * Alternate route: `/v3/characters/{character_id}/mail/labels/`
 * 
 * ---
 * This route is cached for up to 30 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} A list of mail labels and unread counts
 */
export function get_characters_character_id_mail_labels(characterId, options) {
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
  return gateway.request(get_characters_character_id_mail_labelsOperation, parameters)
}

/**
 * Create a mail label
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/labels/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/mail/labels/`
 * 
 * Alternate route: `/v2/characters/{character_id}/mail/labels/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Label created
 */
export function post_characters_character_id_mail_labels(characterId, options) {
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
  return gateway.request(post_characters_character_id_mail_labelsOperation, parameters)
}

/**
 * Delete a mail label
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/labels/{label_id}/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/mail/labels/{label_id}/`
 * 
 * Alternate route: `/v1/characters/{character_id}/mail/labels/{label_id}/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} labelId An EVE label id
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Label deleted
 */
export function delete_characters_character_id_mail_labels_label_id(characterId, labelId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      label_id: labelId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(delete_characters_character_id_mail_labels_label_idOperation, parameters)
}

/**
 * Return all mailing lists that the character is subscribed to
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/lists/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/mail/lists/`
 * 
 * Alternate route: `/v1/characters/{character_id}/mail/lists/`
 * 
 * ---
 * This route is cached for up to 120 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Mailing lists
 */
export function get_characters_character_id_mail_lists(characterId, options) {
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
  return gateway.request(get_characters_character_id_mail_listsOperation, parameters)
}

/**
 * Delete a mail
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`
 * 
 * Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} mailId An EVE mail ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Mail deleted
 */
export function delete_characters_character_id_mail_mail_id(characterId, mailId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      mail_id: mailId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(delete_characters_character_id_mail_mail_idOperation, parameters)
}

/**
 * Return the contents of an EVE mail
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`
 * 
 * Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
 * 
 * ---
 * This route is cached for up to 30 seconds
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} mailId An EVE mail ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.IfNoneMatch] ETag from a previous request. A 304 will be returned if this matches the current ETag
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Contents of a mail
 */
export function get_characters_character_id_mail_mail_id(characterId, mailId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      mail_id: mailId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    },
    header: {
      'If-None-Match': options.IfNoneMatch
    }
  }
  return gateway.request(get_characters_character_id_mail_mail_idOperation, parameters)
}

/**
 * Update metadata about a mail
 * 
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`
 * 
 * Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`
 * 
 * Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
 * 
 * @param {number} characterId An EVE character ID
 * @param {number} mailId An EVE mail ID
 * @param {object} options Optional options
 * @param {string} [options.datasource] The server name you would like data from
 * @param {string} [options.token] Access token to use if unable to set a header
 * @return {Promise<object>} Mail updated
 */
export function put_characters_character_id_mail_mail_id(characterId, mailId, options) {
  if (!options) options = {}
  const parameters = {
    path: {
      character_id: characterId,
      mail_id: mailId
    },
    query: {
      datasource: options.datasource,
      token: options.token
    }
  }
  return gateway.request(put_characters_character_id_mail_mail_idOperation, parameters)
}

const get_characters_character_id_mailOperation = {
  path: '/characters/{character_id}/mail/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-mail.read_mail.v1']
    }
  ]
}

const post_characters_character_id_mailOperation = {
  path: '/characters/{character_id}/mail/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-mail.send_mail.v1']
    }
  ]
}

const get_characters_character_id_mail_labelsOperation = {
  path: '/characters/{character_id}/mail/labels/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-mail.read_mail.v1']
    }
  ]
}

const post_characters_character_id_mail_labelsOperation = {
  path: '/characters/{character_id}/mail/labels/',
  method: 'post',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-mail.organize_mail.v1']
    }
  ]
}

const delete_characters_character_id_mail_labels_label_idOperation = {
  path: '/characters/{character_id}/mail/labels/{label_id}/',
  method: 'delete',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-mail.organize_mail.v1']
    }
  ]
}

const get_characters_character_id_mail_listsOperation = {
  path: '/characters/{character_id}/mail/lists/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-mail.read_mail.v1']
    }
  ]
}

const delete_characters_character_id_mail_mail_idOperation = {
  path: '/characters/{character_id}/mail/{mail_id}/',
  method: 'delete',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-mail.organize_mail.v1']
    }
  ]
}

const get_characters_character_id_mail_mail_idOperation = {
  path: '/characters/{character_id}/mail/{mail_id}/',
  method: 'get',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-mail.read_mail.v1']
    }
  ]
}

const put_characters_character_id_mail_mail_idOperation = {
  path: '/characters/{character_id}/mail/{mail_id}/',
  method: 'put',
  security: [
    {
      id: 'evesso',
      scopes: ['esi-mail.organize_mail.v1']
    }
  ]
}
