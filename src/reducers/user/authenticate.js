import {combineReducers} from 'redux';
import {USER} from '../../constants';

export const auth_fetch = (state = false, action) => {
   return action.type === USER.AUTH.REQUEST ? action.payload : state;
};
export const user_id = (state = null, action) => {
   switch (action.type) {
      case USER.AUTH.GET_USER_ID:
         return (state = action.payload);
      case USER.AUTH.REMOVE_USER_ID:
         return (state = null);
      default:
         return state;
   }
};
export const exist_user = (state = false, action) => {
   switch (action.type) {
      case USER.AUTH.EXIST_USER:
         return (state = action.payload);
      case USER.AUTH.REMOVE_EXIST_USER:
         return (state = false);
      default:
         return state;
   }
};
export const check_code = (state = false, action) => {
   switch (action.type) {
      case USER.AUTH.CHECK_CODE:
         return (state = action.payload);
      case USER.AUTH.REMOVE_CHECK_CODE:
         return (state = false);
      default:
         return state;
   }
};
export const token = (state = null, action) => {
   switch (action.type) {
      case USER.TOKEN.GET_USER_TOKEN:
         return (state = action.payload);
      case USER.TOKEN.REFRESH_USER_TOKEN:
         return (state = action.payload);
      case USER.TOKEN.REMOVE_USER_TOKEN:
         return (state = null);
      default:
         return state;
   }
};

export default combineReducers({
   auth_fetch,
   user_id,
   exist_user,
   check_code,
   token,
});
