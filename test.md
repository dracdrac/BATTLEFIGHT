---
permalink: /test
title: test
excerpt: j'uttilise cette page pour tester des fonctionnalités du site
---


Salut cette page n'est pas sensée être visitée elle est juste utilisée pour tester des trucs.

Test include :

{% include card.html e="BF01" v="beta" n="59" %}

{% include card-back.html %}

Test 3d :



<div class="flipcard-container"><span class="inner-card-backface">{% include card-back.html %}</span><span class="inner-card">{% include card.html e="BF01" v="beta" n="59" %}<span class="glare"></span></span></div>
