---
layout: project
title:  "NYGMA"
image: /assets/images/project_images/nygma/header.png
video: https://youtu.be/dFbkR9pALEQ
authors:
    - author: Alexander Wamack
      link:
brief: "Wir schützen öffentliche Infrastrukturen vor Hacking-Angriffen."
summary: "NYGMA ist eine Software-Bibliothek zum Analysieren von Computer-Netzwerkdaten. Der Fokus liegt darauf, existierende Produkte um eine wichtige Funktion zu erweitern: Das selektive (Vor-)Filtern von großen Datenbeständen"
---

*Kurz: `NYGMA` ist eine Software-Bibliothek zum Analysieren von
Computer-Netzwerkdaten. Der Fokus liegt darauf, existierende Produkte um eine
wichtige Funktion zu erweitern: das selektive (Vor-)Filtern von großen
Datenbeständen.*

Nach wie vor sind Computer-Netzwerke das Ziel von Cyber-Angriffen. Wie kann
man sich oder andere davor schützen? In einer idealen Welt wäre
das Mittel der Wahl natürlich, alle Sicherheitskonzepte und Richtlinien
konsequent umzusetzen. Die Realität aber ist eine andere: große, historisch
gewachsene und unter Umständen schlecht dokumentierte Netzwerk-Topologien
können nicht ohne Einschnitte des Betriebs auf einen entsprechenden
Sicherheitsstandard gebracht werden. Schlimmer noch: Wie kann man sich gegen
noch nicht *öffentlich* *bekannte* Sicherheitslücken -- wie beispielsweise
CVE-2020-1350 -- schützen? Die Antwort ist erschreckend: Erst einmal
überhaupt nicht. Man kann jedoch versuchen, durch gezieltes Monitoring
des Netzwerk-Perimeters und schnelles Handeln im Ernstfall nach einem
erfolgreichen Angriff dessen Auswirkung einschätzen und Gegenmaßnahmen
einleiten. Hier fügt sich `NYGMA` in die Liste der Hilfswerkzeuge ein.

