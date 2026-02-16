---
title: Apprendre à jouer
description: Résumé des règles pour une prise en main rapide
excerpt: Dans BattleFight, deux personnes s'affrontent en jouant chacune leur tour une technique de combat, jusqu'à ce que l'une des deux tombe à court de points de vie ou soit poussée hors du plateau.
---



## Préparation

### Le deck

Dans BattleFight, chaque personne joue avec son propre deck.

Ton deck représente les techniques de combat que ton personnage peut utiliser. 

C'est un paquet de 20 cartes contenant 4 cartes pour chacun des 5 types.


### Créer son deck

Pour une première partie on te conseille de jouer avec des **decks aléatoires** :

Trie les cartes par type et crée deux decks en piochant 4 cartes par type pour chacun des deux decks.

<!-- ![Le Deck](/img/visu-deck.png) -->

<img width="25%" src="/img/visu-deck-simple.png">

### Mise en place

Les decks sont mélangés et posés face cachée pour former les pioches.

Pendant la partie, chaque personne dispose de sa propre pioche et de sa propre défausse.

Deux pions sont placés dans deux coins opposés du [plateau](https://battlefight.jejeu.org/ressources/plateau).

Lorsque la partie commence, on n'a aucune carte en main.

<img width="40%" src="/img/visu-table.png">


1. Le plateau
2. Ta pioche (toujours face cachée)
3. Ta zone d'activité, où tu joues tes cartes
4. Ta défausse (toujours face visible)
5. Le compte de tes points de vie

## Que le combat commence !

Tout le monde commence avec [20 points de vie](https://jejeu.org/outil.php?id=4&prereglage=pv).

Si ton adversaire tombe à zéro point de vie ou que tu le pousses hors du plateau, tu gagnes la partie.

### Jouer son tour

La partie se déroule au tour par tour. 

À ton tour tu joues une seule technique. Ça peut être une carte que tu joues depuis ta main ou une technique de base.

Une fois que tu as joué une technique c'est au tour de l'adversaire.

<!-- ![Jouer une technique](/img/visu-jouer-une-tech.png) -->

<img width="40%" src="/img/visu-jouer-une-tech.png">

L'usage est de toujours annoncer à voix haute la technique que tu joues. 

### Les techniques de base

Les techniques de base sont 5 techniques que tout le monde peut utiliser.

Ce sont des techniques de combat, au même titre que les cartes de ton deck, mais elles sont toujours accessibles pour tout le monde (pas besoin de les piocher).

Il en existe 5, une pour chacun des 5 types :

{% include basic-tech-card.html %}

<!-- <div class="basic-tech"></div> -->

La technique de base que tu joueras le plus souvent c'est la **Concentration de base**, elle consiste à piocher une carte. C'est généralement une bonne idée de commencer la partie par jouer cette technique trois-quatre tours de suite pour se faire une petite main.

L'**Attaque de base** permet de faire perdre un point de vie à l'adversaire, à condition d'être au corps à corps (sur une case adjacente à la sienne).

La **Défense de base** permet de Bloquer 1, c'est à dire de récupérer un point de vie perdu lors du tour précédent.

Le **Déplacement de base** permet de se déplacer d'une case sur le plateau.

La **Rhétorique de base** permet de Déstabiliser des cartes (voir **Déstabiliser**, plus bas)


### Lire les cartes

Une carte a toujours un titre, un type et une liste d'étapes.

Lorsque tu joues une carte, tu exécutes chaque étape dans l'ordre. Quand tu as fini d'exécuter la dernière étape tu mets la carte face visible dans ta défausse.

Les étapes sont écrites avec des mots-clés. La plupart des mots-clés sont plutôt transparents, en cas de doute, tous les mots-clés sont expliqués dans le [glossaire](glossaire).

<!-- ![Lecture d'une carte](/img/visu-lecture-carte.png) -->

<img width="30%" src="/img/visu-lecture-carte.png">

1. Le titre
2. Le type
3. Les étapes
4. [Identification de la carte](identification-cartes.md) 

#### Conditions

Certaines étapes sont des conditions. C'est le cas de **Défausser**, **Distance** et **Corps à Corps**.

Si dans la lecture d'une carte tu tombes sur une condition qui n'est pas respectée, la carte est directement placée dans la défausse. Les étapes qui étaient marquées après cette condition ne sont pas exécutées.


{% include card-with-caption.html
e="BF01" n="09" 
caption="Les deux premières étapes de la carte *Décharge* sont des conditions, la première demande d'être au corps à corps avec l'adversaire, la deuxième demande de défausser une carte de ta main. Si tu n'es pas au corps à corps ou que tu n'as pas assez de carte en main pour défausser, cette carte se terminera avant d'avoir pu réaliser la dernière étape (infliger 4 blessures à l'adversaire)."
%}

#### Stable

Certaines cartes se terminent par l'étape **Stable**.

L'étape **Stable** indique que la carte est stabilisée sur la table, elle reste en jeu (et n'est pas défaussée) même quand le tour de la personne qui l'a posée se termine.


#### Permanents

Certaines étapes sont permanentes. C'est le cas de **Force**, **Vitesse**, **S'empêcher**, etc.

Ces étapes ont un effet permanent qui reste actif tant que la carte est en jeu.

Les cartes avec des effets permanents finissent généralement par **Stable**.

{% include card-with-caption.html
e="BF01" n="51" 
caption="La deuxième étape de *Célérité* est **Stable**. Lorsque tu l'exécutes, la carte devient Stable : ton tour se termine, mais *Célérité* reste en jeu. Et tant qu'elle sera en jeu, les effets permanents marqués au dessus de **Stable** seront effectifs, tu auras donc **Vitesse 1** ce qui te permettra de te déplacer plus vite."
%}


#### Déstabiliser

Lorsque tu veux te débarrasser d'une carte **stable** (que ce soit ta carte ou celle de l'adversaire), il faut la **Déstabiliser**.

À ton tour tu peux, par exemple jouer la **Rhétorique de base** qui permet de **Déstabiliser**.

Quand tu déstabilises, choisis une carte en jeu qui a Stable et jette-la dans la défausse de son propriétaire.

Si le **Stable** de la carte que tu souhaites déstabiliser est suivie d'un nombre, il te faudra "payer" en défaussant ce nombre de cartes de ta main. 

### Finir sa pioche

<!-- ![Pioche vide](/img/visu-pioche-vide.png) -->

<img width="30%" src="/img/visu-pioche-vide.png">

Si tu dois piocher alors qu'il n'y a plus de cartes dans ta pioche, tu dois d'abord :
- diviser tes points de vie par 2, arrondis à l'unité supérieure
- mélanger ta défausse pour qu'elle devienne ta nouvelle pioche


## Détails de règles

À ce stade de l'explication, tu peux déjà tenter de lancer une partie si tu veux apprendre en jouant. Si tu souhaites déjà comprendre plus de notions, tu peux lire la suite de ce doc. 

### L'adversaire a / tout le monde a

Parfois une étape est précédée d'un texte du type **L'adversaire a**, L'étape en question doit alors être exécutée du point de vue de l'adversaire.

Si le texte qui précède l'étape est **Tout le monde a**, Tout le monde exécute l'étape à commencer par toi.


### Dégâts

L'effet **Blesser** permet de retirer des points de vie à ton adversaire. S'il y a des cartes en jeu qui te donnent de la **Force**, ça augmente le nombre de dégat. S'il y a des cartes en jeu qui donnent de la **Protection** à ton adversaire, ça diminue le nombre de dégâts.

L'effet **Se Blesser** te retire des points de vie à toi. Dans le cas d'un Se blesser c'est ta **Force** et ta **Protection** qui doivent être pris en compte.

L'effet **Bloquer** permet de récupérer un certain nombre de points de vie perdus. Attention :

- Tu ne peux regagner que les points de vie perdus depuis ton dernier tour
- Tu ne peux pas regagner les points de vie perdus par la division de tes points de vie causée par le remélange de la pioche.
- Si tu n'as pas perdu de points de vie au prochain tour, l'étape **Bloquer** n'a pas d'effet.

### Position, distance et déplacement

L'effet **Se déplacer** Permet de te déplacer d'un certain nombre de cases. S'il y a des cartes en jeu qui te donnent de la **Vitesse** ça augmente ce nombre.

Si tu le souhaites, tu peux te déplacer de moins de cases que le nombre indiqué. Tu peux même choisir de ne pas te déplacer.

La condition **Corps à Corps** te demande d'être adjacent à l'adversaire.

La condition **Distance** te demande d'être à une certaine distance minimum de ton adversaire. Par exemple, **Distance 3** te demande d'être à 3 cases de ton adversaire ou plus.

<!-- ![Pioche vide](/img/visu-distances.png) -->

<img width="30%" src="/img/visu-distances.png">

### S'Empêcher

L'effet permanent **S'Empêcher** fait que tu ne peux plus jouer un certain type de technique.

Par exemple, s'il y a une carte en jeu qui te donne **S'Empêcher Déplacement** tu ne peux pas jouer de cartes dont le type est **Déplacement** et tu ne peux pas non plus jouer la technique de base **Déplacement de base**. Ça ne signifie pas que tu ne peux pas te déplacer du tout, tu pourra par exemple sans problème jouer une carte de type Attaque qui aurait une étape indiquant **Se déplacer**.

Les cartes stables que tu as jouées précédemment restent actives, même si elles sont du type empêché.

Il existe des variantes de cet effet permanent. Par exemple, **S'Empêcher Carte Rhétorique**, t'empêche de jouer les cartes de type rhétorique mais ne t'empêche pas de jouer la technique de base **Rhétorique de base**. Autre exemple, **S'Empêcher Carte** t'empêche de jouer des cartes, tu ne peux jouer que les techniques de base.


### Défausser

Il existe deux mots-clés bien différents qui se ressemblent un peu :

**Défausser** est une condition. Elle te demande de défausser un certain nombre de cartes (depuis ta main vers ta défausse). C'est une condition donc si tu n'as pas assez de carte en main, tu ne peux pas exécuter la suite des étapes et la carte elle-même part à la défausse

**Si Possible Défausser** est un effet. Comme **Défausser**, ça te demande de défausser des cartes, mais ce n'est pas une condition donc si tu n'as pas assez de cartes en main, tu défausses seulement ce que tu peux et tu passes à la suite quand même. 

### Charme

L'effet permanent **Charme** réduit le nombre de carte qu'il faut défausser pour **Déstabiliser**.

Pour rappel, quand tu déstabilises une carte **Stable**. Si le **Stable** en question est suivi d'un nombre, tu dois défausser autant de cartes (depuis ta main vers ta défausse). Tes points de **Charme** réduisent ce nombre.
