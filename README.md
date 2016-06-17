# Confidea Template mit UIKit powered by Gulp und Sass

### Aktuell ist der Branch `develop`!

## Installation
Klone das Repository auf Deinen Computer und wechsle in den Projektordner. Starte:

```sh
$ ./install-dev.sh
```

Damit werden automatisch `bundle`, `bower install` und `npm install` gestartet.

## Einstellungen

Öffne `gulpFiles/config.js` und ändere die Einstellungen falls nötig. Eigentlich müssen nur die `rsync` Einstellungen angepasst werden. Ändere `destination` zum Pfad Deines Webservers und ändere `hostname` und `username`.

## Gulp.js starten

Folgende Tasks sind verfügbar:

```sh
$ gulp
$ gulp publish
$ gulp publish-test
$ gulp deploy
```

- `gulp` baut die Assets zusammen, erstellt die Jekyll Site und startet den Entwicklungsserver. Abschließend wird der `watch` Task gestartet.
- `gulp publish` kopiert und optimiert die Assets und startet ein Production-Build von Jekyll.
- `gulp publish-test` ist derselbe Prozess ohne die zeitaufwändige Bildoptimierung
- `gulp deploy` transferiert die generierten Dateien mit Rsync auf den Server.

## Rake starten

In dem `Rakefile.rb` ist ein Task enthalten, um die Suchmaschinen von Änderungen an der Webseite zu informieren. Dieser Task wird so aufgerufen:

```sh
$ rake notify
```

Die Platzhalter `my-website.com` müssen natürlich durch die eigene Domain ersetzt werden.
