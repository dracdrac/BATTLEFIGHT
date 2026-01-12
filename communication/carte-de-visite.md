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

- ![Web](/assets/img/icon-web.png) site battlefight.jejeu.org
- ![Mail](/assets/img/icon-mail.png) mail contact@jejeu.org
- ![Insta](/assets/img/icon-insta.png) @battlefight_tcg

<div data-qrcode-url="https://battlefight.jejeu.org"></div>

![Insta](/assets/img/logo.png)

</div>


<div id="verso" class="page" markdown="1">

![Visuel](/img/visu2.png)

</div>



<style>
#recto, #verso {
 position:relative;
 padding: 5mm; 
  overflow: hidden;
  
}

#recto h1 {
  margin:0;
  font-size:24pt;
}

#recto em {
  display: block;
  font-size:7pt;
}

#recto ul {
  font-size:10.5pt;

  list-style: none;
  padding: 0;
  
}

#recto ul img {
  display: inline-block;
  width:1em;
}

#recto div[data-qrcode-url] {
  position: absolute;
  bottom: 5mm;
  right : 5mm;
  transform-origin: bottom right;
  scale:50%;
}

#recto>p>img {
  display: none;
  width:2em;
}

#verso {
  background: var(--dark);
}
#verso img{
  position: absolute;
  top:50%;
  left:0;
  translate: 0 -50%;  
  rotate: 90deg;
  scale: 70%
}

</style>
