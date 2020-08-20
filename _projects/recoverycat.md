---
layout: project
title:  "Recovery Cat"
image: /assets/images/project_images/Recovery_Cat/Recovery_Cat.jpg
authors:
    - author: Alissa Rohrbach
      link:
    - author:  Alexey Rodriguez Yakushev
      link:
    - author: Andreas Pittrich
      link:
brief: "Wir ermöglichen Menschen mit Erkrankungen ein kontinuierliches und vertrauliches Reporting."
summary: "Recovery Cat ist ein personalisierbares Tool zum Reporting von Symptomen. Es befähigt Patient*innen und Psychotherapeut*innen, Symptome und Nebenwirkungen bei der Behandlung von psychiatrischen Störungen besser zu verstehen."
---

## Recovery Cat --  Blick in die Black Box von Patient\*innen mit psychischen Störungen

Recovery Cat ist ein personalisierbares Tool um Symptome selbst zu reporten. Es befähigt Patient\*innen, Psychiater\*innen und Psychotherapeut\*innen, Symptome und Nebenwirkungen bei der Behandlung von psychiatrischen Störungen wie Depressionen, Angststörungen, Sucht, bipolaren Störungen und Psychosen besser zu verstehen.

Wir entwickeln Recovery Cat als Team von Techies, Psycholog\*innen und Psychiater\*innen.

Recovery Cat ist so aufgebaut, dass Dritte die App an andere medizinische Bereiche anpassen und eigene, von Recovery Cat abgeleitete Apps erstellen können. Damit möchten wir zum Fortschritt in der digitalen Therapiebegleitung beitragen.

## Wer sind unsere Nutzer\*innen und welches Problem lösen wir für sie?

In der ambulanten Psychiatrie (Arztpraxen, Institutsambulanzen) gehen zwischen den Behandlungsterminen viele Daten verloren, die für den Behandlungserfolg wichtig sind. In dieser Blackbox können sich Symptome dramatisch verändern, Nebenwirkungen und sogar Selbstmordgedanken auftreten. Die Zeit zwischen Terminen ist für Ärzt\*innen und Patient\*innen sehr belastend, zumal bei den Terminen selbst dann unter hohem Zeitdruck die letzten Wochen rekonstruiert werden müssen. In der Folge werden Therapien nicht optimal angepasst und ernstzunehmende Symptome zu spät bemerkt. Recovery Cat versucht, dieses Problem durch ein einfaches, personalisierbares Symptom-Reporting über eine App zu lösen, die einen Blick in die Blackbox gibt.

![Logo](/assets/images/project_images/Recovery_Cat/Blackbox_in_MentalCare.png)

## Wie funktioniert Recovery Cat?

Patient\*innen und Ärzt\*innen entwickeln gemeinsam Fragen, die für das individuelle Krankheitsbild und den Alltag der Patient\*in relevant sind. Die Patient\*in erhält einen Reminder auf dem Smartphone und beantwortet die Fragen regelmäßig. Beim nächsten Termin helfen digitale Grafiken, einen detaillierten Überblick über die Symptomverläufe der Patient\*in zu erhalten. Sie ermöglichen ein sinnvolles Gespräch, um gemeinsam über die weitere Therapie zu entscheiden und helfen dabei, frühzeitig Non-Responder zu erkennen.

Auf unserer Website könnt ihr euch unseren Prototypen angucken:
https://recoverycat.wixsite.com/recoverycat

## Wie haben wir Recovery Cat während des Prototype Funds entwickelt?

Wir haben uns auf zwei Kernaktivitäten fokussiert: 

### 1. Nutzer\*innen mit einbeziehen

Wir möchten etwas entwickeln, was Nutzer\*innen wirklich brauchen (Ärzt\*innen, Therapeut\*innen, Patient\*innen). Deshalb haben wir viele User interviewt, bevor wir uns beim Prototype Fund beworben. Viele Psychiater\*innen beschrieben das Problem der Blackbox zwischen den Terminen und hatten z. T. schon eigene Lösungen entwickelt, die meist kompliziert und datenschutzrechtlich problematisch waren (z. B. Emails, in denen Patient\*innen ihre Symptome auf Skalen angeben).  
Auch während der Förderlaufzeit haben wir konstant mit Nutzer\*innen gesprochen und getestet, um sicherzustellen, dass wir unsere Zeit sinnvoll investieren. Einfache Click-Dummies (z. B. mit Marvel und proto.io) ermöglichen ein frühes Testen ohne Coden. 

