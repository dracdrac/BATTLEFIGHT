const CSV_URL = "https://lite.framacalc.org/2cjimar6ts-aegk.csv";

document.addEventListener("DOMContentLoaded", function() {
  let cardsElements = document.querySelectorAll('.card')

  if(cardsElements){
    loadCards(cardsElements)
  }
});




function loadCards(cardsElements){

  Papa.parse(CSV_URL, {
    download:true,
    header:true,
    complete: function(results) {
      console.log("Finished:", results, results.data);
      createCards(results.data, cardsElements);
    },
    error: function(err, file, inputElem, reason) {
      console.log("Error:", err, reason);
    }
  });
}


function fillCards(data, cardsElements){

  cardsElements.forEach(cardElement=>{
    let cardData = data.find((cardData)=>cardData['ID'] == cardElement.dataset.id);
    createCard(cardData, cardElement);
  });
}

function fillCard(data, element){


  element.querySelector(".title").innerHTML = data['TITLE'].trim();
  let typeDisp = data['TYPE_DISP']
  if(!typeDisp || typeDisp.trim().length <= 0){
    typeDisp = data['TYPE'];
  }
  typeDisp = typeDisp.trim();
  element.querySelector(".primary_types").innerHTML = typeDisp;
  imgSrc = '/cartes/illu/'+ data['ID'].trim() +'.jpg'
  let illu = clone.querySelector(".illu img");
  illu.src = imgSrc;

  element.querySelector(".id").innerHTML = data['ID'].trim();

  element.querySelector(".card").dataset.id = data['ID'];
  element.querySelector(".card").dataset.title = data['TITLE'];
  element.querySelector(".card").dataset.type = data['TYPE'];
  createRules(data, element.querySelector(".rules"));
}


function countRules(data){
  let count = 0;
  for(let i=0; i<=10 ; i++){
    let step = 'STEP'+(i+1);

    if(step in data && data[step].trim().length > 0){
      count++;
    }
  }
  return count;
}

function createRules(data, container){
  let ruleTemplate = container.querySelector("#rule-template");
  const ruleClasses = {'C':'condition','E':'effet','I':'intervention','P':'permanente'}
  data['STEPS'].trim().split('').forEach((c,i)=>{
    let clone = document.importNode(ruleTemplate.content, true);
    clone.querySelector('.rule').classList.add(ruleClasses[c])
    clone.querySelector('.rule_text').innerHTML = data['STEP'+(i+1)].trim();
    container.appendChild(clone);
  });
}


