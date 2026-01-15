document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('#print').addEventListener('click', (e)=>{
   console.log(e)
    print();
  });

  document.querySelector('#export').addEventListener('click', (e)=>{
   console.log(e)
    let pages = document.querySelectorAll('.page').forEach((page, i)=>{
      downloadHTMLAsImage(page, i);
    });
  });
});


function downloadCanvasAsImage(canvas, name){
  var link = document.createElement('a');
  link.download = name + 'png';
  link.href = canvas.toDataURL();
  link.click();
}

function downloadHTMLAsImage(element, i){
html2canvas(element).then(canvas => {
    let name = element.id ? element.id : 'sanstitre' + i;
    downloadCanvasAsImage(canvas, element.id);
});

}
