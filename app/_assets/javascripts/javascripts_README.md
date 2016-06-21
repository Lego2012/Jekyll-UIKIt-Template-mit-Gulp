Die Dateien in den Ordnern `foot/libs` und `head/libs` werden automatisch von Gulp in der Reihenfolge ihrer Dateinamen zusammengefasst.

Sollen aber auch individuelle Dateien hinzugefügt werden, muss das im Hauptordner passieren und der Gulp-Task `scriptsFoot` oder `scriptsHead` muss entsprechend angepasst werden, damit die Dateien dann auch in der gewünschten Reihenfolge importiert werden.
