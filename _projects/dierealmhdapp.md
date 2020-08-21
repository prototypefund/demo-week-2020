---
layout: project
title: "Food Rescue App"
image: /assets/images/project_images/RealMHD/header.png
authors:
    - author: Matthias Ansorg
      link:
brief: "Das ist bestimmt noch gut!"
summary: "Mit der Food Rescue App (vormals RealMHD-App) kannst Du herausfinden, ob Lebensmittel noch genießbar sind, indem Du deren Barcodes scannst. Hier erfährst Du die Entstehungsgeschichte und die Vision für die Zukunft dieser App. Außerdem berechnen wir mit einem neuen Ansatz, welchen Anteil an der Klimakatastrophe die Nahrungsmittelverschwendung hat."
---

(This article also has an [English language version](https://fairdirect.org/blog/food-rescue-app-presentation).)

# Ein wenig Geschichte

Ob Menschen wohl für eine bestimmte Rolle geboren sind? Ich habe es schon immer gehasst zu sehen, wie brauchbare Dinge weggeworfen werden. Als ich drei oder vier Jahre alt war, sah ich zum ersten Mal wie ein Sperrmüllauto mit seiner hydraulischen Presse Möbel zertrümmerte. Ich weinte. Und jetzt schreibe ich Software gegen Lebensmittelverschwendung. Man kann da einen Zusammenhang sehen …

<figure>
  <img src="/assets/images/project_images/RealMHD/honig-opt.jpg" alt="ein Glas Honig von 1983"/>
  <figcaption>Bevor es die Food Rescue App gab, fand ich Honig von 1983 in einem verlassenen Haus. Und nun?</figcaption>
</figure>

Meine Erfahrungen mit der Rettung von Lebensmitteln begannen allerdings eher zufällig. In einem Festivalcamp in der Nähe von Kassel lernte ich zwei Wochen lang, vom Containern zu leben. Ich erntete wilde Kirschen und Pflaumen. Und dann aß ich mich durch 40-50 Gläser alten Rotkohl und war fertig, als die letzten Gläser 7,5 Jahre abgelaufen waren. Keines davon war schlecht geworden und ich werde auch wieder lange abgelaufene Lebensmittel essen (zur Abwechslung aber bitte keinen Rotkohl mehr …). Nicht alles ging glatt beim Lebensmittel retten. Einmal habe ich etwas zu spät gelernt, dass eingelegte Heringsfilets verdorben sind, wenn sie anfangen, wie Sprudelwasser zu schmecken. Ein andermal habe ich gelernt, dass eine größere Menge abgelaufenes Vollkorn-Dinkel-Knäckebrot dazu führt, dass mir eine Nacht lang schlecht ist. Ein Freund musste sich davon übergeben; wir haben dann recherchiert und Berichte gefunden, dass sogar einem Hund davon schlecht wurde.

<figure>
  <img src="/assets/images/project_images/RealMHD/rotkohl-opt.jpg" alt="ein Gericht mit Rotkohl"/>
  <figcaption>Eines meiner vielen Gerichte mit gerettetem Rotkohl.</figcaption>
</figure>

Vielleicht lag es an dieser Erfahrung mit fragwürdigem Dinkel-Knäckebrot oder einfach an der Verschwendung in unserem Nahrungsmittelsystem allgemein – eines Morgens wachte dieser Freund mit der Idee auf, dass es eine App geben sollte um herauszufinden, ob Lebensmittel noch genießbar sind. Diese App sollte so funktionieren, dass man sein Smartphone auf die allgegenwärtigen Strichcodes auf Lebensmittelverpackungen hält. Das war die Idee für [Food Rescue App](https://fairdirect.org/realmhd-app) (ursprünglich RealMHD-App genannt).

Der Prototype Fund zusammen mit dem [Deutschen Zentrum für Luft- und Raumfahrt](https://www.dlr.de/pt) halfen uns dann tatkräftig und professionell, diese Idee Wirklichkeit werden zu lassen. Ich kenne kein vergleichbares Förderprogramm, das in diesem Umfang und derart unkompliziert kleine quelloffene Software-Projekte fördert. Großes Lob an das [Bundesministerium für Bildung und Forschung](https://www.bmbf.de/), hier neue Wege bei der Innovationsförderung zu wagen!

Mit der Food Rescue App wollen wir unseren Mitmenschen ein Werkzeug an die Hand geben, das sie zu Expertinnen und Experten für Lebensmittelabfälle macht. Sie sollen schnell und sicher beurteilen können, ob und wie sie ein fragwürdiges Lebensmittel noch verwerten können. Und wir wollen mit dieser App auch zu einem umfassenderen Sinneswandel beitragen, so dass unsere Mitmenschen anfangen, eine sachkundige Genügsamkeit dem übermäßigen Konsum vorzuziehen.

Was ich mir allerdings zu Beginn der Arbeit an Food Rescue App nicht vorstellen konnte, ist der oft so unklare Wissensstand zum Thema Lebensmittel retten. Es gibt sehr viele unterschiedliche Meinungen, sowohl übervorsichtige als auch unbedachte. Ich habe mein Möglichstes getan, all diese Inhalte in eine zugängliche Form mit verständlichen Erklärungen und leicht überprüfbaren Quellen zu bringen. Du kannst nun beurteilen, ob und inwieweit mir das gelungen ist; denn die Food Rescue App ist nun bereit zum Einsatz.
**[Hier geht es zur Online-Demo der Food Rescue App!](https://appetize.io/app/hkw36e77yj8bqra3mufde078ug?device=nexus7&scale=75&orientation=landscape&osVersion=8.1&deviceColor=white&language=de)**
In dieser Online-Demonstration einer Anwendung für Mobilgeräte stehen leider nicht alle  Funktionen zur Verfügung. Das Scannen von Barcodes etwa braucht eine Smartphone-Kamera. Du kannst aber Barcode-Nummern von Lebensmitteln direkt in das Suchfeld eingeben oder hineinkopieren, zum Beispiel 1000110007387 oder 2165741004149 oder 2205873003013. Am interessantesten ist es aber, nach Kategorien zu suchen, zum Beispiel „Reis“ oder „Alter Gouda“.
Du kannst die Anwendung auch [herunterladen](http://fairdirect.org/downloads/foodrescue.apk) um sie auf deinem Android-Gerät zu installieren. Und du kannst [den Quelltext erhalten](https://github.com/fairdirect/foodrescue-app).

# Essen, Umwelt, Klima

Machen wir die Rechnung: Wie würden Umwelt und Klima profitieren wenn Lebensmittelabfälle in all ihren Formen vermieden würden? Im Jahr 2013 produzierte die Landwirtschaft im globalen Durchschnitt 9747 kcal pro Person und Tag, von denen 2353 kcal für den menschlichen Verzehr notwendig waren.<a id="cite_ref-1-1" href="#1"><sup>[1]</sup></a> Das bedeutet, dass (9747 kcal - 2353 kcal) / 9747 kcal = 75,9 % aller Kalorien für etwas anderes als menschliche Ernährung verbraucht wurden (vgl. Grafik unten). Nahrungsmittelproduktion ist laut einer Studie (mit Daten von 2010) für 26 % der globalen Treibhausgasemissionen verantwortlich.<a id="cite_ref-2" href="#2"><sup>[2]</sup></a> Zusammengenommen sind Lebensmittelabfälle also für 26 % × 75,9 % = 19,7 % der globalen Treibhausgasemissionen verantwortlich.

Diese Zahl berücksichtigt noch nicht die Treibhausgasemissionen aus Landnutzungsänderungen, da diese schwer zu messen sind (und eine Quelle endloser Streitereien darstellen). Mit Landnutzungsänderungen sind beispielsweise die erhöhten Nettoemissionen aus der Landschaft gemeint, wenn ein Wald abgeholzt und in landwirtschaftliche Nutzfläche umgewandelt wird. Die FAO, eine Organisation der Vereinten Nationen, schätzt dass "wenn Landnutzungsänderungen berücksichtigt würden \[…\] wären die globalen Treibhausgasemissionen für die Phase der Nahrungsmittelproduktion mindestens 25 Prozent höher \[…\] und potenziell 40 Prozent höher".<a id="cite_ref-3" href="#3"><sup>[3]</sup></a> Geht man von einem Mittelwert von (40 % + 25 %) / 2 = 32,5 % aus, so erhöht dies den Anteil der Lebensmittelabfälle an den globalen Treibhausgasemissionen auf 19,7 % + (19,7 % × 32,5 %) = 26,1 %!

<figure>
  <img src="/assets/images/project_images/RealMHD/diagramm.png" alt="Diagramm zur Verwendung Energie in Nahrungsmitteln"/>
  <figcaption>Globaler Nahrungsmittel-Energiefluss in kcal/Person/Jahr.<br/>
  (Basiert auf Berners-Lee et al. 2018<a id="cite_ref-1-2" href="#1"><sup>[1]</sup></a>, verwendet unter CC-BY-4.0)</figcaption>
</figure>

Insgesamt kann also ein Viertel aller Treibhausgasemissionen vermieden werden, wenn wir Lebensmittel nicht länger verschwenden. Zum Vergleich: Die verbrauchsbasierten Treibhausgasemissionen der Volksrepublik China, des weltweit größten Emittenten, lagen bei 17,9 %.<a id="cite_ref-4" href="#4"><sup>[4]</sup></a> 
Andere Studien schätzen den Beitrag von Lebensmittelabfällen zu den Treibhausgasemissionen auf 6 %,<a id="cite_ref-5" href="#5"><sup>[5]</sup></a> oder bei Einbezug der Landnutzungsänderungen dann 6 % + (6 % × 32,5 %) = 7,95 %. Dieser Wert berücksichtigt aber nur den Verlust von Nahrungsmitteln, die bereits für den menschlichen Verzehr bestimmt waren, nicht die Verluste in landwirtschaftlichen Betrieben, die Biokraftstoffproduktion, die Kalorienverluste durch die Fütterung von Vieh und denÜberkonsum. Ob 8 % oder 26 % – Lebensmittelabfälle zu minimieren ist wichtig für den Klimaschutz.

Die Auswirkungen auf die Treibhausgasemissionen sind nicht der einzige Vorteil von weniger Lebensmittelabfällen. Es wird zudem einfacher, Hunger und Unterernährung zu bekämpfen. Wenn wir die nun brachliegenden Anbauflächen wieder in einen naturnahen Zustand versetzen, können Artensterben und Grundwasserknappheit in vielen Gebieten beendet werden.

Lebensmittelabfälle zu minimieren ist, wie jede Abfallvermeidung, eine sehr erschwingliche Intervention. Es braucht dazu keine neue Technologie oder Infrastruktur, sondern "nur" Wissen. Das ist eine gute Gelegenheit für Innovationen aus der Open-Source-Bewegung. Ein Ergebnis davon ist nun die Food Rescue App, die wir im Folgenden im Detail vorstellen.


# Die Food Rescue App im August 2020

Diese erste Version der Food Rescue App enthält Open-Source-Inhalte zur Lebensmittelrettung und eine Datenbank, in der Lebensmittelprodukte mit Kategorien verknüpft sind. Wer den Barcode eines Lebensmittelprodukts scannt oder nach einer Lebensmittelkategorie sucht, erfährt aus der Anwendung dann alles, was diese zur Rettung dieser Lebensmittel weiß. Die Innovation ist hier, einen Barcode-Scanner mit Informationen zur Lebensmittelrettung zu kombinieren. Dies macht die Informationen leichter und schneller zugänglich als in jeder mir bekannten existierenden Lösung.

Unabhängig von der aktuellen Funktionalität habe ich eine Architektur gewählt, die eine zukünftige globale Nutzung der Food Rescue App ermöglicht. Das verlangsamte die Entwicklung zwar zuerst, aber diese Investition wird sich hoffentlich auszahlen. Konkret ermöglicht die gewählte Architektur die folgenden Funktionen und Anwendungsfälle:

* **Offline-Nutzung.** Die Anwendung bezieht alle Daten aus einer geräteinternen SQLite-Datenbank. Du kannst die Anwendung daher ohne Internet nutzen, sei es in einem Supermarkt mit schwachem Mobilfunksignal, auf einem Segeltörn mit zu viel frisch gefangenem Fisch, oder wenn du in einem dünn besiedelten Gebiet wohnst oder reist, in dem der Internetzugang teuer oder unzuverlässig ist. Die Datenbank ist mit 27 [MiB](https://de.wikipedia.org/wiki/Bin%C3%A4rpr%C3%A4fix) relativ kompakt, sodass es (noch) nicht notwendig ist, sie nach Weltregionen aufzuteilen. Zur Zeit enthält die Datenbank 448 224 Lebensmittelprodukte, 9818 Lebensmittelkategorien und 674 021 Zuordnungen von Kategorien zu Produkten. Das sind alle hier relevanten Inhalte aus dem Open-Data-Projekt [Open Food Facts](https://world.openfoodfacts.org/), das uns als Datenquelle dient. Die Downloadgröße der Datenbank beträgt 10,6 MiB – so groß wie 3-4 Fotos.

* **Mehrsprachiger Gebrauch.** Die Benutzeroberfläche und die Inhalte der Anwendung sind auf Deutsch und Englisch verfügbar und weitere Sprachen können einfach hinzugefügt werden. Die Namen der Lebensmittelkategorien sind ebenfalls mehrsprachig vorhanden; sie sind in den sieben Sprachen mit mehr als 1000 Einträgen bereits praktisch einsetzbar, nämlich auf Deutsch, Englisch, Französisch, Niederländisch, Spanisch, Italienisch und Finnisch.

* **Mobile und Desktop-Nutzung.** Ohne Änderungen am Quellcode ist die Anwendung sowohl eine echte Desktop-Anwendung als auch eine echte mobile Anwendung. Ermöglicht wird dies durch das Open-Source-Framework [KDE Kirigami](https://kde.org/products/kirigami/) zur Erstellung von Benutzeroberflächen auf der Basis des plattformübergreifenden Frameworks [Qt](https://www.qt.io/). Kirigami ist im Moment noch eine Nischentechnologie und wird von den Entwickelnden nicht besonders beworben, aber es funktioniert gut und ermöglicht echtes "write once, run everywhere". Wenn du Kirigami ausprobieren möchtest, findest du meine [Installationsanleitung](https://github.com/fairdirect/foodrescue-app#5-development-guide) vermutlich nützlich.

* **Plattformübergreifender Einsatz.** Bisher wurde die Food Rescue App sowohl unter Android als auch unter Linux getestet. Sie unterstützt aber alle Plattformen, auf denen Qt verfügbar ist. Dazu gehören die [offiziell unterstützten Plattformen](https://doc.qt.io/qt-5/supported-platforms.html) Linux, macOS, Windows, Android, iOS und UWP ("Windows Mobile"). Darüber hinaus ist es möglich, ohne größeren Aufwand auch die kleineren mobilen Plattformen [Ubuntu Touch](https://en.wikipedia.org/wiki/Ubuntu_Touch), [Sailfish OS](https://en.wikipedia.org/wiki/Sailfish_OS) und [LineageOS](https://lineageos.org/) zu unterstützen. Dies ist für Qt-basierte Anwendungen eine gute Möglichkeit, die Vorherrschaft der beiden großen, von der Industrie dominierten mobilen Plattformen aufzubrechen.

* **Einsatz auf alter oder langsamer Hardware.** Die Anwendung ist so konzipiert, dass sie auch auf ressourcenschwacher Hardware verwendet werden kann. Dies können ältere Geräte sein oder auch einfache Android-Geräte, wie sie zum Beispiel in Indien verbreitet sind. Ermöglicht wird dies durch kompilierten C++-Code. Die native Performance auf allen Plattformen ist insbesondere für die Barcode-Scanner-Funktion relevant. Sie übertrifft die von Barcode-Scannern in JavaScript und Java; letztere sind sonst die am meisten verbreitete Option für Android-Anwendungen.

Diese Architektur ist noch nicht perfekt. Aufgrund von Qt QML – der Technologie, die auf der Kirigami basiert – enthält die Anwendung etwas JavaScript-Code und eine virtuelle JavaScript-Maschine. Diese bietet keine native Performance, wird aber auch nicht für performance-kritischen Code verwendet. Diese Situation wird bei Erscheinen von Qt 6 gelöst, denn dann wird es möglich, QML zu echtem C++-Code umzuwandeln.<a id="cite_ref-6" href="#6"><sup>[6]</sup></a> Eine weitere Herausforderung besteht darin, dass auf Systemen ohne einen geeigneten Paketmanager die Qt-Bibliotheken bei der Verteilung der Anwendung mitgeliefert werden müssen. Dadurch erhöht sich die installierte Größe von 400 KiB (unter Linux) auf 37 MiB (unter Android). Qt muss aber bei weitem nicht so groß sein; es hat sich bloß bisher niemand um dieses Problem unter Android und iOS gekümmert. Ich habe Techniken entdeckt, um diese Größe in einer zukünftigen Version um mindestens 75 % zu reduzieren ([Details](https://dynalist.io/d/To5BNup9nYdPq7QQ3KlYa-mA#z=dI8VwnzUsz7jXpZFlJJPQUaR)).


# Vision

Wir haben gesehen, was die Food Rescue App bisher kann – noch nicht besonders viel, aber es ist ein Anfang. Was aber steckt noch drin in dieser Idee? Was ist das volle Potenzial einer kleinen Anwendung wie dieser für die großen Ziele Klimaschutz, Artenschutz und Nahrungsmittelsicherheit?

Kollektive Lebensstil-Änderungen können enorme Auswirkungen haben und sind sofort umsetzbar. Dies wird in der Studie "1.5 Degree Lifestyles" skizziert<a id="cite_ref-7" href="#7"><sup>[7]</sup></a> und durch die COVID-19-Pandemie veranschaulicht. Zwei Szenarien sind realistisch, um kollektive Lebensstil-Änderungen zu erreichen: entweder ein politischer Wandel, der dem Klimaschutz absoluten Vorrang gibt; oder ein gigantischer Kulturwandel hin zu Genügsamkeit und einem Leben innerhalb unserer ökologischen Grenzen.

Was auch immer uns letztendlich bewegt, unseren Lebensstil zu ändern: Sobald jemand aktiv versucht, Lebensmittelabfälle zu vermeiden, kann eine Anwendung wie Food Rescue App erstaunlich viel helfen. Denn ich habe während der Entwicklungsphase entdeckt, dass es bei der Vermeidung von Lebensmittelabfällen um viel mehr geht als um "Kann ich das noch essen?" oder "Wie kann ich diese Lebensmittel nächstes Mal besser lagern?” 

Es geht auch darum, ökologisch schädliche Lebensmittel erst gar nicht zu kaufen. Lebensmittel unterscheiden sich dramatisch in ihren ökologischen Auswirkungen. Tierfutter und Biokraftstoffe zum Beispiel sind die Hauptquellen für Lebensmittelverluste, wie oben gezeigt. Food Rescue App könnte hier zum Beispiel von tierischen Produkten abraten, die durch Verfüttern von Mais hergestellt wurden und würde auf die enthaltene Lebensmittelverschwendung hinweisen.

Und es gibt zahlreiche weitere Möglichkeiten, mit Food Rescue App der Lebensmittelverschwendung entgegenzuwirken. Die App kann: detaillierte Anleitungen zur Konservierung der Lebensmittel geben; Tipps zum Restentleeren von Packungen und Töpfen enthalten; Alterungs- und Verderbsymptome unterscheiden helfen; das nötige Wissen vermitteln, um halb verdorbene Lebensmittel zu retten; Nutzende zur Nachernte auf benachbarte Bauernhöfe senden; auf reife Früchte am Wegesrand aufmerksam machen; Möglichkeiten aufzeigen, um überschüssige Lebensmittel zu spenden; aufklären, welche Pflanzenteile auch noch essbar sind; den Weg zum nächsten Unverpackt-Supermarkt zeigen; unkonventionelle Nutzungen für Lebensmittelreste aufzeigen; und schließlich kann die App auch helfen, mit dem Kompost aus Lebensmittelabfällen einen eigenen Garten zu starten.

Über die Vermeidung von Lebensmittelabfällen hinaus kann dieselbe Anwendung auch zum Thema Ressourceneffizienz allgemein beraten: Also etwa Strom sparen, Frischwasser und Heizöl sparen, Müllvermeidung und die Vermeidung von Autofahrten. Ich wohne meist in einem umgebauten LKW und kann aus dieser Erfahrung berichten, dass wir den durchschnittlichen mitteleuropäischen Ressourcenverbrauch in all diesen Bereichen um mehr als 80 % senken können. Ich hoffe zwar, dass wir ein solches Maß an Genügsamkeit nicht kollektiv praktizieren müssen, um unsere Zivilisation vor der Klimakatastrophe und dem ökologischen Kollaps zu retten. Aber wenn doch, dann will ich sagen können: „Dafür gibt es eine App.“


----

# Fußnoten

1. <a id="1"/> Berners-Lee, M., Kennelly, C., Watson, R. und Hewitt, C.N., 2018. [Current global food production is sufficient to meet human nutritional needs in 2050 provided there is radical societal adaptation](http://doi.org/10.1525/elementa.310). Elem Sci Anth, 6(1), S. 52. Auszüge werden unter einer Creative-Commons-Attribution-4.0-Lizenz verwendet. [↩](#cite_ref-1-1) [↩](#cite_ref-1-2)

2. <a id="2"/> Poore, J., Nemecek, T., 2018. [Reducing food’s environmental impacts through producers and consumers](https://science.sciencemag.org/content/360/6392/987). Science, 360(6392), S. 987-992. [↩](#cite_ref-2)

3. <a id="3"/> FAO: [Food wastage footprint: Impacts on natural resources](http://www.fao.org/3/i3347e/i3347e.pdf). S. 16. [↩](#cite_ref-3)

4. <a id="4"/> Die Daten in der hier verwendeten Studie über Verluste im Nahrungsmittelsystem (Poore und Nemecek 2018 <a id="cite_ref-2" href="#2"><sup>[2]</sup></a>) stammen aus dem Jahr 2010. Zur Vergleichbarkeit verwenden wir für China die Emissionsdaten von 2010. Laut dem CAIT Climate Data Explorer des World Resource Institute emittierte China im Jahr 2010 9,8 GtCO<sub>2</sub>eq oder 21 % der weltweiten Emissionen. Ihre handelsbereinigten bzw. verbrauchsbasierten Emissionen waren 2010 laut "Our World in Data: CO2 and Greenhouse Gas Emissions: [Consumption-based (trade-adjusted) CO2 emissions](https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions#consumption-based-trade-adjusted-co2-emissions)“ um 14,59 % niedriger. Daraus ergeben sich 9,8 GtCO<sub>2</sub>eq × (1 - 0,1459) = 8,37 GtCO<sub>2</sub>eq-Emissionen bzw. 21 % × (1 - 0,1459) = 17,94 % der globalen Emissionen nach Bereinigung um die exportierten Emissionen. [↩](#cite_ref-4)

5. <a id="5"/> Our World in Data: [Food waste is responsible for 6% of global greenhouse gas emissions](https://ourworldindata.org/food-waste-emissions). [↩](#cite_ref-5)

6. <a id="6"/> Einzelheiten findest du in [meiner Antwort auf Stack Overflow](https://stackoverflow.com/a/62393490) auf die Frage "Wird QML zur Kompilierungszeit in nativen Code übersetzt oder wird es zur Laufzeit so interpretiert, wie JavaScript in Webbrowsern ausgeführt wird?" [↩](#cite_ref-6)

7. <a id="7"/> Aalto University Department of Design: [1.5 Degree Lifestyles](https://www.aalto.fi/en/department-of-design/15-degree-lifestyles). [↩](#cite_ref-7)

