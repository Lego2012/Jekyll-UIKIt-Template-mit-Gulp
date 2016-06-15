---
layout: post
headline: "Relaunch mit Domainumzug"
title:  "Checkliste: Die 20 wichtigsten Schritte beim Relaunch mit Domainumzug"
categories: jekyll update
meta:
---

*Was sollten Webseiten-Betreiber beim Relaunch beachten, wenn damit ein Domainumzug verbunden ist? Wir zeigen Ihnen, was wichtig ist und geben Ihnen die t3n-Checkliste mit an die Hand.*

## Kein Relaunch ohne ein dem Livesystem entsprechendes Testsystem

Ein Relaunch für eine Webseite kann viele Gründe haben. Die Sehgewohnheiten im Netz verändern sich in rasender Geschwindigkeit und in die Jahre gekommene Projekte können unter Umständen nicht mehr dem Zeitgeist entsprechen. Auch die schnelle Entwicklung im Bereich mobiler Geräte könnte zu den Gründen für einen Neustart zählen. Aber auch unternehmensinterne Gründe erfordern manchmal einen Relaunch und manchmal auch einen Domainumzug.

Einleitend bleibt festzuhalten, dass Domainumzüge generell schlecht sind.

<!--break-->

Im Folgenden erst einmal Grundsätzliches und einige Punkte, die man im Rahmen eines Domainumzugs beachten sollte. Für einen Relaunch ist selbst bei kleinen Projekten die Planung das A und O. Eine Stunde mehr Planung erspart viele Stunden Ärger bei der Beseitigung von Fehlern. Daher sollten für jeden Relaunch die folgenden Grundsätze gelten:

- Vorher festlegen, welche Details beim Relaunch verändert werden sollen und darüber hinaus nur unbedingt notwendige Zusatzwünsche implementieren.
- Die interne Testphase in einem für alle zugänglichen System dokumentieren (zum Beispiel Backpack , Wiki oder Bugtracker).
- Kein Relaunch ohne ein dem Livesystem entsprechendes Testsystem.
- Migration/Relaunch vorher mit dem Testsystem durchführen und dabei akribisch die Schritte dokumentieren, um später einen Schlachtplan für die Live-Migration zu haben.
- Fehler, die bei der Testmigration auftreten, mit dem Team diskutieren, beheben, erneut testen und anschließend im Migrationsplan dokumentieren.
- Die Website zum Zeitpunkt der Migration vom Netz nehmen um Dateninkonsistenz zu vermeiden.
- Switch- beziehungsweise Downtime (zum Zeitpunkt der Migration) möglichst nachts legen (damit es wenige User bemerken). Falls eine Umstellung tagsüber unvermeidbar ist, die Downtime als PR- oder Marketing-Event nutzen und eine bestimmte Aktion oder Message während der Downtime veröffentlichen.
- Nach dem Relaunch die Error-Logs im Blick behalten und ordentlich Zeit zum Nachbessern einplanen.

## Technisches und Onpage

Ein Relaunch geht oft mit einer komplett überarbeiteten Seite, neuem Markup (HTML) und manchmal auch einem neuen Content-Management-System einher. Daher lohnt es sich, noch mal einen genauen Blick auf die Struktur und Inhalte der Webseite zu werfen.

- Die Struktur der Webseite sollte möglichst identisch mit der vor dem Relaunch sein.
- Es lässt sich nicht immer vermeiden, die Struktur zu überarbeiten. Besonders, wenn vor dem Relaunch (beispielsweise bei einem Kundenprojekt) keine oder nur eine schlechte Struktur vorhanden war. In diesem Fall sollten 301-Weiterleitungen auf die entsprechenden Unterseiten in der neuen Struktur vorbereitet werden. Hierfür lohnt es sich einen Weiterleitungsplan anzulegen um keinen Traffic einzubüßen.
- Für eine optimale Performance der Webseite sollte das neue System mit Tools wie Google Page Speed Insights  auf Optimierungsbedarf überprüft und gegebenenfalls nachgebessert werden.
- Vor dem Start sollte die Webseite noch mal auf W3C-Compliance überprüft werden. Bei einer geringen Seitenanzahl kann das manuell mit dem W3C-Validator geprüft werden. Für größere Seiten ist der Griff zur W3C-Validator-Suite eine Option.
- Die Tests erfolgen in der Regel schon während der Entwicklung der neuen Webseite. Ein zweiter Blick in Hinsicht auf Cross-Browser-Kompatibilität und die Unterstützung mobiler Geräte lohnt sich fast immer. Hierfür eignen sich diese Cross-Browser-Testing-Tools.
- Wenn der Projektumfang es zulässt, ist eine Überprüfung der Inhalte und Metadaten (Title, Description-, Alt-Tags und so weiter) sinnvoll.

