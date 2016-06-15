# Wie kann man z. B. Excel-Daten einfach in das YAML- oder JSON-Format bringen?

Zunächst gibt es einen Datengenerator (https://www.mockaroo.com/), mit dem kostenlos bis zu 1.000 Testdatensätze erstellt werden können. Das Tool ist frei konfigurierbar und kann somit sehr realitätsnah eingesetzt werden.

Beispiel: Ein Gartenbaubetrieb hat ständig ca. 500 Pflanzen, Sträucher, Gräser und Bäume im Angebot. Die verwaltet er in einer Excel-Tabelle. Es gibt Spalten wie Name, Art, Größe, Preis, Standort, Bewässerung usw. Diese Daten werden mit Excel zu einer CSV-Datei exportiert und können mit dem CSV To YAML Converter (http://www.convertcsv.com/csv-to-yaml.htm) ganz einfach in eine YAML-Datei umgesetzt werden, die dann von Jekyll als Collection weiterverarbeitet wird.

Dazu ist auch das Beispiel von Katy Decorah sehr gut geeignet: http://jekyll.tips/jekyll-casts/output-json/ Sie zeigt auf, wie umfangreiche Datensätze, die nicht aus einer Datenbank kommen, mit Jekyll zu einer interaktiven Landkarte werden. Dazu gibt es auch ein Video: https://www.youtube.com/watch?v=XTAFSDqQMko
