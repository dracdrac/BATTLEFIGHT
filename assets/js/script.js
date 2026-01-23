


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
      let data = canvas.toDataURL("image/png", [0.0, 1.0]).split(',')[1]
      zip.file(name, data, {base64: true});
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



/*

const CSV_URL = "https://lite.framacalc.org/2cjimar6ts-aegk.csv";

function main(){
  setupMenu();
  load()

}

function load(){
  let url = document.querySelector("#data-url").value;
  if(! url.endsWith('.csv')) url += '.csv';
  let container = document.querySelector("#cards");
  container.innerHTML = 'ça chaaaarge...';
  Papa.parse(url, {
    download:true,
    header:true,	
    complete: function(results) {
      console.log("Finished:", results, results.data);
      createCards(results.data, container);
    },
    error: function(err, file, inputElem, reason) {
      console.log("Error:", err, reason);
        container.innerHTML = 'oups petit soucis :\'( <br/>Je n\'arrive pas à charger les données.<br/>Vérifie le lien framacalc ('+url+').';
    }
  });
}

function setupMenu(){
  
    document.querySelector("body").dataset.showMenu = true;
    document.querySelector("#show-menu").addEventListener("click", ()=>{
      document.querySelector("body").dataset.showMenu = true;
    });
    document.querySelector("#hide-menu").addEventListener("click", ()=>{
      document.querySelector("body").dataset.showMenu = false;
    });
    
    document.querySelector("#data-url").value = CSV_URL;
      
    document.querySelector("#reload").addEventListener("click", ()=>{
      load()
    });
    

    
    document.querySelector("body").dataset.cardStyle = document.querySelector("#style").value;
    document.querySelector("#style").addEventListener("change", (event) => {
      document.querySelector("body").dataset.cardStyle = event.target.value;
    });
    
    document.querySelector("body").dataset.showInfos = document.querySelector("#show-infos").checked;
    document.querySelector("#show-infos").addEventListener("change", (event) => {
      document.querySelector("body").dataset.showInfos = event.target.checked;
    });
  
  
}

function createCards(data, container){

  container.innerHTML = '';
  let playingCardsIoList = [];
  data = data.filter((cardData)=>cardData['ID'].trim().length)
  data.forEach((cardData, i)=>{

    createCard(cardData, container);
    let playingCardsIoImageUrl = "https://leonlenclos.net/battle-fight/cartes/carte"+ String(i+1).padStart(3, "0") +".png";
    playingCardsIoList.push({"label": cardData['ID'] ,"image1":playingCardsIoImageUrl});
  })
  let playingCardsIoCsv = Papa.unparse(playingCardsIoList);
  let anchor = document.querySelector("#playing-cards-io-csv");
  anchor.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(playingCardsIoCsv));
  
}

function createWarning(container){
  let warningTemplate = document.querySelector("#warning-template");
  let clone = document.importNode(warningTemplate.content, true);
  container.appendChild(clone);
}

function updateWarning(container, cardId, msg){
  let cards = container.querySelectorAll('[data-id="'+cardId+'"]')
  cards.forEach((card)=>{
    card.dataset.warning += msg;
    card.querySelector(".warning").innerHTML += msg;
    createWarning(card);
  })
 
 
}



function createCard(data, container){
console.log(data, container);
  let cardTemplate = document.querySelector("#card-template");
  let clone = document.importNode(cardTemplate.content, true);
  
  clone.querySelector(".title").innerHTML = data['TITLE'].trim();
  let typeDisp = data['TYPE_DISP']
  if(!typeDisp || typeDisp.trim().length <= 0){
    typeDisp = data['TYPE'];
  }
  typeDisp = typeDisp.trim();
  clone.querySelector(".primary_types").innerHTML = typeDisp;
  imgSrc = '/cartes/illu/'+ data['ID'].trim() +'.jpg'
  let illu = clone.querySelector(".illu img");
  illu.src = imgSrc;

  clone.querySelector(".id").innerHTML = data['ID'].trim();
  
  clone.querySelector(".data-id").innerHTML = data['ID'];
  clone.querySelector(".data-title").innerHTML = data['TITLE'];
  clone.querySelector(".data-type").innerHTML = data['TYPE'];
  clone.querySelector(".data-comment").innerHTML = data['COMMENT'];
  clone.querySelector(".data-t").innerHTML = data['T'];
  clone.querySelector(".data-steps").innerHTML = data['STEPS'];
  clone.querySelector(".warning").innerHTML = '';
  
  clone.querySelector(".card").dataset.id = data['ID'];
  clone.querySelector(".card").dataset.title = data['TITLE'];
  clone.querySelector(".card").dataset.type = data['TYPE'];
  clone.querySelector(".card").dataset.warning = '';
  
  createRules(data, clone.querySelector(".rules"));
  for(let i=0; i<Number(data['QT']); i++){
    container.appendChild(clone.cloneNode(true));
  }
  

    illu.addEventListener('error', ()=>{ updateWarning(container, data['ID'], "Pas d'image. ")});
  
  if(data['STEPS'].trim().length != countRules(data)){
    updateWarning(container, data['ID'], "Le nombre d'étapes ne correspond pas. ");
  }


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
  let ruleTemplate = document.querySelector("#rule-template");
  const ruleClasses = {'C':'condition','E':'effet','I':'intervention','P':'permanente'}
  data['STEPS'].trim().split('').forEach((c,i)=>{
    let clone = document.importNode(ruleTemplate.content, true);
    clone.querySelector('.rule').classList.add(ruleClasses[c])
    clone.querySelector('.rule_text').innerHTML = data['STEP'+(i+1)].trim();
    container.appendChild(clone);
  });
}

*/
