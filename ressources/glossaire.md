---
title: Glossaire
description: Définitions des mots clefs
excerpt: 
---

<section class="half-w" markdown="1"> <!--Cet élément permet d'afficher le contenu sur deux colonnes -->

## Conditions

Une condition doit être remplie pour pouvoir passer à l'étape suivante.

<small>Si la condition n'est pas remplie, défausses la carte.</small>

<h3>{% include step.html class='C' text='Corps À Corps' %}</h3>

Être à une case de l'adversaire.

<h3>{% include step.html class='C' text='Distance' %}</h3>

Être à plus d'une cases de l'adversaire.

<h3>{% include step.html class='C' text='Distance X' %}</h3>

Être à au moins X cases de l'adversaire.

<h3>{% include step.html class='C' text='Défausser X' %}</h3>

Défausser X cartes de sa main.

<small>Si tu n'as pas assez de carte, la condition n'est pas remplie mais il faut quand même que tu défausses toute ta main.</small>

</section>
<section class="half-w" markdown="1">

## Effets

<h3>{% include step.html class='E' text='Blesser X' %}</h3>
Retirer X points de vie à l'adversaire.

<h3>{% include step.html class='E' text='Pousser X' %}</h3>

Déplacer l'adversaire de X cases de manière à l'éloigner.

<h3>{% include step.html class='E' text='Se déplacer X' %}</h3>

Se déplacer de X cases ou moins.

<h3>{% include step.html class='E' text='Défausser X si possible' %}</h3>

Défausser X cartes de sa main. Si c'est impossible, défausser toute sa main.

<h3>{% include step.html class='E' text='Déstabiliser' %}</h3>

Choisir une carte *Stable* et Déstabiliser dessus. 

<small>Cet effet est facultatif.</small>

<h3>{% include step.html class='E' text='Se Blesser X' %}</h3>

Se retirer X points de vie.

<h3>{% include step.html class='E' text='Bloquer X' %}</h3>

Récupérer jusqu'à X points de vie perdus depuis la fin de son dernier tour.

<h3>{% include step.html class='E' text='Rejouer' %}</h3>

Jouer une technique.

<h3>{% include step.html class='E' text='Piocher X' %}</h3>

Piocher X cartes.

</section>
<section class="half-w" markdown="1">

## Effets permanents

<small>Les étapes permanentes restent effectives tant que la carte est en jeu.</small>

<h3>{% include step.html class='P' text='Force X' %}</h3>
Augmente de X tes Blesser et Se Blesser.

<h3>{% include step.html class='P' text='Protection X' %}</h3>

Diminue de X les Blesser de l'adversaire et tes Se Blesser.

<h3>{% include step.html class='P' text='Vitesse X' %}</h3>

Augmente de X tes Se Déplacer.

<h3>{% include step.html class='P' text='Charme X' %}</h3>

Diminue la valeur de Stable de X.


<h3>{% include step.html class='P' text="S'Empêcher X" %}</h3>

Tu ne peux pas jouer le type X.

<h3>{% include step.html class='P' text="S'Empêcher Carte X" %}</h3>

Tu ne peux pas jouer de cartes du type X.

<h3>{% include step.html class='P' text="S'Empêcher Carte" %}</h3>

Tu ne peux pas jouer de cartes.

</section>
<section class="half-w" markdown="1">

## Stable


<h3>{% include step.html class='I' text='Stable X' %}</h3>

La carte est Stable. Une carte Stable reste dans la zone d'activité. Elle peut en être retirée grâce à l'effet Déstabiliser en défaussant X cartes.

<h3>{% include step.html class='I' text='Stable' %}</h3>

La carte est Stable. Une carte Stable reste dans la zone d'activité. Elle peut en être retirée grâce à l'effet Déstabiliser (sans défausser de cartes).


</section>
<section class="half-w" markdown="1">

## Cibles

Des cadres peuvent se trouver au dessus d'étapes pour indiquer à qui elles s'appliquent.

<h3>{% include step.html class='E' text="<sup>L'adversaire a</sup>X" %}</h3>

Indique que l'effet X s'applique à l'adversaire.

<h3>{% include step.html class='E' text='<sup>Tout le monde a</sup>X' %}</h3>

Indique que l'effet X s'applique à tout le monde. 

<small>L'effet s'applique en premier à la personne qui a joué la carte.</small>

</section>
