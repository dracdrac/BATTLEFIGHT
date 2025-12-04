---
title: Cartes
permalink: /cartes/
---

* [l'ancienne page pour voir les cartes](cards-old.html)

<!--<pre>{{site.data.cartes-I-alpha | inspect}}</pre>-->

{% for i in (0..12) %}
{% assign n = i | prepend: '00' | slice: -2, 2 %}
{% include carte.html e="I" v="alpha" n=n t="ST" %}
{% endfor %}
