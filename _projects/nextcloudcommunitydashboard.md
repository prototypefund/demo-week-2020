---
layout: project
title:  "Nextcloud Community Dashboard"
image: /assets/images/project_images/ncdash/header.png
authors:
    - author: Azul
      link:
    - author: Jonas
      link:
brief: "Wir vereinfachen Zusammenarbeit für soziale Bewegungen in der Cloud."
summary: Wir haben im letzten halben Jahr an einer Community Wiki App für Nextcloud gearbeitet und dabei viel über die Entwicklung von Prototypen in Software-Ökosystemen gelernt. Hier teilen wir unsere Erfahrungen.
---

# Prototypen in Software-Ökosystemen entwickeln

## Vom Nextcloud Community Dashboard... 

Vor einem knappen halben Jahr haben wir uns auf den Weg gemacht, [Nextcloud][] um ein Dashboard für Gruppen zu erweitern. Nextcloud diente ursprünglich vor allem der Synchronisation von Daten. Inzwischen bietet es viele Werkzeuge zur Zusammenarbeit, wie gemeinsam genutzte [Kalender][], [Todo-Listen][], [Video Calls][] usw.

Wir haben im Vorfeld mit der Verwendung von Nextcloud für unsere Gruppen geliebäugelt. Uns haben dabei vor allem zwei Elemente gefehlt:
* Ein einfacher Wissensspeicher, der allen erlaubt, ihre Informationen beizutragen und so eine Art kollektives Gedächtnis schafft.
* Eine Übersicht darüber, was sich gerade in der Gruppe tut und die den Mitgliedern das Gefühl gibt, Teil eines kollektiven Prozesses zu sein.
Das Community Dashboard soll diese Funktionen abdecken. 

Die Entwicklung von Prototypen ist dynamisch. Sie erlaubt es, unsere Annahmen zu hinterfragen und andere Lösungen zu finden, als wir ursprünglich im Kopf hatten. Das ermöglicht es uns, das Projekt Bedürfnissen und Situationen anzupassen, die uns erst im Laufe der Entwicklung klar werden. Bei der Arbeit mit Nextcloud hat sich gezeigt, wie viel dynamischer das Ganze werden kann, wenn wir uns dazu noch in einem sich schnell entwickelnden Software-Ökosystem bewegen.

