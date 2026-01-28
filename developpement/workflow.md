---
title: Workflow
description: Étapes du développement des cartes
excerpt: Notes pour pas oublier comment on fait
---

## Frames

### Exporter les frames par lot

- Selectionner les frames à exporter.
- Exporter > Exporter en lot
- Format : .png
- PPP : 600
- Entrer le chemin

### Renommer les fichiers frames

Attention, écrase les versions précédentes 

    rename -f  's/.{2}(.*)/$1/' _#*

### Appliquer une texture

    for f in step*.png title*.png ; do \
    composite stone-texture-ii.jpg $f -compose Atop /tmp/texture.png ; \
    composite /tmp/texture.png $f -compose Overlay $f ; \
    done;

## Export

### Exporter les cartes dans un pdf

Procédure testée uniquement avec Firefox (140.6.0esr)

- Ouvrir Firefox
- Se rendre sur la page des cartes à imprimer (par exemple : [/cartes](https://battlefight.jejeu.org/cartes/)
- Cliquer sur imprimer
- Destination : Enregistrer au format PDF
- Échelle : 100%
- Page par feuille : 1 ou 9 selon le besoin
- Marges : aucunes
- Imprimer les en-têtes et pieds de page : NON
- Imprimer les arrière-plans : OUI
- Enregistrer

Le fichier ainsi créé est volontairement sur-dimensionné, c'est un hack pour maintenir une bonne qualité sur les images. Avant impression, il faudra le redimensionner

### Redimensionner le pdf

Il faut redimensionner manuellement le pdf. Suivre ce tableau pour connaître la dimension attendue :

| type de pdf                       | dimensions       |
|-----------------------------------|------------------|
| Cartes seules sans bord perdu     | 2.5 × 3.5 in     |
| Pages de 9 cartes sans bord perdu | 7.5 × 10.5 in    |

J'utilise PDF Studio pour redimensionner les pdf :

- Ouvrir le pdf dans PDF Studio
- Pages > Redimensionner pages
- Echelle : Ajuster à l'echelle
- Ok
- Sauver

### Convertir en images pour playingcards.io

Toujours dans PDF Studio

- Conversion > Images > Exporter pages vers PNG
- Base du nom du fichier : carte
- Résolution DPI : 150
- Ok

PlayingCards.io va chercher ces fichiers dans le répertoire [/cartes/playingcardsio/](/cartes/playingcardsio/)
