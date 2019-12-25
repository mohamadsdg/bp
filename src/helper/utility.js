export const throttled = (delay, fn) => {
   let lastCall = 0;
   return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
         return;
      }
      lastCall = now;
      return fn(...args);
   };
};

export const debounced = (delay, fn) => {
   let timerId;
   return function(...args) {
      if (timerId) {
         clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
         fn(...args);
         timerId = null;
      }, delay);
   };
};
// #edit single digit to 2digit
export const precisionSingleDigit = number => {
   let convert2digit = number;
   return convert2digit <= 9 ? `0${convert2digit}` : number;
};
// #text direction
export const textDirection = string => {
   // if (typeof string !== string) return;
   // let x = new RegExp('[\x00-\x80]+'); // is ascii /[\u0590-\u06FF]/.
   let x = /[\u0590-\u06FF]/;
   let isAscii = x.test(string);
   // console.log(isAscii, string);
   return isAscii ? 'rtl' : 'ltr';
};
