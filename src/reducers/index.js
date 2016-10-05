import { combineReducers } from 'redux';
import channel from './channel';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  channel,
  todos,
  visibilityFilter
})
