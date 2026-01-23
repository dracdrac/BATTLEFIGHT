document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('#print').addEventListener('click', (e)=>{
   console.log(e)
    print();
  });

  document.querySelector('#export').addEventListener('click', (e)=>{
    console.log(e)
    let pages = document.querySelectorAll('.page');
    downloadElementsAsImages(pages);
  });
});

function downloadElementsAsImages(elements) {
  if(elements.length == 1){
    downloadHTMLAsImage(elements[0])
  }
  else if(elements.length > 1){
    downloadHTMLAsImagesArchive(elements)
  }
  else {
    console.log('No elements to export...-')
  }
}


function downloadHTMLAsImage(element){
  let name = element.id ? element.id : 'sanstitre';
  name += ".png";
  html2canvas(element).then(canvas => {
    let link = document.createElement('a');
    link.download = name;
    link.href = canvas.toDataURL();
    link.click();
  });
}

function downloadHTMLAsImagesArchive(elements){
  let zip = new JSZip();
  addImagesToZipThenDownload(zip, elements, 0);
}

function addImagesToZipThenDownload(zip,elements,i){
  i = i || 0;
  let element = elements[i];
  if (element) {
    let name = element.id ? element.id : 'sanstitre'+i;
    name += ".png";
    html2canvas(element).then(canvas => {
      zip.file(imgName, canvas.toDataURL(), {base64: true});
      addImagesToZipThenDownload(zip, elements, i+1);
    });
  }
  else {
    zip.generateAsync({type:"blob"})
    .then(function(content) {
      saveAs(content, 'images.zip');
    });
  }
}


