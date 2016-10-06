import { combineReducers } from 'redux';
import channel, { getChannel } from './channel';

export default combineReducers({
  channel,
})

export {
  getChannel
}
