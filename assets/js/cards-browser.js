document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('#print-cards').addEventListener('click', ()=>{
    print();
  });

  document.querySelector('#cards-treatments').addEventListener('change',(e)=>{
    changeTreatments(e.target.value)
  })

  document.querySelector('#filter-string').addEventListener('input',(e)=>{
    if(e.target.value.trim().length) filterCards(e.target.value.trim());
  });



});

function filterCards(str){
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
  const removeDiatrics = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  str = removeDiatrics(str.toLowerCase());
  cards.forEach((card)=>{
    let cardText = card.querySelector(selector).innerText;
    cardText = removeDiatrics(cardText.toLowerCase();
    if(cardText.indexOf(str)>=0){
      card.style.display='';
    }
    else {
      card.style.display='none';
    }
  });
} 
