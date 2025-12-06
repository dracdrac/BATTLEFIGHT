// = "https://lite.framacalc.org/2cjimar6ts-aegk.csv";
const FRAMACALC_BASE_URL = "https://lite.framacalc.org/";

document.addEventListener("DOMContentLoaded", function() {
  let framacalcCode = getCookie('framacalc-code');

  // Auto Load
  if(framacalcCode){
    document.querySelector('#framacalc-code').value = framacalcCode;
    loadCards(framacalcCode)
  }

  // Load on button press
  document.querySelecor('#load-cards').addEventListener('click',()=>{
    let framacalcCode = document.querySelector('#framacalc-code').value.trim();
    if(document.querySelecor('#remember').value){
      setCookie('framacalc-code', framacalcCode, 365);
    }
    loadCards(framacalcCode)
  });
});


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function loadCards(framacalcCode){

  let framacalcUrl = FRAMACALC_BASE_URL + framacalcCode + '.csv'
  let cardsElements = document.querySelecor('.cards');
  Papa.parse(framacalcUrl, {
    download:true,
    header:true,
    complete: function(results) {
      console.log("Loaded:", results, results.data);
      createCards(results.data, cardsElements);
    },
    error: function(err, file, inputElem, reason) {
      console.log("Error:", err, reason);
    }
  });
}


function createCards(data, container){
  container.innerHTML = '';
  data = data.filter((cardData)=>cardData['ID'].trim().length)
  data.forEach((cardData, i)=>{
    createCard(cardData, container);
  })
}




function createCard(data, container){
  let cardTemplate = document.querySelector("#card-template");
  let clone = document.importNode(cardTemplate.content, true);

  let edition = EDITION;
  let version = VERSION;
  let treatment = '';
  let number = data['ID'].trim();
  let title = data['TITLE'].trim();
  let type = data['TYPE'].trim();
  let illuSrc = ILLU_DIR + data['ID'].trim() + '.jpg';
  let stepsClasses =  data['STEPS'].trim();


  clone.querySelector(".title").innerHTML = title;
  clone.querySelector(".type").innerHTML = type;
  clone.querySelector(".illu img").src = illuSrc;
  clone.querySelector(".edition").innerHTML = edition;
  clone.querySelector(".number").innerHTML = number;
  clone.querySelector(".treatment").innerHTML = treatment;
  clone.querySelector(".version").innerHTML = version;

  clone.querySelector(".card").dataset.title = title;
  clone.querySelector(".card").dataset.type = type;
  clone.querySelector(".card").dataset.edition = edition;
  clone.querySelector(".card").dataset.number = number;
  clone.querySelector(".card").dataset.version = version;

  for(let i=0; i++; i<stepsClasses.length){
      let stepClass = stepsClasses[i];
      let stepText = data['STEP'+(i+1)].trim();
      createStep(stepText, stepClass, clone.querySelector(".steps")); )
  }

  container.appendChild(clone);
}



function createStep(stepText, stepClass, container){
  let ruleTemplate = document.querySelector("#rule-template");
  const CLASSES = {'C':'condition','E':'effet','I':'intervention','P':'permanente'};
  let clone = document.importNode(ruleTemplate.content, true);
  clone.querySelector('.step').classList.add(CLASSES[c])
  clone.querySelector('.step-text').innerHTML = stepText;
  container.appendChild(clone);
}

