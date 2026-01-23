document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('#print-cards').addEventListener('click', (e)=>{

   console.log(e)
    print();
  });

  document.querySelector('#export').addEventListener('click', (e)=>{
    console.log(e)
    let cards = document.querySelectorAll('.cards .card');
    downloadElementsAsImages(cards);
  });



  document.querySelector('#cards-treatments').addEventListener('change',(e)=>{
    changeTreatments(e.target.value)
  })
  document.querySelector('#cards-sizes').addEventListener('change',(e)=>{
    changeSize(e.target.value)
  })

  document.querySelector('#filter-string').addEventListener('input',onSearchInput);
  document.querySelector('#search-in').addEventListener('input',onSearchInput);



});

function onSearchInput(e){
    let cards = document.querySelectorAll('.cards .card');
    let str = document.querySelector('#filter-string').value.trim();
    if(str.length <= 0 ) return removeFilterCards(cards);
    let selector = document.querySelector('#search-in').value;
    filterCards(cards, selector, str);
}

function changeTreatments(treatment){
  document.querySelectorAll('.cards .card').forEach((card)=>{
    card.dataset.treatment = treatment;
    card.querySelector('.treatment').innerHTML = treatment;
  });
}

function changeSize(size){
  document.querySelectorAll('.cards .card-container').forEach((container)=>{
    container.dataset.size = size;
  });
}


function removeFilterCards(cards){
  cards.forEach((card)=>{
    card.parentElement.style.display='';
    card.style.display='';
  });
}

function filterCards(cards, selector, str){
  const removeDiatrics = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  str = removeDiatrics(str.toLowerCase());
  cards.forEach((card)=>{
    let cardText = card.querySelector(selector).innerText;
    cardText = removeDiatrics(cardText.toLowerCase());
    if(cardText.indexOf(str)>=0){
      card.parentElement.style.display='';
      card.style.display='';
    }
    else {
      card.parentElement.style.display='none';
      card.style.display='none';
    }
  });
} 
