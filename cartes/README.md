---
title: Cartes
permalink: /cartes/
layout: cards
---

* [l'ancienne page pour voir les cartes](cards-old.html)

{% for i in (0..100) %}
{% assign n = i | prepend: '00' | slice: -2, 2 %}
{% include card.html e="I" v="alpha" n=n t="ST" %}
{% endfor %}
