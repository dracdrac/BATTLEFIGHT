# Cartes

* [l'ancienne page pour voir les cartes](cards-old.html)


Test :

{% include carte.html id="00" %}


<div class="flipcard-container">
    <span class="inner-card-backface">
      verso

      <span class="image">
      </span>
    </span>
  <span class="inner-card">
    {% include carte.html id="00" %}
    <span class="glare"></span>
  </span>
</div>
