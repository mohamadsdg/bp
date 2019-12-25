/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import axios from 'axios';

import {
   CONST_COOKIE,
   getCookie,
   checkCookie,
   delCookie,
} from '../function/cookie';
import {COOCKIE} from '../constants';
import {refreshToken} from '../action/user/autheticate';
import store from '../../store';
import Notify from './Notification';

const CancelToken = axios.CancelToken;
export const source = CancelToken.source();

const HttpRequest = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL_API,
   responseType: 'json',
   headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
   },
   // timeout: 10000,
   transformRequest: [
      function(data, headers) {
         // console.log('transformRequest', data);
         // const token = getTokenInSession();
         // const token = getCookie(COOCKIE.TOKEN_NAME);
         // if (token) headers['Authorization'] = `Bearer ${token}`;

         /**
          * compatible for formData
          */
         if (headers['Content-Type'] === 'multipart/form-data') {
            let formData = new FormData();
            for (const key in data) {
               formData.append(key, data[key]);
            }
            return formData;
         } else {
            return JSON.stringify(data);
         }
      },
   ],
   transformResponse: [
      data => {
         return data;
      },
   ],
   cancelToken: source.token,
});

/**
 *
 * Any request to use this service (HttpRequest)
 * In this method we can review response
 *
 * @method  interceptors.response
 * @param {response}
 * @returns {object}
 */

HttpRequest.interceptors.response.use(
   function(response) {
      const {status, data} = response;
      // console.log('HttpRequest > response', response);

      // check refresh token if exsit replace to previuse token
      // response.headers['refresh-token'] !== undefined && store.dispatch(refreshToken(response.headers['refresh-token']));

      // handle global Error
      // if (data.global_error !== undefined && data.global_error) {
      //    data.msg !== '' && Notify(data).error();
      // }

      // validateStatus and show message from server
      // if (status >= 400 && status <= 599) {
      //    data.msg !== '' && Notify(data).error();

      //    if (status === 401) {
      //       if (checkCookie(CONST_COOKIE.TOKEN_NAME)) {
      //          delCookie(CONST_COOKIE.TOKEN_NAME);
      //          setTimeout(() => {
      //             document.location.reload(); // because refresh page
      //          }, 1000);
      //       }
      //    }
      // }

      return response;
   },
   function(error) {
      //TODO: send Error to app monitoring (like : sentary)
      // console.log('HttpRequest > error', error.response);
      const {status, data} = error.response;

      // validateStatus and show message from server
      if (status >= 400 && status <= 599) {
         data.message !== '' && Notify(data).error();

         // if (status === 401) {
         //    if (checkCookie(CONST_COOKIE.TOKEN_NAME)) {
         //       delCookie(CONST_COOKIE.TOKEN_NAME);
         //       setTimeout(() => {
         //          document.location.reload(); // because refresh page
         //       }, 1000);
         //    }
         // }
      }

      return Promise.reject(error);
   },
);

export default HttpRequest;
