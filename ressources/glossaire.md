---
title: Glossaire
description: Définitions des mots clefs
excerpt: 
---

## Conditions

Une condition doit être remplie pour pouvoir passer à l'étape suivante

<small>Si la condition n'est pas remplie, défausser la carte</small>

<h3>{% include step.html class='C' text='Corps À Corps' %}</h3>

Être à une case de l'adversaire.

<h3>{% include step.html class='C' text='Distance' %}</h3>

Être à plus d'une cases de l'adversaire.

<h3>{% include step.html class='C' text='Distance X' %}</h3>

Être à au moins X cases de l'adversaire.

<h3>{% include step.html class='C' text='Défausser X' %}</h3>

Défausser X cartes de sa main.

<small>Si on n'a pas assez de carte, la condition n'est pas remplie mais il faut quand même défausser toute sa main</small>


## Effets

<h3>{% include step.html class='E' text='Blesser X' %}</h3>
Retirer X points de vie à l'adversaire.

<h3>{% include step.html class='E' text='Pousser X' %}</h3>

Déplacer l'adversaire de X cases dans la direction opposée à la votre.

<h3>{% include step.html class='E' text='Se déplacer X' %}</h3>

Se déplacer de X cases ou moins.

<h3>{% include step.html class='E' text='Défausser X si possible' %}</h3>

Défausser X cartes de sa main. Si c'est impossible, défausser toute sa main.

<h3>{% include step.html class='E' text='Intervenir' %}</h3>

Choisir une Pause et l'activer si vous voulez.

<h3>{% include step.html class='E' text='Se Blesser X' %}</h3>

Se retirer X points de vie.

<h3>{% include step.html class='E' text='Bloquer X' %}</h3>

Récupérer jusqu'à X points de vie perdus depuis votre dernier tour.

<h3>{% include step.html class='E' text='Rejouer' %}</h3>

Jouer une technique.

<h3>{% include step.html class='E' text='Piocher X' %}</h3>

Piocher X cartes.

## Effets permanents

<small>Les étapes permanentes restent effective tant que la carte est en jeu</small>

<h3>{% include step.html class='P' text='Force X' %}</h3>
Augmente de X vos Blesser et Se Blesser.

<h3>{% include step.html class='P' text='Protection X' %}</h3>

Diminue de X les Blesser de l'adversaire et vos Se Blesser.

<h3>{% include step.html class='P' text='Vitesse X' %}</h3>

Augmente de X vos Se Déplacer.

<h3>{% include step.html class='P' text='Charme X' %}</h3>

Diminue de X le nombre de cartes que vous devez défausser pour Intervenir sur les Pauses.

<h3>{% include step.html class='P' text='Empêcher X' %}</h3>

L'adversaire ne peut pas jouer le type X.

<h3>{% include step.html class='P' text="S'Empêcher X" %}</h3>

Vous ne pouvez pas jouer le type X.


## Pause

**Pause** permet de garder des cartes dans la zone d'activité. Pour pouvoir les retirer et qu'elles se retrouvent dans la défausse, il faut Intervenir dessus.

<h3>{% include step.html class='I' text='Pause X' %}</h3>

Il faut se défausser de X cartes en plus de l'effet **Intervenir**.

## Cibles

<h3>{% include step.html class='E' text='<sup>L'adversaire a</sup>S'Empêcher Déplacement' %}</h3>

Indique qu'un effet ou un effet permanent ne s'applique qu'a l'adversaire.

<h3>{% include step.html class='E' text='<sup>Tout le monde a</sup>Se déplacer 1' %}</h3>

Indique qu'un effet ou un effet permanent s'applique à tout le monde. 

<small>*Tout le monde a* s'applique en premier à la personne qui a joué la carte, puis aux adversaires.</small>

