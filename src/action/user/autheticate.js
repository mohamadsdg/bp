import {USER} from '../../constants';
import Http from '../services/Request';
import Notify from '../services/Notification';

const getUserId = userID => ({
   type: USER.AUTH.GET_USER_ID,
   payload: userID,
});
export const removeUserId = () => ({
   type: USER.AUTH.REMOVE_USER_ID,
   payload: null,
});
const hasExistUser = statusExistUser => ({
   type: USER.AUTH.EXIST_USER,
   payload: statusExistUser,
});
export const removeExistUser = () => ({
   type: USER.AUTH.REMOVE_EXIST_USER,
   payload: null,
});
const authFetch = statusFetch => ({
   type: USER.AUTH.REQUEST,
   payload: statusFetch,
});
const authCheckCode = statusCheckCode => ({
   type: USER.AUTH.CHECK_CODE,
   payload: statusCheckCode,
});
export const removeAuthCheckCode = () => ({
   type: USER.AUTH.REMOVE_CHECK_CODE,
   payload: null,
});
export const geUserToken = token => ({
   type: USER.TOKEN.GET_USER_TOKEN,
   payload: token,
});
export const userRefreshToken = newToken => ({
   type: USER.TOKEN.REFRESH_USER_TOKEN,
   payload: newToken,
});
export const removeUserToken = () => ({
   type: USER.TOKEN.REMOVE_USER_TOKEN,
   payload: null,
});

const setTokenInSession = token => {};
export const getTokenInSession = () => {};
export const removeTokenInSession = () => {};

export const sendMobile = ({mobile}) => async dispatch => {};
export const reSendMobile = mobile => async (dispatch, getState) => {};
export const checkCode = code => async (dispatch, getState) => {};
export const sendRegisterPassword = pass => async (dispatch, getState) => {};
export const sendLoginPassword = pass => async (dispatch, getState) => {};
export const handleForget = mobileNumber => async dispatch => {};
export const logout = () => async dispatch => {};
export const refreshToken = newToken => dispatch => {};
