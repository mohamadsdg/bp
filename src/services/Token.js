import {
   getCookie,
   delCookie,
   setCookie,
   AsyncGetCookie,
} from '../helper/cookie';
import {COOCKIE} from '../constants';

class Token {
   constructor() {
      this._accessToken = null;
   }

   /**
    * get token from cookie
    * @method get
    * @return {string}  [Result - like: token or '' ]
    */
   get() {
      if (this._accessToken) return this._accessToken;
      const accessToken = getCookie(COOCKIE.TOKEN_NAME);

      return accessToken || null;
   }
   async AsyncGet() {
      if (this._accessToken) return this._accessToken;
      const accessToken = await AsyncGetCookie(COOCKIE.TOKEN_NAME);
      return accessToken || null;
   }

   /**
    * set token in cookie
    * @method set
    * @param  {String} accessToken   [save token in cookie]
    * @return {string}               [Result - like: token or '' ]
    */
   set(accessToken) {
      this._accessToken = accessToken;
      setCookie(COOCKIE.TOKEN_NAME, accessToken, '0.5');
   }

   /**
    * clear token from storage
    * @method clear
    * @return {string}  [Result - like: ]
    */
   clear() {
      this._accessToken = null;
      delCookie(COOCKIE.TOKEN_NAME);
   }
}

export default new Token();