## Die t3n-Domainumzugs-Checkliste

Bei einem Domainumzug gibt es noch zahlreiche weitere Aspekte zu beachten. Viele Dienste, die im Zusammenhang mit euerer Seite stehen, verlassen sich auf eine damit verknüpfte URL und funktionieren beim Aufruf einer neuen Domain gegebenenfalls eingeschränkt oder gar nicht mehr. Die folgende Liste soll dabei helfen, die Probleme im Zusammenhang mit einem Domain-Wechsel zu minimieren.

1. Neue Domain registrieren.
2. Neue Domain in den Google Webmaster Tools  verifizieren und nach dem Launch Sitemaps dort einreichen.
3. Trackingsysteme wie Piwik, Mint oder Google Analytis auf die neue Domain umstellen.
4. Neue domainbezogene JavaScript-Codes für AdSense, AdScale und weitere Partner- oder Werbeprogramme generieren.
5. Zonen und Codes des eigenen AdServers auf die neue Domain umstellen.
6. Spezielle CMS-bezogene Extensions oder Plugins auf die Domain umstellen.
7. Alle internen Links auf eigene Elemente und Inhalte nicht nur per Redirect umleiten, sondern komplett auf die neue Domainstruktur umstellen.
8. Alle Links der alten Domain mit einer 301-Weiterleitung auf die neue Domain umleiten.
9. Alle automatisiert verschickten Mails auf die neue Domain umstellen (Server-Stats, Bestell-bestätigungen, Newsletter und ähnliches).
10. Alle firmeninternen E-Mail-Konten und E-Mail-Footer auf die neue Domain umstellen.
11. Feedburner-Konto auf die neue Domain umstellen.
12. Domainumstellung bei Google News  mindestens zwei Wochen vorher anmelden!
13. Neue News Sitemaps  für Google News erstellen.
14. Alle in der Firma existieren Dokumente wie Stempel, Visitenkarten, Mediaten, Briefpapier etc. auf die neue Domain umstellen.
15. Liste mit Backlinks erstellen. Danach Blogger, Webmaster, Partner, Redakteure und Freunde  darum bitten, die Backlinks auf die neue Domain umzustellen.
16. Backlinks aus Wikipedia und anderen Wikis auf die neue Domain umstellen.
17. Backlinks aus Profilen aller Mitarbeiter auf Web-2.0-Diensten wie Twitter, Xing, Facebook, MyOnID, Gravatar, Mister Wong, Mento, Flickr, Digg usw. umstellen.
18. Alte Domain mindestens sechs Monate behalten und weiter redirecten.
19. Broken Links suchen und fixen mit Tools wie z.B. Xenu  oder dem Broken Link Checker .
20. 404 und weitere Crawling-Fehler täglich über Google Webmaster Zentrale überprüfen und so schnell wie möglich fixen.

## Nach dem Relaunch ist vor dem Relaunch

Es ist unwahrscheinlich, dass man wirklich alle Stolpersteine vor dem Relaunch beseitigen kann. Für die Zeit nach dem Relaunch gilt es also, folgende Aspekte zu berücksichtigen:

- Genügend Zeit für die Korrektur von später auftretenden Fehlern einplanen.
- 404 und weitere Crawling-Fehler täglich über Google Webmaster Zentrale überprüfen und so schnell wie möglich fixen.
- Das wichtigste: einen kühlen Kopf bewahren und Fehler strukturiert und durchdacht angehen, um keine neuen zu produzieren.

Quelle: [t3n](http://t3n.de/news/checkliste-20-wichtigsten-schritte-beim-relaunch-253613/)
