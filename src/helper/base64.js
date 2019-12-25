export function handleFileSelect(file) {
   // let f = evt.target.files[0]; // FileList object
   let f = file; // FileList object
   let reader = new FileReader();
   let base64String;
   // Closure to capture the file information.
   reader.onload = (function(theFile) {
      return function(e) {
         let binaryData = e.target.result;
         //Converting Binary Data to base 64
         base64String = window.btoa(binaryData);
         //showing file converted to base64
         // document.getElementById('base64').value = base64String;
         alert('File converted to base64 successfuly!\nCheck in Textarea');
         // return base64String
      };
   })(f);
   // Read in the image file as a data URL.
   reader.readAsBinaryString(f);

   return base64String;
}

export function getBase64(img, callback) {
   const reader = new FileReader();
   reader.addEventListener('load', () => callback(reader.result));
   reader.readAsDataURL(img);
}
