import fetch from 'isomorphic-fetch';

const CLIENT_ID = 'bdm2yxcvdzvq0pb4a5gtv3zih8c4eto'
const URL = 'https://api.twitch.tv/kraken/streams'

const REQUEST = 'channel/REQUEST';
const OK = 'channel/OK';
const ERROR = 'channel/ERROR';
const FILTER = 'channel/FILTER';

export const channelActions = {
  REQUEST,
  OK,
  ERROR,
  FILTER
}

const getChannelRequest = (id) => ({
  type: REQUEST,
  id
})

const getChannelOk = (payload, id) => ({
  type: OK,
  payload,
  id
})

const getChannelError = (payload, id) => ({
  type: ERROR,
  payload,
  id
})

export const setChannelVisibility = (filter) => ({
  type: FILTER,
  filter
})

export const getChannel = (channel_id) => (dispatch, getState) => {
  dispatch(getChannelRequest(channel_id))

  return fetch(`${URL}/${channel_id}?client_id=${CLIENT_ID}`)
    .then(response => response.json(channel_id))
    .then(json => {
      dispatch(getChannelOk(json, channel_id))
    })
    .catch(error => {
      dispatch(getChannelError(error, channel_id))
    })
}
