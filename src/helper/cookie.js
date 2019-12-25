// work with cookie
export const setCookie = (cname, cValue, exDays, callback = f => f) => {
   let d = new Date();
   d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
   let expires = 'expires=' + d.toUTCString();
   document.cookie = cname + '=' + cValue + ';' + expires + ';path=/';
   callback();
};
export const AsyncGetCookie = cname => {
   let name = cname + '=';
   return new Promise((resolve, reject) => {
      window.addEventListener('load', () => {
         let decodedCookie = decodeURIComponent(document.cookie);
         let ca = decodedCookie.split(';');
         for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
               c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
               c.substring(name.length, c.length)
                  ? resolve(c.substring(name.length, c.length))
                  : reject(false);
            }
         }
         reject(false);
      });
   });
   // console.log("this is getCookie function and cookie name is:"+cname);
};
export const getCookie = cname => {
   // console.log("this is getCookie function and cookie name is:"+cname);
   let name = cname + '=';
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
         c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
         return c.substring(name.length, c.length);
      }
   }
   return '';
};
export const delCookie = cname => {
   // document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
   // browser.cookies.remove({});
   setCookie(cname, '', 'Thu, 01 Jan 1970 00:00:01 GMT');
};
export const checkCookie = cname => {
   let cookie = getCookie(cname);
   return cookie !== '' ? true : !true;
};
