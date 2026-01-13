document.addEventListener("DOMContentLoaded", function() {
  setupQrCodes();
});

function setupQrCodes(){
  document.querySelectorAll('[data-qrcode-url]').forEach((element)=>{
      let qrcode = new QRCode(element, {
        text: element.dataset.qrcodeUrl,
        width: element.dataset.qrcodeWidth || 128,
        height: element.dataset.qrcodeHeight || 128,
        colorDark : element.dataset.qrcodeColorDark || "#000000",
        colorLight : element.dataset.qrcodeColorLight || "#ffffff",
      	correctLevel : QRCode.CorrectLevel.M
      });

      console.log("Generate a qrcode :", qrcode);
      setTimeout(() => {
        qrcode.clear(); // clear the code.
        qrcode.makeCode(element.dataset.qrcodeUrl); // make another code.
      }, 500);
  });
}
