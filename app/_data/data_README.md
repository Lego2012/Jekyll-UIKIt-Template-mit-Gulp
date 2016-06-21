## Die Dateien im Ordner `_data`

Im Ordner `_data` befinden sich Dateien, die mit dem Liquid-Tag `{{ site.data.dateiname.tag }}` importiert werden können.

## Navigation: Die Datei `nav.yml`

Das ist die "klassische" Navigation. Eine YAML-Datei beinhaltet die Links, die in der Datei `header.html` mit einem Loop abgefragt werden. Soll eine neue Seite hinzugefügt werden, wird sie einfach in der YAML-Datei integriert.

### Navigation: Die moderne Art

Die "moderne" Navigation reagiert auf einen Eintrag im Front Matter der jeweiligen Seite. Das ist natürlich viel flexibler, da nicht jedesmal die `nav.yml` bearbeitet werden muss (was auch schnell vergessen werden kann).

**Das Front Matter für die Seite sieht dann so aus:**

~~~~~~~~~~~~~~~~~~~
---
layout: default
title: Home
navigation_weight: 1
---
...
~~~~~~~~~~~~~~~~~~~

Die Variable `navigation_weight:` bestimmt hier die Reihenfolge der Seite in der Navigation. Damit ist es also ganz einfach direkt bei der Seitenerstellung möglich, die Seite an der richtigen Stelle einzubinden. Auch Änderungen sind kein Problem. Seiten einfügen geht dann einfach, wenn man nicht mit `1` startet, sondern mit `5` und dann in 5er-Schritten weitermacht.

Der Loop, der auch gleichzeitig die Klasse `active` setzt, sieht für diese Methode dann so aus:

~~~~~~~~~~~~~~~~~~~
...
<nav class="main-nav">
  <ul>
    {% assign navigation_pages = site.html_pages | sort: 'navigation_weight' %}
    {% for p in navigation_pages %}
      {% if p.navigation_weight %}
        <li>
          <a href="{{ page.url }}" {% if p.url == page.url %}class="active"{% endif %}>
            {{ p.title }}
          </a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
</nav>
...
~~~~~~~~~~~~~~~~~~~

## Collection Öffnungszeiten

Die Datei `oeffnungszeiten.yml` ist ein Beispiel für eine Liste, die auf einer Seite mit Liquid-Tags abgefragt werden kann. Dies passiert in unserem Beispiel auf der Seite `_pages/authors.html`.

## Excel-Dateien als CSV-Dateien speichern und in YAML-Dateien konvertieren

Wenn eine Datei mit Excel als CSV-Datei gespeichert wurde, kann sie mit dem Konverter http://www.convertcsv.com/ sehr einfach in eine YAML-Datei konvertiert werden. Wenn diese dann im Ordner `_data` liegt, kann auch sie mit Liquid-Tags abgefragt werden. In unserem Beispiel heißt die Datei `unternehmen.yaml` und entstand mit Demodaten von https://www.mockaroo.com/

**Wichtiger Hinweis:** Die ursprüngliche CSV-Datei darf entweder nicht denselben Namen wie die YAML-Datei haben oder muss in einem anderen Ordner liegen! In unserem Beispiel haben wir die Datei `unternehmen_csv.csv` genannt.

Übrigens funktioniert diese Vorgehensweise auch mit JSON-Dateien. Allerdings ist der Export von Excel als CSV-Datei deutlich einfacher.
