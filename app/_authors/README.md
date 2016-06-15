# Die Collection `_authors`

Die Autorenseiten verwenden das Layout `authors`, das wiederum das Layout `page` verwendet und dieses dann das Layout `default`.

Die `headline` und die `subline` werden durch das Layout `page` gesteuert. Hier ist ein If-Statement, das abfragt, ob eine `headline` vorhanden ist. Falls ja, wird der Code ausgeführt. Eine `subline` wird ebenfalls ausgegeben, falls vorhanden. Existiert nur die `subline` und keine `headline` wird nichts ausgegeben.

In der `_config.yml` ist die Collection vermerkt und so werden für jeden Autor individuelle Seiten generiert, die auf der `/app/_pages/authors.html` zusammengefasst werden.
