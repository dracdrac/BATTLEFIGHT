


function downloadElementsAsImages(elements) {
  let dialog = document.createElement('dialog');
  dialog.innerHTML='Export en cours... (ça peut prendre du temps)';
  document.body.appendChild(dialog);
  dialog.showModal();
  elements = Array.from(elements).filter(e => window.getComputedStyle(e).getPropertyValue('display') != 'none');
  if(elements.length == 1){
    downloadHTMLAsImage(elements[0],()=>{dialog.close()});
  }
  else if(elements.length > 1){
    downloadHTMLAsImagesArchive(elements,()=>{dialog.close()});
  }
  else {
    console.log('No elements to export...-')
    dialog.close();
  }
}


function downloadHTMLAsImage(element, onClose){
  let name = element.id ? element.id : 'sanstitre';
  name += ".png";
  html2canvas(element).then(canvas => {
    let link = document.createElement('a');
    link.download = name;
    link.href = canvas.toDataURL();
    link.click();
    onClose();
  });
}

function downloadHTMLAsImagesArchive(elements, onClose){
  let zip = new JSZip();
  addImagesToZipThenDownload(zip, elements, 0, onClose);
}

function addImagesToZipThenDownload(zip,elements,i, onClose){
  i = i || 0;
  let element = elements[i];
  if (element) {
    let name = element.id ? element.id : 'sanstitre'+i;
    name += ".png";
    html2canvas(element).then(canvas => {
      let data = canvas.toDataURL("image/png", [0.0, 1.0]).split(',')[1]
      zip.file(name, data, {base64: true});
      addImagesToZipThenDownload(zip, elements, i+1);
    });
  }
  else {
    zip.generateAsync({type:"blob"})
    .then(function(content) {
      saveAs(content, 'images.zip');
      onClose();
    });
  }
}

