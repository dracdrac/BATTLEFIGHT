---
title: Cartes
permalink: /cartes/
---

* [l'ancienne page pour voir les cartes](cards-old.html)

{% for i in (0..99) %}
{% assign n = i | prepend: '00' | slice: -2, 2 %}
{% include carte.html e="I" v="ALPHA" n=n t="ST" %}
{% endfor %}