Diese Erfahrungen reflektieren wir hier. Eine Zusammenfassung findet ihr unter den [Lessons learned](#lessons_learned) am Ende.

## Weg und Ziel

Wir wollen mit unserer App die Zusammenarbeit in selbstorganisierten Gruppen vereinfachen. Ein modernes Wiki mit speziellen, auf Community-Projekte zugeschnittenen Funktionen soll die Verwaltung von kollektivem Wissen erleichtern. Mittels kollaborativer Textbearbeitungsfunktionen kann gemeinsam an Projekten gearbeitet werden.

Im Laufe der Förderung sind wir recht weit vorangekommen. [Unsere App][] bietet grundlegende Wiki-Funktionen, Dokumente können untereinander verlinkt, mittels Versionskontrolle können alte Zustände wiederhergestellt werden. Jedes neue Wiki wird automatisch mit einem Nextcloud-Arbeitskreis ("Circle") geteilt und ist allen Mitgliedern verfügbar. Ein kollaborativer Texteditor ermöglicht es, parallel an Dokumenten zu schreiben.

![Screencast: Übersicht der App-Funktionen](...)

Viel Arbeit ging in das Design der App-Oberfläche entsprechend der [Nextcloud Design Guidelines][]. Aber auch unter der Haube haben wir uns Mühe gegeben, sauber zu arbeiten, etwa durch Qualitätssicherung unseres Programmcodes mit Hilfe automatisierter Tests.

## "Standing on the shoulders of giants"

Für unser Ziel, die Zusammenarbeit in selbstorganisierten Gruppen zu vereinfachen, bietet Nextcloud hervorragende Grundlagen. Für viele Funktionen, wie [Kalender][], [Todo-Listen][], einfache [Textbearbeitung][] etc. existieren bereits Apps. Wir brauchen uns nicht um grundlegende Funktionen wie die User-Verwaltung kümmern. Die [Circles-App][] bietet die Möglichkeit, Gruppen zu bilden und mit der neuen [Text-App][Textbearbeitung] können wir auch in unserer App auf einen [WYSIWYG-Editor][] zurückgreifen, der gemeinsames Arbeiten erlaubt.

Mit der "Nextcloud Community Dashboard" App wollen wir zwei Aspekte kombinieren. Einerseits soll die App die aktuellen Aktivitäten in der Gruppe zusammenfassen. Andererseits soll es möglich sein, diese aggregierten Informationen um selbst verfasste Inhalte zu ergänzen. Wie ein Infobrett soll sie ermöglichen, neue Leute zu begrüßen, aktuelle Themen gemeinsam auf dem Schirm zu behalten und wichtige Informationen zu verlinken.

## Viel Aufwand... oder wenig?

Der Editor der Text App ließ sich leicht einbinden und bildete eine gute Grundlage für das Bearbeiten von Inhalten. Dass wir so schnell einen kollaborativen [WYSIWYG-Editor][] haben würden, hatten wir nicht gedacht.

Als erstaunlich schwierig erwies sich dann allerdings das Verlinken auf andere Daten in der Nextcloud. Verlinkte Texte wollen wir in unserer App darstellen, andere Dokumente sollen direkt geladen werden. Stattdessen können wir nur die entsprechenden Dokumente in der Files-App suchen, die URL kopieren und für Links verwenden. Der Link öffnet dann wieder die Files-App und markiert das Dokument - der Workflow ist unhandlich und nicht das, was wir im Sinn hatten.

Also machen wir uns daran, Links auf Dokumente in der Text App zu entwickeln. Und siehe da - es gibt nicht nur Feature Requests für das, was wir vorhaben sondern sogar erste Schritte als verwaiste Pull Requests. Die entwickeln wir weiter, bis sie unseren Anforderungen entsprechen und in der Text App, der Talk App und bei uns gut funktionieren. Dabei lernen wir viel über den Editor und tragen etwas zu Nextcloud bei, das diese für alle User verbessert, auch wenn unsere App nicht installiert ist.

![Screencast: Verlinken lokaler Dateien in Text-App](/core/preview?fileId=1666359&x=1024&y=1024&a=true#mimetype=image%2Fgif&hasPreview=true&fileId=1666359)

## Entwicklungszyklen verstehen

Die [ersten Reaktionen][] von Nextcloud Entwickler:innen sind sehr motivierend und begeistert. "It's the hypertext" schreibt Jan C. Borchard. Und dann ... passiert drei Wochen nichts - kein review, keine Verbesserungsvorschläge. Pull Request liegen schon mal ein paar Wochen - manchmal auch Monate lang rum. Das kennen wir auch aus anderen Projekten - auch aus unseren eigenen. Trotzdem hat es uns überrascht, denn vorher kam das Feedback von Nextcloud immer sehr zeitnah.

Was war passiert? Zum einen waren wir im Sommerurlaub-Loch gelandet - zum anderen war die Featureentwicklung für Nextcloud 20 in vollem Schwung. Viele freie Softwareprojekte haben Entwicklungszyklen mit regelmäßigen Veröffentlichungen. Nextcloud veröffentlicht eine neue Version Anfang des Jahres und eine im Herbst. Und Julius, der am nächsten mit uns zusammen arbeitete, war voll involviert in einem der Hauptfeatures der neuen Version: einer neuen Dashboard App.

Wir hatten uns am Anfang der Förderung mit mehreren Nextcloud-Entwickler:innen getroffen und unser Projekt erklärt. Schon da hatten sie uns ihre Mockups für ein Dashboard gezeigt. Es spiegelte ziemlich genau unsere Vorstellungen von der Zusammenfassung der letzten Aktivitäten wieder - nur nicht auf eine Gruppe bezogen. Wir hätten nicht gedacht, dass die Implementierung der Mockups so schnell passieren würde.

## ... zum Collective Wiki

Mit der Entwicklung des Dashboards deckt Nextcloud selbst einen Teil der Ziele ab, die wir uns für unseren Prototypen gesetzt haben. Vermutlich wird auch ein Gruppen Dashboard in Zukunft wesentlich leichter zu implementieren sein, wenn verschiedene Apps ihre Daten für das Nextcloud Dashboard zur Verfügung stellen. Aber dieses Gruppen Dashboard parallel zu entwickeln, während die Nextcloud Codebase sich in dem Bereich schnell verändert, erscheint uns nicht sinnvoll.

Stattdessen konzentrieren wir uns auf den Aspekt der selbst verfassten Informationen für die Gruppe. Um diese Entwicklung abzubilden und Verwechslungen zu vermeiden, benennen wir unsere App um. Aus dem Community Dashboard wird "Unite".

## Teilen oder Beitragen

Mit dem Fokus auf die selbst erstellten Informationen in der Gruppe tritt ein weiteres Problem in den Vordergrund. Nextcloud Circles kennen keine kollektiven Daten. Wenn ich ein Verzeichnis erzeuge und mit einem Kreis teile, so bleibt dies mein Verzeichnis und alle Menschen aus dem Kreis erhalten Zugriff. Doch wenn ich meinen Account lösche, verschwindet auch das Verzeichnis mit allen Inhalten aus dem Kreis. Wenn Menschen einen Kreis verlassen, haben sie nach wie vor Zugriff auf die Daten, die sie selbst angelegt und mit dem Kreis geteilt haben.

Für politisch aktive Gruppen ist dieser Mechanismus so störend, dass z. B. Systemli eine [Wiki Seite][systemli wiki] hat, die beschreibt, wie Circles am besten genutzt werden können. [Darin][systemli wiki] beschreiben sie den Vorteil kollektiver Daten treffend: "Ein Vorteil [...] ist, dass ihr jederzeit Personen [...] hinzufügen/entfernen könnt. [...] Außerdem könnt ihr die Verwaltung des Admin-Accounts einfach weiterreichen und es ist kein Problem, wenn die ursprünglichen Admins inaktiv werden."

Viele Gruppen funktionieren eigentlich so, dass alle etwas zum gemeinsamen Wissenspool beitragen - ein Gemeingut (Commons) entsteht. Die bestehende Implementierung erlaubt nur, das Wissen zu teilen nach dem Motto: "Wenn ich gehe, nehme ich es wieder mit". Das ist vor allem absurd, weil viel Wissen erst in der Gruppe zusammengetragen wird. Doch der Kalender, in den alle gemeinsam die Gruppentermine eintragen, gehört formal der Person, die ihn angelegt hat.

## Ein Prototyp für kollektive Datenstrukturen

Die zugrundeliegenden Datenstrukturen können wir nicht so schnell ändern. Aber wir können einen Prototypen entwickeln, um zu testen, wie ein Workflow mit kollektiven Daten aussehen kann: Ähnlich wie von Systemli empfohlen, legt unsere App beim Erzeugen eines Kreises im Hintergrund einen neuen Behelfs-User an. Dieser User dient nur als "Besitzer:in" des Kreises - ähnlich wie ein Verein als juristische Person Dinge besitzen kann, um sie den Mitgliedern zugänglich zu machen.

Unsere App legt als dieser Behelfs-User den Kreis an und lädt die Person ein, die das Anlegen des Kreises veranlasst hat. Die App legt als der Behelfs-User auch gleich noch ein Verzeichnis an, dass mit dem Kreis geteilt wird. So "gehören" der Kreis, das Verzeichnis und auch weitere später angelegte Daten formal dem Behelfs-User. Dieser existiert, so lange der Kreis existiert und wird den Kreis auch nicht verlassen. Soll der Kreis wieder gelöscht werden, so passiert das ebenfalls mit unserer App. Sie löscht den Kreis, den Behelfs-User und damit auch alle Daten des Kreises.

## Lessons learned

* Als erste Schritte sollten die Kommunikationswege und Tools des Upstream-Projekts kennengelernt und Kontakt mit den Autor:innen aufgenommen werden. Frühe kleine Pull-Requests helfen, schnell den Arbeitsprozess kennenzulernen.
* Damit einhergehend findet man schnell heraus, wie Beiträge von außen angenommen werden und erhält ein erstes Feedback für die eigenen Ideen.
* In komplexen Softwaresystemen ist es schwer abzuschätzen, wie lange einzelne Features dauern werden. Während uns der kollaborative [WYSIWYG-Editor][] quasi in den Schoß gefallen ist, war das Implementieren von Links zwischen Dokumenten wesentlich aufwendiger als gedacht.
* Entwicklungszyklen beachten: Bei der Zusammenarbeit mit externen Teams hilft es sehr, deren Prioritäten im Blick zu behalten.
* Entwicklungen priorisieren, die ein externes Review brauchen oder andere externe Abhängigkeiten haben.
* Mit [Prototyping][] können wir auch in komplexen Softwaresystemen Workflows testen. Dabei entwickeln sich unsere Vorstellungen vom Prototypen kontinuierlich weiter. Gleichzeitig können Schwachstellen in der zugrundeliegenden Software identifiziert und ausgebessert werden.

## Tausend Dank <3

An dieser Stelle möchten wir uns herzlich bedanken. Das [BMBF][] hat durch seine Förderung das Projekt erst möglich gemacht. Die Teams vom [Prototype Fund][] und dem [DLR][] standen uns während der ganzen Zeit mit Rat und Tat zur Seite.  Außerdem danken wir dem [Nextcloud Team][], das geduldig unsere Fragen beantwortet und Vorschläge begutachtet hat.

[Nextcloud]: https://nextcloud.com/
[Kalender]: https://apps.nextcloud.com/apps/calendar
[Todo-Listen]: https://apps.nextcloud.com/apps/tasks
[Video Calls]: https://apps.nextcloud.com/apps/spreed
[Unsere App]: https://gitlab.com/collectivecloud/unite
[Nextcloud Design Guidelines]: https://docs.nextcloud.com/server/latest/developer_manual/design/
[Textbearbeitung]: https://apps.nextcloud.com/apps/text
[Circles-App]: https://apps.nextcloud.com/apps/circles
[WYSIWYG-Editor]: https://de.wikipedia.org/wiki/WYSIWYG
[ersten Reaktionen]: https://github.com/nextcloud/text/pull/879#issuecomment-645924867
[systemli wiki]: https://wiki.systemli.org/howto/nextcloud/gruppen
[Prototyping]: https://de.wikipedia.org/wiki/Prototyping_%28Softwareentwicklung%29
[BMBF]: https://www.bmbf.de/
[Prototype - Fund]: https://prototypefund.de/
[DLR]: http://www.dlr.de/
[Nextcloud Team]: https://nextcloud.com/team/
