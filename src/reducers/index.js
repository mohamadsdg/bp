import {combineReducers} from 'redux';

/////// reducerPart
import AuthReducer from './user/authenticate';

export default combineReducers({
   user: combineReducers({
      auth: AuthReducer,
   }),
});
