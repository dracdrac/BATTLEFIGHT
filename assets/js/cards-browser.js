document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('#print-cards').addEventListener('click', (e)=>{

   console.log(e)
    print();
  });

  document.querySelector('#cards-treatments').addEventListener('change',(e)=>{
    changeTreatments(e.target.value)
  })

  document.querySelector('#filter-string').addEventListener('input',onSearchInput);
  document.querySelector('#search-in').addEventListener('input',onSearchInput);



});

function onSearchInput(e){
    let str = document.querySelector('#filter-string').value.trim();
    if(str.length <= 0 ) return;
    let selector = document.querySelector('#search-in').value;
    let cards = document.querySelectorAll('.cards .card');
    filterCards(cards, selector, str);
}

function changeTreatments(treatment){
  document.querySelectorAll('.cards .card').forEach((card)=>{
    card.dataset.treatment = treatment;
    card.querySelector('.treatment').innerHTML = treatment;
  });
}


function filterCards(cards, selector, str){
  const removeDiatrics = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  str = removeDiatrics(str.toLowerCase());
  cards.forEach((card)=>{
    let cardText = card.querySelector(selector).innerText;
    cardText = removeDiatrics(cardText.toLowerCase());
    if(cardText.indexOf(str)>=0){
      card.style.display='';
    }
    else {
      card.style.display='none';
    }
  });
} 
