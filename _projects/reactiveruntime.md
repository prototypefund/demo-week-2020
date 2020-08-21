---
layout: project
title:  "Reactive Runtime"
image: /assets/images/project_images/ReactiveRuntime/header.png
authors:
    - author: Simon Danisch
      link:
brief: "Wir machen wissenschaftliche Forschungsergebnisse reproduzierbar und transparent."
summary: "ReactiveRuntime ermöglicht die effiziente, automatische Ausführung von numerischen Notebooks. So wird es Wissenschaftler*innen erleichtert, ihre Modelle interaktiv erlebbar zu veröffentlichen."
---

## Projektbeschreibung und Ziel

Veröffentlichungen und Reproduzierbarkeit ist ein Grundstein der wissenschaftlichen Methodik. Zur Bereitstellung von Daten, Analysen und Code erfreuen sich [Jupyter Notebooks](https://jupyter.org/) steigender Beliebtheit.
Notebooks sind interaktive Dokumente, in denen man Code entwickeln kann und die Resultate als multi-media output angezeigt bekommt:

![Ein klassisches Jupyter Notebook für eine Datenanalyse](/assets/images/project_images/ReactiveRuntime/example-notebook.png)  
<small>Ein klassisches Jupyter Notebook für eine Datenanalyse</small>

Die Veröffentlichung dieser Notebooks und die Interaktivität der generierten Graphiken gestaltet sich jedoch als Anspruchsvoll.

Abhängigkeit der Ausführungsordnung (execution order) und versteckter Zustände (hidden state) verhindern häufig die Reproduktion. Außerdem wird der graphische output oft als statische Bilder exportiert, mit welchen man nicht effizient interagieren kann.

Bei diesem Projekt, wird die Kalkulation ähnlich wie bei Spreadsheets (z. B. Excel) durch einen Graphen dargestellt, der die Abhängigkeiten zwischen den benutzten Variablen beschreibt.

Dies ermöglicht die effiziente, automatische Ausführung des gesamten Notebooks, z. B. wenn sich Inputs verändern. Zusammen mit interaktiven Widgets wie Slidern, kann man so spielerisch komplexe Daten und wissenschaftliche Modelle erforschen.

Eine Hauptinnovation dieses Projekts ist es, dass man durch das Erfassen des gesamten Compute-Graphs alle Berechnungen speichern kann - das heißt, egal ob die Berechnungen auf einem Supercomputer gelaufen sind, oder auf einem Laptop mit einem Komplizierten Setup, ist es möglich die Resultate interaktiv im Internet einem breiten Publikum vorzustellen.
Wissenschaftlern wird es so ermöglicht Ihre Forschungen besser zu erklären und macht es dadurch einfacher die Bevölkerung und Politiker zu erreichen. Somit kann ein größerer Teil der Bevölkerung wichtige Zusammenhänge verstehen, was ultimativ dazu führt, als Gesellschaft besser wissenschaftlich fundierte Entscheidungen treffen zu können. Dies ist besonders wichtig in Forschungsgebieten die uns alle betreffen, wie zum Beispiel die Klima-Krise.

Die Programmiersprache der Wahl ist [Julia](https://julialang.org/), welche eine neue, performante und einfach zu benutzende Programmiersprache ist – also vergleichbar mit Python, aber mit [der Geschwindigkeit von C++](https://julialang.org/benchmarks/). Dies macht Julia die Sprache der Wahl für moderne [große Simulationen und Daten Analysen](https://www.hpcwire.com/off-the-wire/julia-joins-petaflop-club/) und auch für [groß angelegte Klima Modellierungen](https://github.com/CliMA).
Das Projekt setzt auf die von mir geschriebene Plotting Bibliothek [Makie.jl](https://github.com/JuliaPlots/Makie.jl/) auf, welche von Grund auf für interaktive Anwendungen konzipiert worden ist.
Mein Vortrag von der [JuliaCon 2020](https://juliacon.org/2020/) gibt eine Übersicht über die Fähigkeiten:

[![image](/assets/images/project_images/ReactiveRuntime/89909417-5486ab80-dbef-11ea-9a31-2f2a0b7596e6.png)
](https://youtu.be/ACqBmDlhTBU)

Was bis jetzt fehlte, war ein performantes Web backend und die Möglichkeit die interaktiven Plots ohne einen laufenden Julia Server zu veröffentlichen.
Makie hat schon von Anfang an [Observables.jl](https://github.com/JuliaGizmos/Observables.jl/) benutzt, um einen Compute-Graph aller Berechnungen zu erstellen. Dies erleichtert es für dieses Projekt einen performanten offline Modus zu erstellen, da man alle nötigen Abhängigkeiten, Inputs und Outputs kennt, und so nur die Daten Speichern muss, die wirklich notwendig sind um online mit der Graphik zu interagieren. So ist es nun möglich, ein mit Makie visualisiertes interaktives Julia Programm auf jeglicher Plattform online zu stellen!

# Ergebnisse

Die vollständige Notebookintegration der ReactiveRuntime ist ein wenig in den Hintergrund geraten, da ungleich später das Projekt [Pluto.jl](https://github.com/fonsp/Pluto.jl) gestartet worden ist, welches zu 100 % die Reactive Runtime implementiert, die Ursprünglich von diesem Projekt beschrieben worden ist und welche dem gleichen Ausführungsmodell wie [ObservablHQ](https://observablehq.com/) folgt:

![pluto.gif](/assets/images/project_images/ReactiveRuntime/80617037-e2c09280-8a41-11ea-9fb3-18bb2921dd9e.gif)  
<small>Pluto.jl in Aktion: interaktive Grafiken sind sehr einfach zu programmieren</small>

Dies hat den Fokus auf Geschwindigkeit und den statischen Export interaktiver Plots von komplexen Modellen verschoben, was Pluto bis jetzt noch nicht unterstützt.

Nichtsdestotrotz, funktionieren alle Elemente von ReactiveRuntime in Jupyter, IJulia, Nextjournal, VSCode und sogar auch in Pluto.jl.

Nextjournal funktioniert besonders gut, da ReactiveRuntime hier automatisch jegliche Plots offline, interaktiv und reproduzierbar exportiert so, dass es sehr leicht ist diese einem breiten Publikum vorzustellen. Wenn man möchte, kann man sogar jegliche Artikel [remixen](https://nextjournal.com/help/how-to-remix) um weiterführende Analysen zu erstellen, und so aufeinander aufbauende Wissenschaft zu betreiben.

Ein [Demo Artikel](https://nextjournal.com/sdanisch/mimi-dice2013-climate-impact), der alle Daten und jegliche Software installiert hat, zeigt interaktive Visualisierungen die zusammen mit den wissenschaftlichen Partnern dieses Projekts entwickelt worden sind. Außerdem, habe ich auch einige demos mit Beschreibung auf github.io gestellt:

| [MIMI Climate impact](https://nextjournal.com/sdanisch/mimi-dice2013-climate-impact) | [Bodenfeuchte & Temperatur von homogenen Grasland](https://simondanisch.github.io/WGLDemos/soil/) |
| --- | --- |
|  [![mimis](/assets/images/project_images/ReactiveRuntime/90456562-90db6f80-e0f9-11ea-85b7-9b80f1a1ecf2.gif)](https://nextjournal.com/sdanisch/mimi-dice2013-climate-impact) | [![soil](/assets/images/project_images/ReactiveRuntime/90456794-2414a500-e0fa-11ea-9bec-70204d8e5b70.gif)](https://simondanisch.github.io/WGLDemos/soil/) |
| [Temperatur & Niederschlag in Deutschland](https://simondanisch.github.io/WGLDemos/german_heat) | [Ozean Simulation](https://simondanisch.github.io/WGLDemos/oceananigans/) |
| [![german_heat](/assets/images/project_images/ReactiveRuntime/90456595-a94b8a00-e0f9-11ea-929c-b6013f2e22a5.gif)](https://simondanisch.github.io/WGLDemos/german_heat) | [![ocean](/assets/images/project_images/ReactiveRuntime/90456718-f29bd980-e0f9-11ea-9375-700e8c123288.gif)](https://simondanisch.github.io/WGLDemos/oceananigans/) |

# Technische Details

Wie schon erwähnt ist die Basis für ReactiveRuntime die Plotting Bibliothek [Makie.jl](https://github.com/JuliaPlots/Makie.jl). Dieses Projekt hat das high Performance Web backend ([WGLMakie](https://github.com/JuliaPlots/WGLMakie.jl)) weiter ausgebaut und optimiert. WGLMakie benutzt [JSServe.jl](https://github.com/SimonDanisch/JSServe.jl) um interaktive Grafiken von Julia aus mit [ThreeJS](https://threejs.org/) & [WebGL](https://de.wikipedia.org/wiki/WebGL) im Browser zu rendern.
JSServe ist eine Bibliothek um in Julia interaktive HTML + Javascript Anwendungen zu bauen, welche nun auch ohne einen laufenden Julia Server präsentiert werden können. JSServe ist auch außerhalb von Makie nutzbar, was die Anwendung der neuen Funktionen noch relevanter macht. Einen kurzen Überblick über JSServe habe ich zur JuliaCon 2020 vorgetragen:

[![image](/assets/images/project_images/ReactiveRuntime/89909956-ebebfe80-dbef-11ea-8120-b4c34ac49396.png)](https://youtu.be/3XBlosGT7rI)

Da JSServe auch Observables.jl benutzt, funktioniert es perfekt mit Makie und dessen Compute-Graph zusammen.
Zum Beispiel, in einem interaktiven Plot, bei dem nur die Farbe + marker Größe bei einer Interaktion verändert wird, macht Observables es möglich nur diese zum Browser zu schicken, was nur wenigen Bytes entspricht.
Dies hilft auch sehr bei dem offline Modus, da durch das Fehlen des Julia Prozesses alle Daten im Voraus berechnet werden müssen. In ReactiveRuntime haben wir vollständiges Wissen, welche Daten _wirklich_ gespeichert werden müssen, um eine interaktive Graphik zu erstellen. Wenn auf dem Weg zur Graphik Gigabytes an Daten verarbeitet werden müssen, aber am Ende nur ein paar Positionen und Farben verändert werden, speichert ReactiveRuntime nur diese!
So ist die Statemap für folgende Visualisierung nur ~0.1MB groß (klick für interaktiven Demo):

[![simple](/assets/images/project_images/ReactiveRuntime/89910707-de834400-dbf0-11ea-9199-c5d4b606158b.gif)](https://simondanisch.github.io/WGLDemos/simple/)

Die Statemap kann für jegliche JSServe Applikationen generiert werden. Es werden automatisch alle Input Elemente wie Slider in der Julia App gefunden und die Kommunikation mit dem Julia Prozess wird durch einen lookup in Javascript ersetzt. Dies funktioniert natürlich nur für [pure Funktionen](https://en.wikipedia.org/wiki/Pure_function) und Input Elemente mit einer finiten Anzahl an states, wie Slider und Dropdowns. Die Input Elemente werden durch ein Trait System definiert, also jeder Benutzer kann eigene Inputs definieren, indem man folgende Funktionen überlädt:

```julia
is_widget(::MyWidget) = true
function value_range(x::MyWidget)
return any_iterable_over_possible_states
end
function update_value!(x::MyWidget, value)
# logic to update observable
end
```

Ein Beispiel dafür, wie man diese Funktionen überläd und Benutzer definierte Widgets erstellt, findet sich in der [Ozean Simulations Demo](https://github.com/SimonDanisch/JSServe.jl/blob/master/examples/oceananigans.jl).

# Zukunft

Makie ist schon sehr erfolgreich innerhalb der kleinen aber stark wachsenden Julia Community. Wenn man sich in dem [Julia-Slack](https://slackinvite.julialang.org/) anmeldet, kann man in dem inzwischen 348 starken Channel Hilfe bekommen und Fragen zu Makie stellen!
Der neue interaktive Modus, den man auf statische Webseiten und in den meisten Notebook Plattformen einbetten kann, macht Makie noch um einiges relevanter, da dies die Publikation komplexer Analysen um einiges vereinfacht.
Makie und JSServe werden auch von einigen Firmen verwendet, was dem Wachstum in Zukunft deutlich helfen wird.
Es wird auch an einer Julia Kompilation zu JavaScript und [WebAssembly](https://de.wikipedia.org/wiki/WebAssembly) gearbeitet [¹](https://github.com/Keno/julia-wasm) [²](https://github.com/MikeInnes/Charlotte.jl), so, dass es in Zukunft vorstellbar ist, dass noch komplexere Interaktionen im Browser zur Verfügung gestellt werden können!
Wir arbeiten auch weiterhin aktiv an einer besseren Integration mit Pluto.jl und anderen Notebook Plattformen, um überall schnelle und publizierbare, interaktive Grafiken verfügbar zu machen.
Man kann dem Fortschritt des Projektes auch in Zukunft unter [@MakiePlots](https://twitter.com/MakiePlots) verfolgen!

Alles deutet daraufhin, dass Makie, JSServe & ReactiveRuntime weiterhin wachsen und viel in der Forschung verwendet werden.
Dies ist schlussendlich auch dem Prototype Fund zu verdanken, der dieses Projekt gefördert hat, welcher durch den [BMBF](https://www.bmbf.de/) finanziert wird und durch den Projektträger [DLR](https://www.dlr.de/DE/Home/home_node.html) ausgetragen wurde.
