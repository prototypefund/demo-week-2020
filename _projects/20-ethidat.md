---
layout: project
title:  "Ethidat (CO2-Datenbank)"
image: /assets/images/project_images/Ethidat/header.png
authors:
    - author: Lars Wissler
      link:
    - author: Elias Philipp
      link:
brief: "Wir zeigen, wie viel CO2 Unternehmen produzieren."
summary: "Ethidat stellt ESG-Unternehmensdaten sowie die Emissionen von CO2-Gasen strukturiert zur Verfügung, damit diese Daten besser von Wissenschaftler*innen und anderen Interessierten verwendet werden können."
---

Mit einem wachsenden Fokus auf Nachhaltigkeit und Verantwortlichkeit der Wirtschaft bestehen inzwischen zahlreiche Initiativen mit dem Ziel, das Agieren von Unternehmen transparenter zu machen. Aspekte wie ESG (Environmental, Social, Governance) oder CSR (Corporate Social Responsibility) gewinnen seit einigen Jahren stetig an Bedeutung. 

<div class="iframe-container">
    <iframe src="https://www.youtube-nocookie.com/embed/3MbmB0Fc4aw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Die EU (z. B. mit dem [EU Emission Trading System](https://ec.europa.eu/clima/policies/ets/monitoring_en) und die Vereinten Nationen ([UN Global Compact](https://www.unglobalcompact.org/)) sowie Non-Profit-Organisationen wie die [Global Reporting Initiative](https://www.globalreporting.org/Pages/default.aspx) bemühen sich, Unternehmen auf Basis von Veröffentlichungsstandards, Richtlinien und Fragebögen zur Offenlegung von gesellschaftlich und ökologisch relevanten Informationen zu bewegen. Diese Initiativen geben vor, welche Informationen veröffentlicht werden müssen, aber nicht die Art und Struktur der Veröffentlichung. Als Resultat ist die maschinelle Verarbeitung der veröffentlichten Daten zeitaufwendig und technisch schwierig. Angesichts der enormen Datenmenge, die die Grenzen einer effektiven manuellen Verarbeitung übersteigt, wäre die strukturierte, maschinenlesbare Veröffentlichung jedoch essentiell für die vollständige Aufbereitung und den Vergleich von Unternehmensdaten. Ein Resultat sind Kosten von mehreren zehntausend Euro, die üblicherweise für den Zugriff auf verfügbare Datensätze aufgerufen werden und allgemeine Transparenz verhindern. 

Im Rahmen des Projektes CO2-Datenbank haben wir einen Anfang gemacht, um ESG-Unternehmensdaten sowie die Emissionen von CO2-Gasen strukturiert zur Verfügung zu stellen.

![Ethidat screenshot 2](/assets/images/project_images/Ethidat/Co2-2.jpg)

Üblicherweise veröffentlichen Unternehmen diese Informationen in ihren Jahresabschlussberichten oder gesonderten Nachhaltigkeitsberichten in Form von Tabellen oder Fließtexten. Durch Crawler-Technologie, PDF-Parser und Natural Language Processing haben wir das Internet nach den relevanten Veröffentlichungen durchsucht, CO2-Daten extrahiert und in strukturierter Form gespeichert. 

![Ethidat screenshot 3](/assets/images/project_images/Ethidat/Co2-3.jpg)

Bisher konnten wir die Daten von hunderten von Unternehmen extrahieren und diese unter www.ethidat.de graphisch aufbereitet sowie in Form von Rohdaten zum Download via API zur Verfügung stellen. Neben dem stetigen Ausbau unserer Datenbank planen wir, in Zukunft neben den Emissionsdaten weitere ESG-relevante Datenpunkte zu erheben. Dazu zählen Aspekte wie Abfall, Wasser, Zertifizierungen, Frauenquote und Diversität sowie Investitionen in die Aus- und Weiterbildung von Mitarbeiter\*innen. Um insbesondere Journalist\*innen die optimale Nutzung der Datenbank zu erlauben, werden wir eine direkte Anbindung an die [Datenvisualisierungs-API Datawrapper](https://www.datawrapper.de/) anbieten.

Aufgrund der Komplexität der Sprache und verschiedenen Interpretationen oder Nuancierungen kann es zu unvollständigen oder fehlerhaften Auslegungen von Datensätzen kommen.  Daher sind wir trotz der umfassenden Automatisierung auf eine aktive Community angewiesen. Um sicherzustellen, dass möglichst alle Daten vollständig und fehlerfrei angezeigt werden, können alle registrierten Nutzer\*innen Korrekturvorschläge oder fehlende Datenpunkte in nur drei Klicks nachreichen. Wie genau ihr als Nutzer\*innen so zu mehr Transparenz und Verantwortlichkeit großer Unternehmen beitragen könnt, erklären wir in unserer interaktiven Anleitung auf ethidat.de.

Wir bedanken uns für die Unterstützung und das Vertrauen des Bundesministeriums für Bildung und Forschung, des Deutschen Zentrums für Luft- und Raumfahrt und des Prototype Funds.
