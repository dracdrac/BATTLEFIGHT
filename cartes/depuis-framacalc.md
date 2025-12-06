---
title: Cartes depuis framacalc
description : Outil utilisé pour développer un set.
layout: cards
cards_edition: I
cards_version: alpha
---

{% assign edition = page.cards_edition %}
{% assign edition_obj = site.data.editions | find: 'id', edition | first %}
{% assign version = page.cards_version | default: edition_obj.current-version %}
{% assign version_obj = edition_obj.versions | find: 'id', version | first %}
{% assign illu_dir = version_obj.illu-dir %}

<script>
const EDITION = "{{edition}}";
const VERSION = "{{version}}";
const ILLU_DIR = "{{illu_dir}}";
</script>

<script src="/assets/js/framacalc-loader.js"></script>
<script src="/assets/js/papaparse.min.js"></script>

<form id="framacalc-loader">
<label for="framacalc-code">Code du framacalc</label><input id="framacalc-code" name="framacalc-code"/><br/>
<input type="checkbox" id="remember" name="remember" value="remember"/><label for="remember">Se souvenir du code</label><br/>
<button id="load-cards">Charger les cartes</button>
</form>
