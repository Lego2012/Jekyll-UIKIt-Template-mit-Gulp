Das Standardlayout ist `default`.

Die Beiträge verwenden das Layout `post`, das wiederum das Layout `default` verwendet.

Die Seiten verwenden das Layout `page`, das wiederum das Layout `default` verwendet.

Die Autorenseiten verwenden das Layout `authors`, das wiederum das Layout `page` verwendet und dieses dann das Layout `default`.

Die `headline` und die `subline` werden durch das Layout `page` gesteuert. Hier ist ein If-Statement, das abfragt, ob eine `headline` vorhanden ist. Falls ja, wird der Code ausgeführt. Eine `subline` wird ebenfalls ausgegeben, falls vorhanden. Existiert nur die `subline` und keine `headline` wird nichts ausgegeben.
