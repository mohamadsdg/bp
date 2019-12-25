const Notify = response => {
   const {msg, data} = response;
   let hasErrorArray = false;
   if (data !== null && data['errors']) {
      hasErrorArray = true;
   }
   const entireError = errors => {
      let strErr = '';
      strErr = errors.join('<br/>');
      return strErr;
   };
   const Error = (overlay = true, pos = 'topRight', time = 2000) => {
      import('../lib/izitoast').then(x => {
         x.default.then(y => {
            y.error({
               title: hasErrorArray ? msg : '',
               message: hasErrorArray ? entireError(data.errors) : msg,
               rtl: true,
               position: pos,
               close: false,
               overlay: overlay,
               timeout: time,
            });
         });
      });
   };
   const Success = (overlay = false, pos = 'topRight', time = 2000) => {
      import('../lib/izitoast').then(x => {
         x.default.then(y => {
            y.success({
               title: msg,
               rtl: true,
               position: pos,
               close: false,
               overlay: overlay,
               timeout: time,
            });
         });
      });
   };
   return {
      error: Error,
      success: Success,
   };
};
export default Notify;
