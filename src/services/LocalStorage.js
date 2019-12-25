import lscache from 'lscache';

const LS = (prefix = '') => {
   /**
    * @returns Removes prefix from keys so that lscache no longer stores in a particular bucket.
    */
   lscache.resetBucket();

   /**
    * @method  _save
    * @param {key (string) - value(Object|string) - time (number: optional (minute) )}
    * @returns {boolean} True if the value was stored successfully.
    */
   const _save = (key, value, time) => {
      if (!lscache.supported()) {
         new Error('Local storage is unsupported in this browser');
         return;
      } else {
         return lscache.set(key, value, time);
      }
   };

   /**
    * @method  _get
    * @param {key (string)}
    * @returns {string | Object } The stored value. If no value is available, null is returned.
    */
   const _get = key => {
      try {
         return lscache.get(key);
      } catch (error) {
         throw new Error('_get localStorage', error);
      }
   };

   /**
    * @method  _remove
    * @param {key (string)}
    * @returns {} Removes a value from localStorage.
    */
   const _remove = key => {
      try {
         lscache.remove(key);
      } catch (error) {
         throw new Error('remove localStorage', error);
      }
   };

   return {
      save: _save,
      get: _get,
      remove: _remove,
   };
};
export default LS;
