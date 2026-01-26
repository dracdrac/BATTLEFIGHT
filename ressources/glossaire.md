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

<h3>{% include step.html class='C' text='Distance 3' %}</h3>

Être à au moins 3 cases de l'adversaire.

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

<small> Tu peux choisir de ne pas te déplacer. </small>

<h3>{% include step.html class='E' text='Défausser X si possible' %}</h3>

Défausser X cartes de sa main. Si c'est impossible, défausser toute sa main.

<h3>{% include step.html class='E' text='Déstabiliser' %}</h3>

Cet effet permet de mettre dans la défausse n'importe quelle carte en jeu. Si la carte en question a *Stable X*, tu dois en plus te défausser de X cartes. 

<small>Cet effet est facultatif.</small>

<h3>{% include step.html class='E' text='Se Blesser X' %}</h3>

Se retirer X points de vie.

<h3>{% include step.html class='E' text='Bloquer X' %}</h3>

Récupérer jusqu'à X points de vie perdus depuis la fin de son dernier tour.

<h3>{% include step.html class='E' text='Rejouer' %}</h3>

Jouer une technique. <small>Si une carte a l'effet *Rejouer*, elle reste en jeu le temps de d'effectuer la technique. </small>

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

Diminue de X le nombre de cartes à Défausser pour enlever une carte *Stable* avec l'effet *Déstabiliser*. <small>Ça diminue de X autant les cartes adverses que tes propres cartes. </small>

<h3>{% include step.html class='P' text="S'Empêcher T" %}</h3>

Tu ne peux pas jouer le type T.

<h3>{% include step.html class='P' text="S'Empêcher Carte T" %}</h3>

Tu ne peux pas jouer de cartes du type T.

<h3>{% include step.html class='P' text="S'Empêcher Carte" %}</h3>

Tu ne peux pas jouer de cartes.

</section>
<section class="half-w" markdown="1">

## Stable


<h3>{% include step.html class='I' text='Stable X' %}</h3>

L'étape *Stable X* permet de garder la carte en jeu. Elle ne va donc pas dans la défausse à la fin du tour. Pour qu'une carte *Stable X* aille dans la défausse, il faut utiliser l'effet *Déstabiliser*, en défaussant également X cartes.

<h3>{% include step.html class='I' text='Stable' %}</h3>

L'étape *Stable* permet de garder la carte en jeu. Elle ne va donc pas dans la défausse à la fin du tour. Pour qu'une carte *Stable* aille dans la défausse, il faut utiliser l'effet *Déstabiliser*. 

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
