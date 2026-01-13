---
title: Carte de visite
layout: print
description: Une carte qui n'est pas à collectionner
excerpt: Une carte de visite à distribuer aux joueur·se et aux pros. Pour rester en contact ou juste garder un souvenir.
width: 85mm
height: 55mm
bleed: 3mm
---

<div id="recto" class="page" markdown="1">

# BattleFight

*Jeu de cartes à collectionner stratégique, rythmé et positionnel.*

- ![Web](/assets/img/icon-web.png) battlefight.jejeu.org
- ![Mail](/assets/img/icon-mail.png) contact@jejeu.org
- ![Insta](/assets/img/icon-insta.png) @battlefight_tcg

<div data-qrcode-url="https://battlefight.jejeu.org" data-qrcode-color-light="#d4cab9"></div>

</div>


<div id="verso" class="page" markdown="1">

![Visuel](/img/visu-carte-visite.png)

</div>



<style>

#recto, #verso {
 position:relative;
 padding: 5mm; 
  overflow: hidden;
  color: black;
  
}

#recto {
  background: #d4cab9;

}

#recto h1 {
  margin:0;
  font-size:24pt;
  padding-bottom: .2em;
  border-bottom: 1pt solid #3c2c4d;

}

#recto em {
  display: block;
  text-align: center;
  font-size:7pt;
}

#recto ul {
  position: absolute;
  bottom: 5mm;
  left : 5mm;
  margin:0;
  
  font-size:11.5pt;

  list-style: none;
  padding: 0;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
    gap:.1em

}

#recto ul li {
  display: flex;
  align-items: center;
  gap:.7em
}

#recto ul img {
  display: block;
  max-width:1em;
  max-height:1em;
    width: auto;
  height: auto;
}


#recto div[data-qrcode-url] {
  position: absolute;
  bottom: 5mm;
  right : 5mm;
  transform-origin: bottom right;
  scale:50%;
}

#verso {
  background: #3c2c4d;
  display:flex;
 justify-content: center;
  align-items: center;
  padding: 0;
}

#verso img{
  width: 100%;

}



</style>
