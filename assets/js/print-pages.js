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

