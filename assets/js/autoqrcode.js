document.addEventListener("DOMContentLoaded", function() {
  setupQrCodes();
});

function setupQrCodes(){
  document.querySelectorAll('[data-qrcode-url]').forEach((element)=>{
      console.log("Generate a qrcode :" qrcode)
      let qrcode = new QRCode(element, {
      text: element.dataset.qrcodeUrl,
      width: element.dataset.qrcodeWidth || 128,
      height: element.dataset.qrcodeHeight || 128,
      colorDark : element.dataset.qrcodeColorDark || "#000000",
      colorLight : element.dataset.qrcodeColorLight || "#ffffff"
    });
  });
}