[VIDEO1](https://youtu.be/dFbkR9pALEQ)

Für dieses Monitoring gibt es zahlreiche kommerzielle als auch nicht-kommerziell
verfügbare Produkte. Kommerzielle Lösungen kommen oftmals schon aufgrund 
der Anschaffungs- als auch laufenden Betriebskosten nicht in Frage. Die
gängigsten Open-Source-Software (OSS)-Lösungen `Suricata` für
regelbasierte Warnmeldungen und `Zeek` für Metadatenerfassung stellen zur
Zeit die Grundlage für ein OSS-basiertes Netzwerk-Sicherheits-Monitoring dar.

[VIDEO2](https://youtu.be/sns1dnBmbb0)

Beide Systeme bieten allerdings nicht -- oder nur sehr eingeschränkt
-- die Möglichkeit, auf Rohmaterial zurückzugreifen. Auch eine Funktion für
das wiederholte und schnelle Beantworten von Suchanfragen bietet keine der
beiden Lösungen. Besonders im Falle von reinen Warnmeldungen fehlen dem*der
Analyst\*in wichtige Kontextinformationen, um die Relevanz (false-positive?)
und Kritikalität (true-positive) eines Ereignisses schnell und korrekt
beurteilen zu können. Hier setzt `NYGMA` an: `NYGMA` ergänzt `Suricata` und
`Zeek` um die Möglichkeit, aus dem bestehenden Datenbestand Informationen im
Rohformat gezielt abfragen zu können und weitere Erkenntnisse zu gewinnen
oder tiefer gehende Analysen zu ermöglichen.

[VIDEO3](https://youtu.be/CKgEsUNJTTs)

Die Vision ist, durch die Kombination von `Suricata`, `Zeek` und `NYGMA`
die Cyber-Abwehrmöglichkeiten *für* *alle* zu verbessern. Da Monitoring-Lösungen
im Herzen des eigenen Netzwerks platziert werden, ist es eigentlich
nahezu unumgänglich, eine Open-Source-Lösung einzusetzen. Diese kann von
unabhängigen Spezialist\*innen eingesehen werden um sicherzustellen, dass keine
Daten "abfließen" und die Software selbst gängigen Sicherheitsvorschriften
genügt. Bei kommerziellen Black-Boxen ist ein (mehr oder weniger
eingeschränkter) Fernzugriff oder Exfiltration nie auszuschließen,
teilweise sogar verpflichtender Gegenstand eines Wartungs- oder Analysevertrags.
Datenschutz- und Sicherheitsinteressen widersprechen dem selbstredend.

[VIDEO4](https://youtu.be/pFefwIZgQVE)

## Wie ist die Idee entstanden?

Zu den Aufgaben von Computer-Netzwerkspezialist\*innen und Cyber-Security-Analyst\*innen
gehört unter anderem die Analyse von Netzwerkverkehren. Die Aufgaben
umfassen sowohl die Fehleranalyse als auch die Bewertung von Warnmeldungen aus
Netzwerk-Monitoring-Lösungen. Dabei ist es notwendig, möglichste vollständige
Informationen zu den betrachteten Fällen zu erhalten. Insbesondere bei reinen
Event-basierten Produkten fehlen jedoch häufig die tatsächlich übertragenen Daten
oder weitergehende wichtige Informationen. Auch die regelmäßig enorme Datenmenge 
der Netzwerkdaten stellt für tiefergehende Analysen oftmals ein Problem dar.

Die Idee hinter NYGMA ist einfach: Als Vorstufe für weitergehende Analysen werden
die Netzwerkdaten voranalysiert und nach bestimmten Kriterien sortiert.
Diese Sortierung wird dann durch `NYGMA` ausgenutzt, um gezielt einzelne
Datensätze aus dem Rohmaterial zu extrahieren und an ein nachgelagertes
Analyseprogramm weiterzuleiten. Idealerweise spielt es dabei keine Rolle,
ob die Daten in Echtzeit "sortiert" bzw. bearbeitet werden oder ein bereits
vorhandener Datenbestand analysiert werden muss.

Dieses Vorgehen ermöglicht Analyst\*innen, eigene Werkzeuge und Verfahren
auf selektierte Ausschnitte von Datenströmen anzuwenden. Weitergehende
Erkenntnisse können wiederum eine erneute Selektion erfordern. Diese
wiederholten Anfragen sind die Stärken von `NYGMA`. Durch die Sortierung
können diese sehr schnell und effizient abgearbeitet werden.

Anfragen an `NYGMA` können auch automatisiert erfolgen. So können beispielsweise 
bei einem Security-Event aus dem Monitoring die Daten der betreffenden
Kommunikationspartner abgefragt und weiter bearbeitet werden.

## Anwendungsbereiche

Die Zielgruppe von `NYGMA` sind Netzwerkadministrator\*innen und
Cyber-Security-Analyst\*innen, die bereits mit `Suricata` oder `Zeek` arbeiten
und eine Lösung für die Aufbereitung von Computer-Netzwerkdaten
benötigen. Konkrete Anwendungsfälle reichen von der Fehlersuche in
Netzwerken, leistungsorientierten Optimierungen oder forensischen Untersuchungen bis hin
zu Analysen nach oder während eines erfolgreichen Angriffs (Incident-Response).

Auch in Schulungen zu Netzwerken allgemein kann `NYGMA` eingesetzt werden. Dies
wird in dem technischen Workflow anhand einer forensischen Untersuchung in kleinem
Umfang demonstriert: [github/prototypefund-demoweek](https://github.com/stackless-goto/prototypefund-demoweek/tree/master/workflow) (Dieses Beispiel ist sehr technisch und für das Verständnis ist Vorerfahrung im Umgang mit Computer-Netzwerken notwendig.)

Die stärke von `NYGMA` liegt darin, dass es kein einzelnes Programm
sondern eine Bibliothek ist die auf den konkreten Einsatzzweck -- also das
eigene Netzwerk -- umfassend angepasst werden kann. Auch wird keinerlei Annahme
über die Daten selbst getroffen. Zum Export der Daten werden Standardformate
verwendet. Damit läßt sich die Software komfortabel integrieren.

## Vorgehensweise bei der Entwicklung

`NYGMA` ist in `C++20` implementiert. Die Projektplanung erfolgte in
Absprache mit dem Prototype Fund jeweils wöchentlich eine Woche im Voraus
sowie mit einem kurzen Rückblick der vergangenen Woche. 

Die Implementierung selbst erfolgte angelehnt an ein *Test-Driven-Development*:
Für jede *wichtige* Funktionalität wurden einzeln ausführbare *Unit-Tests*
implementiert. Die Tests wurden zusammen mit der tatsächlichen Implementierung
entworfen.

Zusätzlich wurden auch Test-Treiber für ein Fuzzing der Komponenten
bereitgestellt. Die Treiber bzw. Fuzzer basieren auf `libFuzzer` und
`honggfuzz`. Durch die frühe Integration der Fuzzing-Komponenten in
Kombination mit den Unit-Tests konnte parallel zur Entwicklung eine
QA (Quality Assurance) des `C++`-Codes erfolgen.

Gerade bei der Entwicklung des Prototypen war dieses Vorgehen besonders
wichtig: Änderungen, z. B. an den Algorithmen und Datenstrukturen, können
schnell im Rahmen der Test-Cases auf entsprechende Korrektheit überprüft
werden.

  - [~google/honggfuzz](https://github.com/google/honggfuzz)
  - [~llvm/libFuzzer](https://llvm.org/docs/LibFuzzer.html)

## Herausforderungen

Die größte Herausforderung war die Auswahl und Implementierung der
Algorithmen. Für die Komprimierung der Index-Daten wurden unterschiedliche
Verfahren getestet. Die Herausforderung lag im wesentlichen darin, nicht zu
viel Zeit in Optimierungen und Benchmarking zu investieren und dennoch eine gute
Performanz mit dem Prototypen zu erreichen.

## Future Work

Beim Verarbeiten der Daten werden spezielle Befehle (SIMD: SSE und AVX)
der Intel-X86 Prozessoren verwendet. Eine Portierung der Software für die
64Bit-ARM Architektur (aarch64/NEON) ist geplant.

Bei der Implementierung der Komprimierungsalgorithmen entstand die Idee für
eine angepasste Methode mit höherem Komprimierungspotential. Die Umsetzung
dieser Idee ist ein weiterer Meilenstein.

Im Rahmen der *Prototyp-Entwicklung* lag der Fokus auf forensischen
Untersuchungen eines bestehenden Datensatzes. Dies ist besonders hilfreich,
um bei der Entwicklung stets mit deterministischen Datenströmen
arbeiten zu können. Als wichtige Erweiterung von `NYGMA` steht die
*Live-Datenverarbeitung* an oberster Stelle.

Mit Hilfe des *Live-Capturing* wird eine Lösung zum Domain-Name-System (DNS)
Monitoring entwickelt, die basierend auf den Eigenschaften von `NYGMA`
als leichtgewichtiges Intrusion-Detection-System (IDS) eingesetzt werden kann.

  - [Passive DNS Replication - Florian Weimer](https://www.first.org/conference/2005/papers/florian-weimer-paper-1.pdf)

## Eure Hilfe ist gefragt

Auch wenn die Funktionalität von `NYGMA` bereits umfangreich ist,
handelt es sich immer noch um einen Prototypen. Damit das Projekt auch
weiterhin existieren kann, ist Mithilfe aus der Community gefragt: Sei es durch
Programmierleistung, Dokumentation, Integerations-Tests, Fuzzing, Uses-Case
Beispiele oder auch finanzielle Unterstützung für die Entwicklung weiterer
Features.

Wendet euch mit jeglichem Feedback gerne an [al3x@64k.by](mailto:al3x@64k.by).

`NYGMA` wird auf freiberuflicher Basis als Open-Source-Software unter
einer freizügigen Lizenz (Blue-Oak License, ähnlich zu MIT/ISC) gepflegt.

## Danksagung

`NYGMA` wurde durch das Bundesministerium für Bildung und Forschung (BMBF)
gefördert. Besonderer Dank geht an das DLR für die Unterstützung bei
der Antragstellung und Hilfe bei allen organisatorischen Fragen. Absolut
beeindruckend war die Projektbegleitung durch den Prototype Fund. Ohne die
vielen Gespräche, wertvolles Feedback und die Organisation von @tasmo,
@shiromarieke @PatriciaLeu, @KthrnMeyer und @AVWG wäre dieses Projekt nicht
möglich gewesen. Vielen, vielen Dank an alle beteiligten des Prototype Fund!

## Projekt-Links

Eine Übersicht über die Projekte, die während der Projektzeit entstanden sind:

| Quell-Code                                                           | Zweck                             |
|----------------------------------------------------------------------|-----------------------------------|
| [nygma](https://github.com/stackless-goto/nygma)                     | Hauptprojekt, Index, Abfrage      |
| [gotham](https://github.com/stackless-goto/g0tham)                   | Demo User-Interface, Muster-Index |
| [libforest](https://github.com/stackless-goto/libforest)             | B+Tree Implementierungen          |
| [libunclassified](https://github.com/stackless-goto/libunclassified) | Support Code, Logging             |
| [pest](https://github.com/stackless-goto/pest)                       | Unit-Tests und Benchmarking       |

