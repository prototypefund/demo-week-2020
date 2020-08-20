---
layout: project
title:  "Datenguide: Statistik erklärt!"
image: /assets/images/project_images/Explorable_Explainations/header.png
authors:
    - author: Patricia Ennenbach
      link:
    - author: Christian Rijke
      link:
    - author: Simon Jockers
      link:
brief: "Wir entwickeln Rezepte für haptische, visuelle und spielerische Darstellungsformen von Statistik."
summary: "Explorable Explanations erklärt amtliche Statistiken und macht sie nutzbar -- auch für Menschen ohne besondere Vorkenntnisse."
---

# Explorable Explanations zu Regionalstatistik

Die siebte Runde des Prototype Fund brachte uns, das Team hinter der Projekt [Datenguide](https://datengui.de) (gegründet in der zweiten Runde des Prototype Fund 2017/2018), zurück zu unserer ursprünglichen Mission: **Statistiken für alle!** Wir wollen die amtliche Statistik erklären und nutzbar machen -- auch für Menschen ohne besondere Vorkenntnisse. Unser großes Vorbild waren dabei [„Explorable Explanations“](https://explorabl.es/): interaktive, ins Auge fallende Visualisierungen komplexer Zusammenhänge.

![Ein Simulator für Ansteckungen mit dem Coronavirus](/assets/images/project_images/Explorable_Explainations/corona_sim.gif)
<small>Aktuelles Beispiel für eine Explorable Explanation: [Ein Simulator für Ansteckungen mit dem Coronavirus](http://web.br.de/interaktiv/corona-simulation/), entwickelt von [BR Data](https://www.br.de/extra/br-data/)</small>

Ziel des Projekts **Statistik erklärt** war es, herauszufinden, ob und wie wir solche interaktive Darstellungs- und Vermittlungsformen einsetzen können, um Hintergründe amtlicher Statistik so erklären, dass mehr Menschen sich trauen, damit zu arbeiten. Denn die Lernkurve zur ersten Datenvisualisierung oder zum ersten Blogpost, basierend auf amtlichen Daten, ist relativ steil. Um mit amtlichen Statistiken zu arbeiten, braucht ihr Wissen über Datenformate, über regionale Einteilungen und natürlich über Statistik. Das Problem: NUTS-Level, amtliche Gemeindeschlüssel oder Tabellenformate wirken wahlweise Furcht einflößend oder einschläfernd.

Zum Hintergrund: Bei Datenguide arbeiten wir an einer digitalen Plattform, die frei nutzbare Daten der statistischen Ämter durchsuchbar macht, klar und prägnant darstellt und es euch ermöglicht, diese Statistiken für eure eigene Analysen und Projekte weiterzuverwenden. Im Lauf der Zeit hat sich dabei der Fokus verschoben, hin zu einer Plattform für Expert:innen (wie Data Scientists und Datenjournalist:innen), die über Datenschnittstellen (APIs) auf Statistiken zugreifen. Mit dem neuen Projekt „Statistik erklärt“ wollten wir auch Menschen ohne Vorkenntnisse einladen, amtliche Statistiken zu nutzen. 

## Nutzer:innen in den Fokus

Beeindruckt und inspiriert von den spielerischen Umsetzungen und technischen Möglichkeiten der „Explorable Explanations“ wollten wir am liebsten direkt losfliegen. Das Start-Coaching durch den Prototype Fund brachte uns da zurück auf die Erde: Erst einmal ging es darum herausfinden, welches Wissen die Nutzer:innen brauchen, um amtliche Statistiken über Datenguide sinnvoll abrufen und nutzen zu können. Wir nahmen die Refokussierung auf die Nutzer:innen auf und legten uns auf folgende Themen fest: 

1. Wie funktioniert NUTS, die europäische Klassifizierung statistischer Regionen?
2. Wie ist der amtliche Gemeindeschlüssel aufgebaut und was sagt er uns über die Hierarchie der Regionen?
3. Welche Datensätze gibt es in der Regionaldatenbank und für welche Regionen sind sie verfügbar?
4. Wie bereitet man Daten aus der Regionalstatistik so auf, dass man sie als Grafiken darstellen kann?

So sinnvoll und nötig für die Arbeit mit Regionalstatistik diese Themen sind, ein wenig ernüchtert hat uns die inhaltliche Recherche auch. Denn zum Beispiel die Aufteilungen in Länder und Gemeinden wird zwar auf europäischer Ebene maximal verklausuliert NUTS genannt und ist ohne Frage nötiges Grundwissen, um sortiert und schnell auf die Daten zugreifen zu können -- bei genauerem Hinblick ist sie aber nicht übermäßig komplex.

Die technische Umsetzung als Scrollytelling-Karte mit [MapboxGL](https://docs.mapbox.com/mapbox-gl-js/) für Kartendarstellungen und [Scrollama](https://pudding.cool/process/introducing-scrollama/) für die Scrollytelling-Interaktion hatte es dagegen in sich und fraß deutlich mehr Entwicklungszeit als wir gedacht hatten. Dazu kam die Erkenntnis, dass es wirklich schwer ist, komplexe Interaktionen, die auf verschiedenen Ebenen (Text, Karte, Highlighting) miteinander verzahnt sein sollen, im Kopf oder auf Papier vorauszuplanen. Das muss Mensch erst einmal denken lernen. Uns fehlt auch immer noch ein Wireframing-Tool, um solche vielschichtigen Interaktionen zu planen und zu testen, bevor Code dafür geschrieben ist. (Wer ein gutes Tool kennt, gerne melden.) 

![Screenshot des interaktiven Erklärungstück zum NUTS-System](/assets/images/project_images/Explorable_Explainations/datenguide_nuts.png)
<small>Interaktives Erklärungen zum NUTS-System</small>

Wichtig war uns immer wieder die Rückbesinnung auf die Nutzer:innen. Ursprünglich geplant waren Long-Read-Artikel mit interaktiven Erklärungen. Wir merkten aber schnell, dass es zum Beispiel beim Amtlichen Gemeindeschlüssel (AGS) gar nicht so viel im Text zu sagen gab, sondern dass der Fokus eher auf einem personalisierten Tool liegen muss, in dem Nutzer:innen für ihre Gemeinde den AGS herausfinden können und die Erklärung dadurch mitgeliefert bekommen.

![Screenshot des AGS-Tools von Datenguide](/assets/images/project_images/Explorable_Explainations/datenguide_ags.png)
<small>Interaktives Erklärungen zum Amtlichen Gemeindeschlüssel (AGS)</small>

Die Ergebnisse unseres Projekts findet ihr hier:  
<https://datengui.de/statistik-erklaert>

## Learnings: Think first, then think again

- Bevor ihr euch von technischen Möglichkeiten beeindrucken lasst, recherchiert, welche Inhalte ihr darstellen wollt und findet dann die passende Darstellungsform.
- Um Komplexes interaktiv erfahrbar zu machen, müssen die zu transportierenden Inhalte auch hinreichend komplex sein und sich für die interaktive Darstellung eignen. 
- Der Prozess des Herausfindens, was am besten wie dargestellt wird, braucht Zeit, ist der schwierigste Part und liefert oft andere Ergebnisse als das, was man sich am Anfang vorgestellt hatte.

## Was bleibt? Mehr Datenguide und mehr Open Source

Für Datenguide sind die Ergebnisse dieser Prototype-Fund-Runde Meilensteine:

- Es gibt nun ein einfaches Tool, das zeigt, welche Daten für eine bestimmte Region verfügbar sind und mit dem auch Nutzer:innen ohne Vorkenntnisse auf die Daten der amtlichen Statistik zugreifen können.
- Außerdem gibt es ein weiteres Tool, in das Nutzer:innen den Namen einer Region eingeben können, um dann den entsprechenden amtlichen Gemeindeschlüssel samt Erklärungen zurück zu bekommen.
- Dazu kommt ein Blogpost, der interaktiv anhand von Karten erklärt, wie die europäische NUTS-Klassifikation für Deutschland funktioniert.
- Und ein Blogpost, der Nutzer:innen mit Tabellenformaten vertraut macht und sie schrittweise zur ersten Datenvisualisierung mit amtlichen Statistiken aus Datenguide führt.

![Screenshot des Datenguide-Datenportals](/assets/images/project_images/Explorable_Explainations/datenguide_datenportal.png)
<small>[Datenguide](https://datengui.de/statistiken) ermöglicht es Nutzer:innen ohne vorkenntnisse, amtliche Statistiken herunterzuladen.</small>

Alle diese Bausteine bieten Einstiegsmöglichkeiten in das Arbeiten mit amtlichen Statistiken und wir erhoffen uns, dass dadurch mehr Nutzer:innen zu Datenguide finden -- auch über Suchmaschinen. 

Ein weiteres Ergebnis des Projekts ist eine Sammlung von technischen Komponenten, mit denen interaktive Erklärstücke entwickelt werden können. Für die Umsetzung verwendeten wir JavaScript und React, sowie verschiedene spezialisierte Bibliotheken wie [MapboxGL](https://docs.mapbox.com/mapbox-gl-js/) für Kartendarstellungen, [MDX](https://mdxjs.com/) für das Einbetten von interaktiven Komponenten in Markdown-Dokumente und [Scrollama](https://pudding.cool/process/introducing-scrollama/) für Scrollytelling-Interaktion. Sie können aber auch von allen weiterverwendet werden, der ähnliche Erklärstücke umsetzen möchten. Wir hoffen damit der deutschen Datenjournalisten-Community Impulse zu geben, sodass in Zukunft mehr ‘Explorable Explanations’ umgesetzt werden -- gerne auch mit Daten aus der Regionalstatistik.

Erste Nutzer:innen für die Komponentensammlung gibt es bereits: Für Oktober ist die Verwendung der Komponenten durch das Datenteam des Westdeutschen Rundfunks und der Redaktion von ‘Die Story’ geplant. 

### Source Code:

- Die Datenguide-Website, inklusive der interaktiven Erklärstücke:  
  <https://github.com/datenguide/datenguide>

- Unsere Sammlung von Komponenten für interaktive Erklärstücke:  
  <https://github.com/datenguide/explorables>

Wir bedanken uns für die Förderung durch das BMBF und die kompetente Durchführung durch das DLR. (Alleine mal Post vom DLR zu bekommen, war ein Lifetime-Goal).
