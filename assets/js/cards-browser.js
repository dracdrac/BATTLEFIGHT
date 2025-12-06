document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('#print-cards').addEventListener('click', ()=>{
    print();
  });

  document.querySelector('#cards-treatments').addEventListener('change',(e)=>{
    changeTreatments(e.target.value)
  })
});


function changeTreatments(treatment){
  document.querySelecorAll('.cards .card').forEach((card)=>{
    card.dataset.treatment = treatment;
    card.querySelector('.treatment').innerHTML = treatment;
  });
}
