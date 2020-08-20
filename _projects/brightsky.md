---
layout: project
title:  "Bright Sky"
image: /assets/images/project_images/Bright_Sky/brightsky-demo.png
authors:
    - author: Jakob de Maeyer
      link:
brief: "Wir machen Wetterdaten zugänglicher."
summary: "Im öffentlichen Auftrag generiert und veröffentlicht der Deutsche Wetterdienst Wetteraufzeichnungen und -vorhersagen für Deutschland und Europa. Bright Sky ist eine öffentliche und entgeltfreie API, die versucht diese Daten maximal einfach nutzbar zu machen."
---

# Bright Sky - zur Nutzbarmachung öffentlicher Wetterdaten

Wetter ist allgegenwärtig -- es beeinflusst, welche Kleidung wir morgens aus dem Schrank ziehen, welches Tempolimit auf dynamisch geregelten Autobahnabschnitten gilt und wie leicht Viren übertragen werden. Wetteraufzeichnungen liefern die Datengrundlage für Fragen zu vielen wissenschaftlichen, wirtschaftlichen und zivilen Themen: von Freibaderlösen über Erntevorhersagen bis zum Klimawandel. Wegen dieser Relevanz für das öffentliche Leben finanziert die Bundesrepublik Deutschland für [fast 400 Millionen Euro im Jahr](https://www.dwd.de/SharedDocs/downloads/DE/allgemein/zahlen_und_fakten.pdf) den Deutschen Wetterdienst (DWD), welcher eine Vielzahl wetter- und klimabezogener Dienste anbietet. Neben der Bereitstellung von Wetterwarnungen und der Erstellung von Wettervorhersagen gehört dazu auch der Betrieb von knapp 200 hauptamtlichen Wetterstationen in Deutschland sowie das Sammeln von weiteren Aufzeichnungen von etwa 1800 ehrenamtlich betreuten Wetterstationen.

![Meteorologisches Observatorium des DWD in Hohenpeissenberg](/assets/images/project_images/Bright_Sky/dwd_station-opt.jpg)
_Meteorologisches Observatorium des DWD in Hohenpeissenberg. Quelle: DWD_

Eine 2017 in Kraft getretene umfangreiche Reform des Gesetzes über den Deutschen Wetterdienst berechtigte den DWD -- endlich und gegen großen Aufschrei privater Wetterdienstleister -- seine öffentlich finanzierten Aufzeichnungen und andere Leistungen entgeltfrei der Öffentlichkeit bereitzustellen. Seitdem wurde das Angebot an Wetterdaten auf dem [DWD Open Data Server](https://www.dwd.de/DE/leistungen/opendata/opendata.html) kontinuiertlich verbessert und erweitert.

## Der Kampf zwischen Aufzeichnung und Auswertung

Doch das Format, in dem Wetteraufzeichnungen gespeichert -- und veröffentlicht -- werden, ist naturgemäß bestimmt durch die Art, wie diese erhoben werden: als Zeitreihen einzelner Messinstrumente. So findet sich auf dem Open-Data-Server beispielsweise eine [einzelne Datei](https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/hourly/precipitation/historical/stundenwerte_RR_01766_19950901_20191231_hist.zip) mit allen Niederschlagsaufzeichnungen der Station 1766 (Münster/Osnabrück) von 1995 bis 2019. Dem gegenüber sind typische Nutzer\*innen von Wetterdaten -- z. B. der Betreiber einer Wetterapp, oder die Wissenschaftlerin, welche Ernteausfälle untersucht -- weder an den Details des DWD-Stationsnetzes (_welche Station liegt wo?, welche Station misst welche Parameter?_) noch an lediglich einzelnen Messinstrumenten interessiert; ihre Frage hat die Form „wie waren (oder _werden_) Temperatur, Niederschlag, Wind und Wolkendichte an den Koordinaten XY zum Zeitpunkt Z?“

![Datenstruktur der DWD-Rohdaten vs. Datenstruktur des kommerziellen Anbieters Dark Sky](/assets/images/project_images/Bright_Sky/dwd_vs_darksky.png)
_Datenstruktur der DWD-Rohdaten vs. Datenstruktur des kommerziellen Anbieters Dark Sky._

Zur Nutzung der DWD-Aufzeichnungen ist daher ein erheblicher Programmieraufwand -- zur Zusammenführung der vielen verschiedenen Wetterparameter und zum Parsing der Vielzahl unterschiedlicher Datenformate auf dem DWD-Server -- notwendig. Die Konsequenz ist häufig die Aufgabe des Vorhabens oder das Ausweichen auf kommerzielle Anbieter, welche Wetterdaten im gewünschten Format bereitstellen. Ziel von [Bright Sky](https://brightsky.dev/) ist es, diesen Spalt zwischen Format der DWD-Daten und Nutzer\*innenansprüchen zu überbrücken und auf Basis der öffentlichen Wetteraufzeichnungen eine kostenfreie Schnittstelle bereitzustellen, welche in der Einfachheit ihrer Nutzung den kommerziellen Anbietern ebenbürtig ist.

## Auftritt: Bright Sky

Die Aufbereitung der DWD-Wetterdaten lässt sich in zwei große Teile aufteilen:

* Einlesen, Verarbeiten und Zusammenführen der Rohdaten vom DWD Open Data Server in eine eigene Datenbankstruktur und
* Bereitstellen der zusammengeführten Daten durch eine leicht zu bedienende Schnittstelle.

Der DWD veröffentlicht seine Wetter- und Klimadaten über einen [simplen Dateiserver](https://opendata.dwd.de/). Dort werden historische Wetteraufzeichnungen einmal täglich, Zusammenfassungen der aktuellen Wetterlage und Wettervorhersagen stündlich bzw. für [SYNOP-Meldungen](https://de.wikipedia.org/wiki/SYNOP) im Abstand von wenigen Minuten aktualisiert. Bright Sky's Polling-Komponente überprüft minütlich anhand des Dateiindexes, ob neue bzw. geänderte Rohdaten vorliegen. Aktualisierte Dateien werden aus ihren diversen CSV-, XML- und binären Formaten geparsed, in ein konsistentes Einheitensystem übertragen und schließlich anhand ihrer Quelle und des Messzeitpunkts in einer PostgreSQL-Datenbank zusammengeführt. Die meisten Wetterdaten des DWD sind so typischerweise innerhalb von fünf Minuten nach ihrer Veröffentlichung auch in Bright Sky verfügbar.

Die mit aufbereiteten Wetterdaten befüllte Datenbank ist der Kern von Bright Sky. Sie entspricht einer (unvollständigen) alternativ organisierten Repräsentation der Daten auf dem DWD-Server: nicht sortiert als Messreihen einzelner Geräte, sondern als Zeitreihen der Gesamtwetterlage an den Wetterstationen, aus der sich schnell einzelne Station-Zeitpunkt-Kombinationen auswählen lassen.

![Bright Sky's Architektur](/assets/images/project_images/Bright_Sky/architecture.svg)
_Bright Sky's Architektur._

Als „Tor zur Welt“ für die Wetterdaten aus der Datenbank dient eine API. Diese nimmt die drei für die meisten Nutzer\*innen bequemsten Parameter _Breitengrad_, _Längengrad_, _Zeitpunkt_ entgegen, wählt die passendste Station aus dem DWD-Messnetz (bzw. den passendsten Vorhersageort) und gibt die entsprechenden Wetteraufzeichnungen (bzw. -vorhersagen) im gängigen JSON-Format zurück. Dabei geschieht im Hintergrund auch die Zusammenführung von Daten aus mehreren Quellen, bspw. falls der angefragte Zeitraum sowohl die Vergangenheit als auch die Zukunft umfasst oder falls die nächstgelegene Station nicht alle Wetterparameter veröffentlicht. Dank der beeindruckenden Leistung von PostgreSQL sind [die meisten Anfragen in weniger als 30 Millisekunden bearbeitet](https://grafana.api.brightsky.dev/). 

## Bright Sky ist keine Wetterapp!

Die Kernfunktion von Bright Sky ist das Bereitstellen von historischen Wetteraufzeichnungen, von Daten zur aktuellen Wetterlage und von Wettervorhersagen in einem _maschinell lesbaren_ Format. Dies hilft überall dort, wo Wetterdaten maschinell verarbeitet werden, z. B. für wissenschaftliche Auswertungen, in der Heimautomatisierung, in Frühwarnsystemen oder aber auch als Daten*quelle* für Wetterapps von Drittanbietern. Diese Programme können die öffentliche, kostenfreie Bright Sky-Schnittstelle nutzen, um auf Wetterdaten des Deutschen Wetterdienstes zuzugreifen. Wie simpel die Nutzung funktioniert und wie Bright Sky als Datenquelle in eine hypothetische Wetterapp eingebunden werden könnte, zeigt unsere [Online-Demo](https://brightsky.dev/demo/)!

[![Bright Sky Online-Demo](/assets/images/project_images/Bright_Sky/brightsky-demo.png)](https://brightsky.dev/demo/)

Bright Sky ins Leben rufen zu dürfen, war in vielerlei Hinsicht ein sehr dankbares Unterfangen: Schon in den ersten Wochen nach dem Freischalten der Alpha-Version -- obwohl kaum beworben -- erreichten uns E-Mails vom DWD und von Nutzer\*innen aus Deutschland und sogar den Amerikas (das MOSMIX-Modell des DWD enthält weltweite Wettervorhersagen) mit viel hilfreichenem Feedback und warmen Worten. Bereits nach drei Wochen durfte Bright Sky seine erste Feuerprobe erfahren. Nachdem bis dahin nur etwa 100 -- 200 Anfragen je Tag eingegangen waren, gab es an einem Freitagabend Anfang Juli gleich 30.000 Anfragen innerhalb einer Stunde; wie sich im Nachhinein herausstellte für eine wissenschaftliche Auswertung. Dank der über 30 Jahre an Schweiß und Blut, die in die quelloffene PostgreSQL-Datenbank geflossen sind, ließ sich auch dieser Ansturm mit dem VPS, auf dem Bright Sky für weniger als 10 Euro im Monat [gehostet wird](https://github.com/jdemaeyer/brightsky-infrastructure), bewältigen. Seitdem ist das Grundlevel an API-Anfragen stetig angestiegen und liegt derzeit bei [fast 5.000 Anfragen pro Tag](https://grafana.api.brightsky.dev/).

Schon jetzt lässt sich Bright Sky für viele Anwendungen als freie Alternative zu den kommerziellen Anbietern verwenden. Der große Datenschatz des DWD bietet aber noch viel weiteres Potential: von großflächigen Wetterkarten über Wetterwarnungen bis zu hochaufgelösten (minütlichen) Niederschlagshistorien. Als eingefleischte Open-Source-Fans hoffen wir, einige von diesen in den nächsten Monaten und Jahren zusammen mit der Community in Features für Bright Sky gießen zu können.

_Die Entwicklung von Bright Sky wird durch die unschätzbare Betreuung durch das [Prototype-Fund](https://prototypefund.de/)-Programm der [Open Knowledge Foundation](https://www.okfn.de/) und des [DLR Projektträger](https://www.dlr.de/pt/) unterstützt und ist großzügig vom [Bundesministerium für Bildung und Forschung](https://www.bmbf.de/) finanziert. So offensichtlich es auch sein mag: Nichts hiervon wäre möglich ohne die gewissenhafte und nie endende Arbeit des [Deutscher Wetterdienstes](https://www.dwd.de/)._
