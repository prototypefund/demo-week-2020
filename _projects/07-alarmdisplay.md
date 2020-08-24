---
layout: project
title:  "Alarmdisplay"
image: /assets/images/project_images/Alarmdisplay/header.png
authors:
    - author: Andreas Brain
      link: https://alarmdisplay.org/
brief: "Wir erleichtern Einsätze für Hilfsorganisationen."
summary: "Alarmdisplay ist ein modulares Informationssystem zur Alarmvisualisierung für Feuerwehren und andere Hilfsorganisationen. Ebenso kann es zur Zusatzalarmierung verwendet und durch seine vielen Schnittstellen mit anderer Software verknüpft werden."
---

Was passiert eigentlich zwischen einem Anruf bei der 112 und dem Eintreffen der Feuerwehr?
In der Regel werden Freiwillige Feuerwehrleute alarmiert, die sich auf den Weg zum Feuerwehrhaus machen.
Eine Berufsfeuerwehr gibt es nur in größeren Städten, die bundesweit über 990.000 Freiwilligen bilden die überwältigende Mehrheit.
Einer dieser Feuerwehrleute bin ich, bei einer kleinen [Stadtteilfeuerwehr](https://www.feuerwehr-ottmarshausen.de/) im Landkreis Augsburg.
Über den Meldeempfänger bekommen wir nach der Alarmierung zwar eine grobe Beschreibung des Einsatzes, aber die Details erfahren wir erst im Feuerwehrhaus:
Was ist genau los, welche Fahrzeuge werden benötigt, wurden weitere Kräfte alarmiert und vor allem wo ist der Einsatz?
Das alles per Funk bei der Leitstelle zu erfragen kostet wertvolle Zeit.
Die Alternativen dazu können je nach Bundesland und Leitstelle unterschiedlich sein, in Bayern zum Beispiel gibt es noch das gute alte Fax.

## Wie es zu dem Projekt kam

Nun ist das Fax nicht mehr unbedingt der aktuellste Stand der Technik.
Abgesehen von langen Übertragungszeiten ist auch das Erscheinungsbild nicht sehr zugänglich.
Entsprechend gibt es seit Jahren Programme, die den Text aus dem Fax mittels Texterkennung (OCR) wieder auslesen können und auf einem Bildschirm übersichtlich darstellen.
Oft werden die gewonnenen Daten auch gleich für die Zusatzalarmierung genutzt, also den Versand der Einsatzdetails per SMS oder App.
Die meisten dieser Systeme sind proprietäre Lösungen, die kommerziell vertrieben werden und preislich nicht im Verhältnis zu unserem Einsatzaufkommen stehen.
Im Open-Source-Bereich hat sich [AlarmWorkflow](https://github.com/OpenFireSource/AlarmWorkflow) einen Namen gemacht, viele weitere Projekte scheinen nicht über eine lokal begrenzte Verwendung hinausgekommen zu sein.

Im Zuge von Modernisierungsarbeiten unseres Feuerwehrhauses bekamen wir nicht nur einen Internetanschluss, sondern haben uns auch für den Empfang von Alarmfaxen angemeldet.
Anfänglich verwendeten wir dazu ein herkömmliches Faxgerät, doch das war nicht ganz ideal.
Das zuvor erwähnte Erscheinungsbild des Faxes wird durch Thermopapier nicht gerade besser, wie [dieses Beispiel](/assets/images/project_images/Alarmdisplay/Alarmfax-AW2012.jpg) zeigt.
Außerdem hätten wir gerne zwei Kopien ausgedruckt, um die Informationen auf beiden Fahrzeugen dabei zu haben.
Durch den laufenden Umbau konnten wir zwei Bildschirme in der Fahrzeughalle installieren, die für eine Alarmanzeige vorgesehen waren.

Von nun an hielt ich bei jedem Besuch in anderen Feuerwehrhäusern Ausschau nach Bildschirmen, um die bestehenden Systeme mal in Aktion zu sehen.
Einige davon habe ich fotografiert, um sie später genauer analysieren zu können.
Nicht jedoch, weil sie so toll waren - sondern als Negativbeispiel:
Sichtbare Fensterrahmen und Startleisten, verschenkter Platz, Laufschrift oder auch alles zusammen.
Und das handtellergroße Logo der eingesetzten Software will ich ebenso nicht sehen müssen.
Die Fotos kann ich hier nicht veröffentlichen, aber eine Bildersuche nach "Alarmvisualisierung" oder "Einsatzbildschirm" dürfte so einige Highlights zutage fördern.

Da sah ich meine Stunde gekommen: Software für die Feuerwehr zu schreiben war ohnehin schon eine meiner Freizeitbeschäftigungen.
So programmiere ich seit 2014 das WordPress-Plugin [Einsatzverwaltung](https://einsatzverwaltung.abrain.de/), mit dem Einsatzberichte auf der Webseite erstellt werden können.
Ursprünglich entstand dieses nur für meine eigene Feuerwehr, heute läuft es auf mehr als 1000 Webseiten im deutschsprachigen Raum.

Es war klar, dass auch die Anzeige mit Webtechnologien gebaut werden muss, um eine Plattformunabhängigkeit zu erreichen.
Für den Betrieb stand nur ein veralteter Windows-Laptop zur Verfügung, also nahm ich kurzerhand einen [Raspberry Pi](https://www.raspberrypi.org/) aus meinem privaten Bestand.
Es entstand ein erster Prototyp auf Basis von [Node-RED](https://nodered.org/), das Fax wurde zwischenzeitlich direkt auf der FRITZ!Box in eine PDF-Datei umgewandelt.
Diese Datei wurde mit [tesseract](https://tesseract-ocr.github.io/) in Text umgewandelt und dann ausgewertet.
Als Anzeige kam zunächst eine einfache PHP-Seite zum Einsatz, die später durch eine Vue.js-Webanwendung ersetzt wurde.

[![Der Prototyp in Node-RED](/assets/images/project_images/Alarmdisplay/node-red.png)](/assets/images/project_images/Alarmdisplay/node-red.png)

## Was erreicht wurde

Für ein Freizeitprojekt wurde das ganze aber schnell zu anspruchsvoll.
Die 7. Runde des Prototype Funds bot den idealen Rahmen, um diese Lösung von Grund auf neu zu schreiben und zu erweitern.
Das Ziel war es, ein modulares Open-Source-Projekt zur Alarmvisualisierung auf die Beine zu stellen, das Feuerwehren -- oder andere Hilfsorganisationen -- in den eigenen vier Wänden betreiben können.
Die Kosten für Anschaffung und Betrieb sollten dabei so gering wie möglich gehalten werden und die Bereitstellung von APIs sollte die Erweiterbarkeit und die Kombination mit anderen Softwareprodukten sicherstellen.

Entstanden sind zwei Komponenten: Die Alarmzentrale und die Alarmanzeige.
Beide sind auf einem Kleinstrechner wie dem Raspberry Pi lauffähig und können ohne grafische Oberfläche betrieben werden.
Jede grafische Darstellung (Administration, Anzeige der Alarme, ...) erfolgt über einen Webbrowser und ist damit unabhängig vom eingesetzten Betriebssystem.
Das schafft bei Bedarf eine örtliche Unabhängigkeit, Server und Anzeigegerät können in verschiedenen Ecken des Gebäudes stehen, solange sie im gleichen Netzwerk sind.
Ebenso macht es rein technisch keinen Unterschied, ob ein großer Monitor oder ein Tablet zum Einsatz kommt.
Da jedes Display individuell konfiguriert werden kann, ist ein paralleler Betrieb von verschiedenen Anzeigegeräten möglich.

### Die Alarmzentrale

Die Alarmzentrale kann Ordner auf neu eintreffende PDF-Dateien (Alarmfaxe) überwachen und diese auslesen.
Aber auch von außen können Alarme per API zugeliefert werden, beispielsweise [per Funk empfangene Alarmierungen](https://de.wikipedia.org/wiki/Alarmierungssysteme_der_Feuerwehr).
Mehrere eingehende Alarme werden zu Einsätzen kombiniert, konfigurierte Einsatzmittel werden erkannt und den Einsätzen zugeordnet.
Enthaltene Adressen können optional mit [OpenStreetMap](https://www.openstreetmap.org/) abgeglichen werden.
Die Einsätze werden an die Alarmanzeige weitergeleitet, weitere Schnittstellen (z. B. für die Zusatzalarmierung) sind geplant.

### Die Alarmanzeige

Die Alarmanzeige stellt den eingegangenen Einsatz möglichst knapp und übersichtlich dar:
Einsatzgrund, Stichwort, Zeit seit dem Alarmeingang, Zieladresse und einen Freitext der Leitstelle.
Wenn gerade kein Einsatz vorliegt, dient die Anzeige als Informationsübersicht.
Bisher sind Datum und Uhrzeit, Unwetterkarten des Deutschen Wetterdienstes und Ankündigungen umgesetzt.

![Die Alarmanzeige im Einsatzfall](/assets/images/project_images/Alarmdisplay/einsatz-opt.jpg)
![Die Alarmanzeige im Ruhemodus](/assets/images/project_images/Alarmdisplay/ruhemodus-opt.jpg)

Übrigens: Die Modularität ermöglicht es beispielsweise auch, nur die Alarmanzeige zu verwenden und sie selbst mit Daten zu versorgen.

## Ausblick

Durch die Einführung des Digitalfunks eröffnete sich eine weitere Möglichkeit der Datenübertragung.
Leitstellen können Kurznachrichten mit den Einsatzdetails verschicken, ein Verfahren, das dem Alarmfax in Sachen Übertragungsgeschwindigkeit und Auswertungssicherheit haushoch überlegen ist.
Leider gehen diese Nachrichten nur an die alarmierten Fahrzeuge, für eine eigene Auswertung müsste ein zusätzliches Funkgerät vorgehalten werden.
Da die Funkgeräte nicht gerade günstig sind, ist das keine Lösung für die breite Masse.
Ich hoffe inständig, dass Bundesländer wie Bayern, die im Jahr 2020 noch immer auf das Fax setzen, sich sehr bald für eine zeitgemäße, verlässliche und gesicherte Form der Datenübertragung entscheiden.

Bereits während der Projektlaufzeit gab es sowohl auf Landkreisebene als auch im Gemeindegebiet einen Vorstoß, ein proprietäres Informationssystem einzuführen.
Mögliche Hindernisse, von denen man in diesen Fällen hört: Geld und Datenschutz.
Damit kommt das Projekt gerade zur rechten Zeit und kann hoffentlich schon bald bei weiteren Feuerwehren an den Start gehen.

Informationen rund um das Projekt gibt es auf der [Webseite](https://alarmdisplay.org/) und beim Aufsetzen einer eigenen Installation hilft die [Dokumentation](https://docs.alarmdisplay.org/).

Das Projekt Alarmdisplay soll am Schluss nicht nur im Landkreis Augsburg oder in Bayern funktionieren, sondern deutschlandweit.
Anregungen für neue Funktionen oder Anpassungen an lokale Gegebenheiten (z. B. Fax-Layout) können im [Community-Forum](https://community.alarmdisplay.org/) vorgeschlagen werden.
Bei Problemen mit der Installation oder Handhabung wird dort natürlich auch gerne geholfen.

## Danksagung

Abschließend möchte ich mich beim BMBF für diese einmalige Gelegenheit bedanken, das Projekt auf eine solide Grundlage stellen zu können und somit die Digitalisierung der Feuerwehren in Deutschland zu unterstützen.
Beim DLR-Projektträger bedanke ich mich für die Unterstützung bei der Abwicklung des Projekts, ebenso beim Team des Prototype Fund für die Betreuung und Beratung über die gesamte Laufzeit.
Die im Rahmen der Förderung angebotenen UX-Coachings haben das Ergebnis entscheidend verbessert, auch dafür bedanke ich mich herzlich.

