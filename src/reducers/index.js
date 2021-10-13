import { combineReducers } from 'redux';
import user from './userReducer';
import contacts from './contactsReducer';

export default combineReducers({
  user,
  contacts,
});
