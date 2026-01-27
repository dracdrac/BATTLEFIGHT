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