Hier ist ein Eindruck unserer ersten Prototypen:  
[Erste Version Click Dummy](https://marvelapp.com/5566cgh/screen/67283232) (mit der Hand gezeichnet)  
[Iterierte Version](https://share.proto.io/3PY5NW/) (High-fidelity)

Durch die Entwicklung des technischen Prototyps haben wir nun einen ersten MVP (Minimal Viable Product), mit dem wir “echt” testen können. Dafür haben wir bereits einige Ärzt\*innen kontaktiert, die die App mit ihren Patient\*innen im realen Klinikalltag über mehrere Wochen nutzen werden. 

### 2. Coding

Coding erfolgte in zwei Stufen. Wir begannen die erste Phase mit der Suche nach geeigneten Frameworks, die es uns ermöglichten, die App für das Web (als progressive App) für Android (in f-droid und Playstore) und für IOS zu erstellen, ohne drei verschiedene Sätze von Quellcode pflegen zu müssen. Wir entschieden uns für Angular mit Ionic und 
Capacitator. Dann ging es daran, sich an die Frameworks zu gewöhnen und die Kernfunktionen zu entwickeln, um zu sehen, dass und wie alles funktionierte.  
Der zweite Pahse bestand darin, alles noch einmal zu überarbeiten, sodass es für uns und Dritte anpassbar wurde: Das beinhaltete viel Abstrahieren und Überdenken der Logik der App, damit viele der Komponenten leicht ausgetauscht oder ersetzt werden können. Auf diese Weise können Dritte (ein anderes Startup) z. B. ein Paket von Widgets für eine neue Art von Frage hinzufügen, die vielleicht eine spezielle Form benötigt. Auch Kernkomponenten können bei Bedarf ausgewechselt und an verschiedene Plattformen angepasst werden. 

## Was haben wir gelernt?

  1. __Nutzer\*innen wirklich mit einbeziehen - nicht nur beim Testen.__ Während der Interviews und Tests mit Nutzer\*innen merkten wir, dass wir weit darüber hinausgehen können, wenn wir User zu künftigen Mitgründern machen. Dies geschah ganz natürlich - als wir Psychiater\*innen befragten, waren einige von ihnen begeistert und wollten sich unserem Team anschließen. Sie hatten bereits über eine digitale Lösung zur Unterstützung ihrer Therapien nachgedacht, aber es fehlte an Tech- und Produktkenntnissen. Wir waren glücklich zu sehen, wie gut Open Source und unser Fokus auf Data Privacy von Mediziner\*innen wahrgenommen wurde. Der Wert der Zusammenarbeit ist groß: Unsere neuen Teammitglieder stellen jeden Tag sicher, dass das, was wir bauen, auch sinnvoll ist und haben ein großes Netzwerk an Usern und weiteren Stakeholdern. 

  2. __Ein klares Verständnis über das Produkt im Team:__ Wir haben die Idee so schnell wie möglich visualisiert (für den Anfang reichen Sketches mit der Hand) um sicherzustellen, dass wir das selbe Produkt im Kopf haben bevor wir anfangen zu coden. Prototyping-Apps helfen “Fakes” zu bauen und frühzeitig mit Nutzer\*innen zu testen. Auch da gibt es viele Open-Source-Alternativen. Zudem hat uns das Design-Coaching über den Prototype Fund von Simple Secure sehr geholfen – wir wurden ermutigt, selbst Wireframes zu entwerfen, auch wenn niemand von uns Designer\*in ist. Das war eine super Erfahrung. 

  3. __Wie kommt das Produkt zum User?__ Dabei geht es nicht nur darum, Geld zu verdienen. Der Prototype Fund konzentriert sich weniger auf Business Modeling, aber man sollte dennoch über die Zeit nach dem Launching nachdenken. Wenn User nicht von der Existenz des Produkts wissen, geht Wert verloren. Um ein Geschäftsmodell zu entwickeln (es gibt auch gute Open-Source-Modelle) kann es sinnvoll sein, schon während der Förderung nach einer Anschlussförderung zu schauen. Hier können Acceleratoren ein guter zweiter Schritt sein. Wir konnten während des Prototype Funds außerdem unser Team weiter aufbauen, so dass wir nun für die Gründung einer Startups aufgestellt sind. Es ist schade, wenn gute Software nicht genutzt wird, weil User nicht davon wissen, vor allem bei Public-Interest-Tech-Projekten. Deshalb sollte frühzeitig darüber nachgedacht werden, wie es nach dem Prototype Fund weitergeht, vor allem wenn sich der Wert des Produkts mit Nutzer\*innen bestätigt. 

## Was passiert nach dem Prototype Fund?

Nach dem vielen positiven Feedback durch Patient\*innen und Psychiater\*innen wurde uns klar, dass wir weiter an Recovery Cat arbeiten sollten. Der Prototype Fund ermöglichte es uns, einen technischen Prototyp zu bauen, mit dem wir eine kleine Anzahl von echten Usern gewinnen konnten und nun im realen Alltag testen. Viel Arbeit liegt aber noch vor uns – das Produkt nach den Tests iterieren oder sogar pivoten, ein besseres UX-/UI-Design, Geschäftsmodelle validieren etc. Wir hatten großes Glück, in den BIH-Accelerator der Charité aufgenommen zu werden, in dem wir ab Oktober Finanzierung und Mentoring bekommen und weitere Coder\*innen und Designer\*innen finanzieren können. Wir sind sehr dankbar, wie sich die Dinge in den letzten 6 Monaten entwickelt haben. 

## Vielen Dank an den Prototype Fund und das BMBF!

Die Finanzierung durch den Prototype Fund bzw. das BMBF war sehr wichtig für uns – über das Materielle hinaus wurden klare Ziele und Deadlines gesetzt. Als unsere Bewerbung akzeptiert wurde, war klar, dass aus unserer Idee ein echtes Produkt werden würde. Das hat etwas bei uns bewirkt: “Wir machen das jetzt wirklich!” Für uns war die demokratische, selbst-organisierte Arbeitsweise des Prototype Funds perfekt. Wir konnten viel Zeit mit Coden, User Research und Testing verbringen und wurden in keine Richtung von Investoren gepusht. Auch die Coachings haben uns geholfen. Vielen, vielen Dank an das ganze Team des Prototype Funds, des DLR und an das BMBF! 

Alissa, Andreas und Alexey

<https://recoverycat.wixsite.com/recoverycat>

