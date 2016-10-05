import { combineReducers } from 'redux';
import { channelActions } from '../actions';

const initialState = {
  loading: true,
  error: false,
  loaded: false,
  channel: {
    stream: {}
  }
}

const channel = (state = initialState, action) => {
  switch (action.type) {
    case channelActions.REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false
      }
    case channelActions.OK:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: false,
        channel: action.payload
      }
    case channelActions.ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      }
    default:
      return state;
  }
}


const byId = (state = {}, action) => {
  switch (action.type) {
    case channelActions.REQUEST:
    case channelActions.OK:
    case channelActions.ERROR:
      return {
        ...state,
        [action.id]: channel(state[action.id], action),
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case channelActions.OK:
      if (state.includes(action.id)) {
        return state;
      }
      return [...state, action.id];
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds
})

export const getChannel = {
  getChannelById: (state, id) => {
    return state.app.channel.byId[id];
  }
}
